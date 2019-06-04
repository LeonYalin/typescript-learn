/// <reference path="namespaces.ts" />

import delimeterMsg from "./utils";

export default function modulesAndNamespaces() {
  delimeterMsg('MODULES AND NAMESPACES');
  
  
  console.log('namespace example: ', Utils.append('Hello ', 'World'));
}