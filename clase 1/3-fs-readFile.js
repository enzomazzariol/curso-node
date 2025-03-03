import fs from 'node:fs';

console.log("leyendo el pimer archivo");

fs.readFile('file.txt', 'utf-8', (err, text) => {
    if (err) throw err;
    console.log("primer archivo ->",text);
});

console.log("Haciendo cosas mientras leo el archivo");

console.log("leyendo el segundo archivo");
fs.readFile('archivo.txt', 'utf-8', (err, text) => {
    if (err) throw err;
    console.log("segundo archivo ->", text);
});
