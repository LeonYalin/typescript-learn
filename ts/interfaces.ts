import delimeterMsg from "./utils";

interface IAdditionalInfo {
  age?: number,
  weight?: number,
  hobby?: string,
}

interface IPerson {
  fullName(): string;
  sayHelloTo: IFunctionType;
  additionalInfo?: IAdditionalInfo;
  toString?(): string;
}

interface IStudent extends IPerson {
  average: number,
}

interface IFunctionType {
  (name: string): string;
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

class Person implements IPerson {
  private id: number = new Date().getTime();
  constructor(private firstName: string, private lastName: string) {
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHelloTo(name: string) {
    return `Hello ${name}, I am ${this.fullName()}`;
  }
};

function interfaces() {
  delimeterMsg('INTERFACES');

  const person: IPerson = new Person('Leon', 'Yalin');
  console.log('create a class using interface:', person);
  console.log('basic interface example:', person.sayHelloTo('World'));
}

export { IFunctionType, IPerson, interfaces as default }