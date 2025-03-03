import path from 'path';

// Barra separadora de carpetas segun sistema operativo
console.log(path.sep);

// unir rutas con path.join
const filPath = path.join('content', 'subfolder', 'file.txt');
console.log(filPath);

// obtener el nombre de un archivo
const fileName = path.basename("folder/subfolder/file.txt");
console.log(fileName);

// obtener la extensión de un archivo
const extension = path.extname("folder/subfolder/file.png");
console.log(extension);