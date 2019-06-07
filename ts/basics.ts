import delimeterMsg, { log } from './utils';

const str: string = 'aaa';
const tuple: [string, number] = ["str", 1];
enum DIRECTIONS { UP = 1, DOWN, LEFT, RIGHT };

export default function basics() {
  delimeterMsg('BASICS');
  
  const up: DIRECTIONS = DIRECTIONS.UP;
  log('Enum example:', DIRECTIONS);
  log('\nChosen direction:', DIRECTIONS[up]);
  log('\nTuple example:', tuple);
  log('\nString example:', str);
}