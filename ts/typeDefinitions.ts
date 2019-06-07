import * as _ from 'lodash';
import delimeterMsg, { log } from './utils';

export default function typeDefinitions() {
  delimeterMsg('TYPE DEFINITIONS');

  log('using manually downloaded type definitions for lodash:');
  _.find([1, 2, 3], el => el === 1);

  log('tools like tsd and typings are depricated today. Use npm install @types/<package> instead.')
}