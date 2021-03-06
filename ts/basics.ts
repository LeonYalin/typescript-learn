import delimeterMsg, { log } from './utils';

const str: string = 'aaa';
const tuple: [string, number] = ["str", 1];
enum DIRECTIONS { UP = 1, DOWN, LEFT, RIGHT };

function basics() {
  delimeterMsg('BASICS');
  
  const up: DIRECTIONS = DIRECTIONS.UP;
  log('Enum example:', DIRECTIONS);
  log('Chosen direction:', DIRECTIONS[up]);
  log('Tuple example:', tuple);
  log('String example:', str);
}

export { basics as default }