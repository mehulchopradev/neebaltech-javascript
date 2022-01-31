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


function copy(source, destination) {
  // async operations (IO)
    // reading
    // writing

  read(source)
    .then((data) => {
      // event loop
      // will be executed when the promise is resolved in the future
      return write(destination, data);
    })
    .then(() => {
      console.log('Copy success!');
    })
    .catch((err) => {
      // event loop
      // will be executed when the promise is rejected in the future
      console.log(err);
      console.log('Error copying!');
    });

  // 
  //
  // 
}

copy('copy_file_v1.js', 'copy_file_v2.js');