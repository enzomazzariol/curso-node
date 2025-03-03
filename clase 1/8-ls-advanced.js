import fs from "node:fs/promises";
import path from "node:path";
import picoColors from "picocolors";

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;

  try {
    files = await fs.readdir(folder);
  } catch (err) {
    console.error(picoColors.red(`No se pudo leer el directorio ${folder}`));
    process.exit(1);
  }

  const filesPromise = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    // console.log("-.-.-")

    try {
      stats = await fs.stat(filePath); // informacion del archivo
    } catch (err) {
      console.error(err);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d ->" : "file ->";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleDateString();

    return `${picoColors.italic(fileType)} ${picoColors.cyan(
      file.padEnd(20)
    )} ${picoColors.magenta(
      fileSize.toString().padStart(10)
    )} ${picoColors.yellow(fileModified)}`;
  });

  const filesInfo = await Promise.all(filesPromise);
  filesInfo.forEach((fileInfo) => {
    console.log(fileInfo);
  });
}

ls(folder);
