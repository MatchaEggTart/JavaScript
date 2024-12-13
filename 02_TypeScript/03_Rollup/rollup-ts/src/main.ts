import { sayHelloTo } from "./modules/hello";
import { sayByeTo } from "./modules/bye";

const resHello: string = sayHelloTo("king");
const resBye: string = sayByeTo("queen");

console.log(resHello);
console.log(resBye);
