/**
 * main entry function.
 */
import { sayHelloTo } from './modules/hello';
import { sayByeTo } from './modules/bye';

const resHello = sayHelloTo('king');
console.log(resHello);
const resBye = sayByeTo('king');
console.log(resBye);