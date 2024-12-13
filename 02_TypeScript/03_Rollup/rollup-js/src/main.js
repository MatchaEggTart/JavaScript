/**
 * main entry function.
 */
import { sayHelloTo } from './modules/hello';
import { sayByeTo } from './modules/bye';

const resHello = sayHelloTo('king');
const resBye = sayByeTo('queen');

console.log(resHello);
console.log(resBye);

