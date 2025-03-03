// solo en modulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

import fs from 'node:fs/promises';

// Async sencuencial

async function init() {
    console.log("leyendo el pimer archivo");
    const text = await fs.readFile('file.txt', 'utf-8')
    console.log("primer archivo ->", text);

    console.log("-> Hacer cosas mientras leo el archivo");

    console.log("leyendo el segundo archivo");
    const text2 = await fs.readFile('archivo.txt', 'utf-8')
    console.log("segundo archivo ->", text2);
}

init();

// Async en paralelo (mas rapido)

Promise.all([
    fs.readFile('file.txt', 'utf-8'),
    fs.readFile('archivo.txt', 'utf-8'),
]).then(([text, text2]) => {
    console.log("primer archivo ->", text);
    console.log("segundo archivo ->", text2);
});


// IIFE - Immediately Invoked Function Expression
/*(
    async() => {
        console.log("leyendo el pimer archivo");
        const text = await fs.readFile('file.txt', 'utf-8')
        console.log("primer archivo ->", text);

        console.log("-> Hacer cosas mientras leo el archivo");

        console.log("leyendo el segundo archivo");
        const text2 = await fs.readFile('archivo.txt', 'utf-8')
        console.log("segundo archivo ->", text2);
    }
)()
*/