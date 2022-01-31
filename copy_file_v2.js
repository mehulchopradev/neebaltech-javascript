import { readFile, writeFile } from 'fs';

// Promises library

function read(source) {
  return new Promise((resolve, reject) => {
    readFile(source, { encoding: null }, (err, data) => {
      if (!err) {
        // resolve my promise
        resolve(data);
      } else {
        // reject my promise
        reject(err);
      }
    });
  });
}


function write(destination, data) {
  return new Promise((resolve, reject) => {
    writeFile(destination, data, (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  })
}


async function copy(source, destination) {
  // async operations (IO)
    // reading
    // writing

  // async - await
  try {
    const data = await read(source);
    await write(destination, data);
    console.log('Copy success!');
  } catch (err) {
    console.log('Catch block');
    console.log(err);
  }
}

copy('copy_file_v2.js', 'copy_file_v3.js');