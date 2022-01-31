import { readFile, writeFile } from 'fs';

function copy(source, destination) {
  readFile(source, { encoding: null }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    writeFile(destination, data, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log('Copy success!');
    });
  });
}

copy('evennos.js', 'evennos_copy.js');