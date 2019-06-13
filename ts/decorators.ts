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

@sealed
@sealedWithParams('Hello kitty!')
class Cat {
  constructor(private name: string) {
  }

  public sayMeaw(): string {
    return `${this.name}: Meaaaw!`;
  }
}

function decorators() {
  delimeterMsg('DECORATORS');

  log('class decorator example:', new Cat('Tom')['sealed']);
  log('class decorator example:', new Cat('Tom')['sealedWithParams']);
}

export { sealed, decorators as default };