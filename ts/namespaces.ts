namespace Utils {
  export function append(str: string, appender: string): string {
    return str + appender;
  }

  export namespace Arrays {
    export function find<T>(arr: Array<T>, el: T): T {
      return arr.find(item => item === el);
    }
  }
}