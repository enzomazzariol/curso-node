// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

const multiplicar = require('./suma.js');

console.log('Hello World!');

console.log(multiplicar(10, 5));
