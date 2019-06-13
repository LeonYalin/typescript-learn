import delimeterMsg, { log } from "./utils";

function sealed(constructor: Function): void {
  log('Sealed decorator - sealing the class constructor');
  // Object.seal(constructor);
  // Object.seal(constructor.prototype);
  constructor.prototype.sealed = '@sealed:true';
}

function sealedWithParams(param: string) {
  return function(constructor: Function): void {
    log('Sealed decorator with parameters');
    constructor.prototype.sealedWithParams = `@sealedWithParams: ${param}`;
  }
}

function logger<TFunction extends Function>(target: TFunction): TFunction {
  const newConstructor: Function = function() {
    log('Creating new instance...', target);
  }

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;
  return <TFunction>newConstructor;
}

function readonly(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
  log(`@readonly: Setting ${propertyKey} to be read-only`);
  descriptor.writable = false;
}

function writable(isWritable: boolean) {
  return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    log(`@writableSetting ${propertyKey} is now writealbe: ${isWritable}`);
    descriptor.writable = isWritable;
  }
}

@sealed
@sealedWithParams('Hello kitty!')
@logger
class Cat {
  constructor(private name: string) {
  }

  @readonly
  public sayMeaw(): string {
    return `${this.name}: Meaaaw!`;
  }

  @writable(false)
  public toString() {
    return `Cat[name=${this.name}]`;
  }
}

function decorators() {
  delimeterMsg('DECORATORS');

  log('class decorator example: @sealed', new Cat('Tom')['sealed']);
  log('class decorator with parameters example: @sealedWithParams("...")', new Cat('Tom')['sealedWithParams']);
  log('class decorators with constructor replacement example: @logger');
  log('method decorators example: @readonly');
  log('method decorators with parameters example: @writable("...")');
}

export { sealed, sealedWithParams, logger, readonly, writable, decorators as default };