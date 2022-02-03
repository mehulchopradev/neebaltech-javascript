import { readFile, writeFile } from 'fs/promises';


async function copy(source, destination) {
  // async - await
  try {
    const data = await readFile(source, { encoding: null });
    // read is done ?????
    await writeFile(destination, data);
    // write is done ????
    console.log('Copy success!');
  } catch (err) {
    console.log('Catch block');
    console.log(err);
  }
}

copy('copy_file_v3.js', 'copy_file_v3_copy.js');