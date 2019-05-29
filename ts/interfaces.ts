interface IPerson {
  readonly id: string;
  firstName: string,
  lastName: string,
  fullName(): string;
  sayHelloTo(name: string): string;
  additionalInfo?: object;
}

interface IStudent extends IPerson {
  average: number,
}

interface IMyArray {
  [propName: string]: any; // when we assign any non-exist property, it will be of 'any' type
  [index: number]: string; // when we get an element by index, we'll get a string
}

interface INumberDictionary {
  [index: string]: number;
  length: number;
}

interface IReadonlyStringArray {
  readonly [index: number]: string;
}