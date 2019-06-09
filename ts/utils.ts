function delimeterMsg(str) {
  console.log(`\n*************** ${str} *****************\n`);
}

function log(...args: any[]) {
  console.log(...['\n', ...args]);
}

class Dummy {}

export { log, Dummy, delimeterMsg as default };