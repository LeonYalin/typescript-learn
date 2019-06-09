import delimeterMsg, { log, Dummy } from "./utils";

class Calc {
  constructor(public value: number = 0) {
  }
  public add(val: number = 0): this {
    this.value += val;
    return this;
  }
  public multiply(val: number = 1): this {
    this.value *= val;
    return this;
  }
  public reset(): this {
    this.value = 0;
    return this;
  }
  public result(): number {
    return this.value;
  }
}

class ScientificCalc extends Calc {
  public sin(): this {
    this.value = Math.sin(this.value);
    return this;
  }
}

interface IDeclarationMerging {
  x: number,
  y: number,
}

interface IDeclarationMerging {
  sayHello(): string,
}

// module augmentation: extending the 'utils' module Dummy class using declaration merging.
declare module './utils' {
  interface Dummy {
    getRandomNum: () => number,
  }
}
Dummy.prototype.getRandomNum = function (): number { return Math.random() };

const CLASS_INFO = Symbol();

interface Identable {
  id: number,
}

class HasId implements Identable {
  constructor(public id: number){}

  // method using symbol as name. That guaranties uniqness
  [CLASS_INFO](): string {
    return 'this method uses symbol as name';
  }

  // using symbol to customize instanceof operator behavior
  static [Symbol.hasInstance](obj: Object): boolean {
    return obj.hasOwnProperty('id');
  }
}

function isIdentable(v: any): v is Identable {
  return (<Identable>v).id !== undefined;
}

export default function usingAdvancedTypeFeatures() {
  delimeterMsg('USING ADVANCED TYPE FEATURES');

  const val = new ScientificCalc(5)
    .add(3)
    .sin()
    .multiply(4);
  log('polymorphic this types example:', val);

  const declMerging: IDeclarationMerging = { x: 1, y: 2, sayHello: () => 'lalala' };
  log('declaration merging example:', declMerging);

  const augFuncResult = new Dummy().getRandomNum();
  log('module augmentation(extension) example: ' + augFuncResult);

  log('basic typeguards example:', 'typeof "a" === "string" -', typeof 'a' === 'string',
    ', new Dummy() instanceof Dummy -', new Dummy() instanceof Dummy);
  
  const hasId = new HasId(123123);
  if (isIdentable(hasId)) {
    log('user-defined typeguard example: ', 'hover on variable to see the  difference in type', hasId);
  }

  log('basic symbol example:', hasId[CLASS_INFO]());
  log('using well-known "Symbol.hasInstance" symbol to customize instanceof operator behavior:', {id: 222} instanceof HasId);
}