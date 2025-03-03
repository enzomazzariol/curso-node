import os from 'os';

console.log("Informacion del sistema operativo:");
console.log("--------------------------------------------")
console.log("Nombre del sistema operativo: ", os.platform());
console.log("--------------------------------------------")
console.log("Nombre de la arquitectura: ", os.arch());
console.log("--------------------------------------------")
console.log("Nombre del sistema: ", os.type());
console.log("--------------------------------------------")
console.log("Versión del sistema: ", os.release());
console.log("--------------------------------------------")
console.log("Versión del kernel: ", os.version());
console.log("--------------------------------------------")
console.log("Información del CPU: ", os.cpus());
console.log("--------------------------------------------")
console.log("Memoria total: ", os.totalmem() / 1024 / 1024, " mb");
console.log("--------------------------------------------")
console.log("Memoria libre: ", os.freemem() / 1024 / 1024 + " mb");
console.log("--------------------------------------------")
console.log("uptime:", os.uptime() / 60 / 60, " horas");
