enum DIRECTIONS { UP = 1, DOWN, LEFT, RIGHT };

function delimeterMsg(str) {
  console.log(`\n*************** ${str} *****************\n`);
}

function log(...args: any[]) {
  console.log(...['\n', ...args]);
}

class Dummy {}

export { DIRECTIONS, log, Dummy, delimeterMsg as default };