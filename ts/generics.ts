import { IPerson } from './interfaces';
import delimeterMsg, { log } from "./utils";
import { Person, Student } from "./classes";

function printArray<T>(arr: Array<T>): void {
  for (const el of arr) {
    log(el.toString());
  }
}

const persons: Array<IPerson> = [ // same as const persons: IPerson[]
  new Person('Leon', 'Yalin'),
  new Student('Nelly', 'Yalin', 82),
];

interface IMyArray<T> {
  arr: Array<T>,
  getAll(): Array<T>,
  find(item: T): T,
}

class GenericClass<T> {
  private arr: Array<T>;
}

class MyArray<T> implements IMyArray<T> {
  arr: T[];

  getAll(): T[] {
    throw new Error("Method not implemented.");
  }

  find(item: T): T {
    throw new Error("Method not implemented.");
  }
}

class GenericClassWithUpperConstraint<T extends Number> {
  num: T;
}

export default function generics() {
  delimeterMsg('GENERICS');

  log('generics: using Array<T>', persons);

  log('generics: generic functions:');
  printArray(persons);
  
  log('generics: generic classes: ', new MyArray<Person>());
}