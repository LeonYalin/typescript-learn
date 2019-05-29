import delimeterMsg from "./utils";

// type appendType = (str1: string, str2: string) => string;
// OR
const append: (str1: string, str2: string) => string =
function(str: string, append: string): string {
  return str + append;
}

function optional(arg1: number = 2, arg2?: any, arg3: string = append('a', 'b')): void {
  console.log('example of default and optional parameters');
}

function rest(name: string, ...values: number[]): void {
  console.log('example of using rest parameters.');  
}

function overload(num: number): void;
function overload(str: string): void;
function overload(flag: boolean): void;
function overload(arg: any): void {
  switch(typeof arg) {
    case 'number':
      console.log('example of overloading with a number'); break;
    case 'string':
      console.log('example of overloading with a string'); break;
    case 'boolean':
      console.log('example of overloading with a boolean'); break;
    default:
      console.log('example of overloading with any'); break;
  }
}

export default function functions() {
  delimeterMsg('FUNCTIONS');
  console.log('optional parameters example: no parameters', optional());
  console.log('optional parameters example: 1st and 3rd parameters', optional(1, 's'));
  console.log('rest parameters example', rest('rest', 1, 2, 3, 4, 5, 6, 7));
}
