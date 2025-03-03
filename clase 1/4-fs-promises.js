// solo en modulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

import fs from 'node:fs/promises';

console.log("leyendo el pimer archivo");
fs.readFile('file.txt', 'utf-8')
    .then(text => {
        console.log("primer archivo ->", text);
    })

console.log("Haciendo cosas mientras leo el archivo");

console.log("leyendo el segundo archivo");
fs.readFile('archivo.txt', 'utf-8')
    .then(text => {
        console.log("segundo archivo ->", text);
    })
