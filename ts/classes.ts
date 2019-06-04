import { IPerson } from './interfaces';
import delimeterMsg from './utils';

abstract class AbstractPerson {
  abstract getHobby(): string;
}

class Person extends AbstractPerson implements IPerson {
  private id: number = new Date().getTime();
  constructor(protected firstName: string, protected lastName: string) {
    super();
  }

  getHobby(): string {
    return 'MYy hobby is writing TypeScript!';
  }

  static sayHelloToAll(): string {
    return 'Hello all!';
  }

  fullName(): string {
    throw new Error("Method not implemented.");
  }

  sayHelloTo(name: string): string {
    return `Hello ${name} from ${this.fullName()}`;
  };

  toString(): string {
    return `Person[id=${this.id}, firstName=${this.firstName}, lastName=${this.lastName}]`;
  }
}

class Student extends Person {
  constructor(protected firstName: string, protected lastName: string, private average: number){
    super(firstName, lastName);
  }

  getAverage() {
    return this.average;
  }
}

const ClassExpression = class extends AbstractPerson {
  getHobby() {
    return 'My hobby is writing class exressions!';
  }
}

export default function classes() {
  delimeterMsg('CLASSES');

  const person: AbstractPerson = new Person('Leon', 'Yalin');
  console.log('create class example: ' + person);

  const student: Student = new Student('Nelly', 'Yalin', 82);
  console.log('class inheritance example: ' + student);
  console.log('average is: ' + student.getAverage());
  
  const classExpression = new ClassExpression();
  console.log('class expression example: ' + classExpression.getHobby());
  
}