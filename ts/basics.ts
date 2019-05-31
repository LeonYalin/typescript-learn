import delimeterMsg from './utils';

const str: string = 'aaa';
const tuple: [string, number] = ["str", 1];
enum DIRECTIONS { UP = 1, DOWN, LEFT, RIGHT };

export default function basics() {
  delimeterMsg('BASICS');
  
  const up: DIRECTIONS = DIRECTIONS.UP;
  console.log('Enum example:', DIRECTIONS);
  console.log('Chosen direction:', DIRECTIONS[up]);
  console.log('Tuple example:', tuple);
  console.log('String example:', str);
}