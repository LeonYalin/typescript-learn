/// <reference path="namespaces.ts" />

/**
 * This should work without the import, but need to change the tsconfig compiler options to produce a single file.
 */
import * as utils from './utils';
import delimeterMsg from "./utils";
import { Utils } from './namespaces';
import { Employee, IEmployee as IEmp,  } from './modules';

export default function modulesAndNamespaces() {
  delimeterMsg('MODULES AND NAMESPACES');

  utils.log('namespace example: ', Utils.append('Hello ', 'World'));
}