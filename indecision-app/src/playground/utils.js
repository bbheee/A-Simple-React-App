console.log("utils js is running");
const square = x => x * x;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
//export default, export big difference
//export default substract;
//or export default (a,b) => a-b;
export { square, add, subtract as default };
