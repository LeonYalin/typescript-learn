import { IPerson } from './interfaces';
export const x: number = 2;

export function sum(a: number, b: number): number { return a + b; }

function modules() {
  // noop
}

interface IEmployee {
  id: number;
}

class Employee implements IEmployee {
  id: number = 2;
}

function diff(a: number, b: number): number { return a - b; }

const PI_NUM: number = 3.14

export { IEmployee, Employee, diff, PI_NUM as PI, modules as default /* a.k.a export default */ };
export { IPerson } from './interfaces'; /* transitive exports */