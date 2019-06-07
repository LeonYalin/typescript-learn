import delimeterMsg, { log } from "./utils";

// type appendType = (str1: string, str2: string) => string;
// OR
const append: (str1: string, str2: string) => string =
function(str: string, append: string): string {
  return str + append;
}

function optional(arg1: number = 2, arg2?: any, arg3: string = append('a', 'b')): void {
  log('example of default and optional parameters');
}

function rest(name: string, ...values: number[]): void {
  log('example of using rest parameters.');  
}

function overload(num: number): void;
function overload(str: string): void;
function overload(flag: boolean): void;
function overload(arg: any): void {
  switch(typeof arg) {
    case 'number':
      log('example of overloading with a number'); break;
    case 'string':
      log('example of overloading with a string'); break;
    case 'boolean':
      log('example of overloading with a boolean'); break;
    default:
      log('example of overloading with any'); break;
  }
}

export default function functions() {
  delimeterMsg('FUNCTIONS');
  
  log('optional parameters example: no parameters', optional());
  log('\noptional parameters example: 1st and 3rd parameters', optional(1, 's'));
  log('\nrest parameters example', rest('rest', 1, 2, 3, 4, 5, 6, 7));
}
