import delimeterMsg from "./utils";
import { Student, Person } from "./classes";
import { IPerson } from "./interfaces";

const persons: Array<IPerson> = [
  new Person('Leon', 'Yalin'),
  new Student('Nelly', 'Yalin', 82),
  new Student('Liza', 'Yalin', 146),
];

function destructuringParams([a, b]: IPerson[], { c, d }, ...rest: any[]): void { }

export default function goingFurtherWithBasicTypes() {
  delimeterMsg('GOING FURTHER WITH BASIC TYPES');

  const [leon, nelly, ...rest] = persons;
  console.log('arrays destructuring example: \n' + leon + ',\n' + nelly + ',\n' + rest[0]);

  destructuringParams(persons, { c: 'c', d: 'd' }, 123, 234, [1, 2, 34]);
  console.log('function params destructuring:');

}