export default function delimeterMsg(str) {
  console.log(`\n*************** ${str} *****************\n`);
}
export function log(...args) {
  console.log(...['\n', ...args]);
}