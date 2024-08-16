/**
 * main entry function
 */

import { sayHelloTo } from './modules/hello';
import { sayByeTo } from './modules/bye';

const resHello: string = sayHelloTo('king');
console.log(resHello);
const resBye: string = sayByeTo('king');
console.log(resBye);