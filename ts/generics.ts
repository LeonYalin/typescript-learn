import { IPerson } from './interfaces';
import delimeterMsg from "./utils";
import { Person, Student } from "./classes";

function printArray<T>(arr: Array<T>): void {
  for (const el of arr) {
    console.log(el.toString());
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

  console.log('generics: using Array<T>', persons);

  console.log('generics: generic functions:');
  printArray(persons);
  
  console.log('generics: generic classes: ', new MyArray<Person>());
}