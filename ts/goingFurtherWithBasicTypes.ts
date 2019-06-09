import delimeterMsg, { log } from "./utils";
import { Student, Person } from "./classes";
import { IPerson, IStudent } from "./interfaces";

const persons: Array<IPerson> = [
  new Person('Leon', 'Yalin'),
  new Student('Nelly', 'Yalin', 82),
  new Student('Liza', 'Yalin', 146),
];

function destructuringParams([a, b]: IPerson[], { c, d }, ...rest: any[]): void { }

interface IKeyValuePair<K, V> extends Array<K | V> {
  0: K,
  1: V,
}

function unionParams(x: string | number) { }

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
          Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
      });
  });
}

class MammalMixin {
  walk(): string {
    return 'I am walking';
  }

  eat(): string {
    return 'I am eating';
  }
}

class UsesMinix implements MammalMixin { // implements a class
  walk: () => string
  eat: () => string
}

export default function goingFurtherWithBasicTypes() {
  delimeterMsg('GOING FURTHER WITH BASIC TYPES');

  const [leon, nelly, ...rest] = persons;
  log('arrays destructuring example: \n' + leon + ',\n' + nelly + ',\n' + rest[0]);
  destructuringParams(persons, { c: 'c', d: 'd' }, 123, 234, [1, 2, 34]);
  log('function params destructuring example:');

  const persons2: Array<IPerson> = [new Person('Inna', 'Yelinichev')];
  persons2.push(...persons);
  const persons3: Array<IPerson> = [...persons, ...persons2];
  log('spread operator example: \n' + persons2);

  const pair: IKeyValuePair<string, IPerson> = ['first', persons[0]];
  log('tuple example: ' + pair);

  let unionVar: string | number = 'aaa';
  unionVar = 111;
  log('union examples: ', unionVar, unionParams('aaa'), unionParams(111));

  const intersectionVar: IPerson & IStudent = { ...persons[0], average: 99 };
  log('intersection example: ', intersectionVar);

  applyMixins(UsesMinix, [MammalMixin]);
  const usesMixin = new UsesMinix();
  log('mixins example: add mammal methods.', usesMixin.walk(), ',', usesMixin.eat());
  
  const stringLiteral: 'aaa' = 'aaa';
  const stringLiteralEnumLike: 'aaa' | 'bbb' = "bbb";
  type typeAlias = 'aaa' | 'bbb';
  const usingTypeAlias: typeAlias = "aaa";
  log('string literal example', stringLiteral, stringLiteralEnumLike, usingTypeAlias);
  
}