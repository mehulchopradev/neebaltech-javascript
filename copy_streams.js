import { createReadStream, createWriteStream } from 'fs';

const readEmitter = createReadStream('multiple_clients_simulation.js', { encoding: null, highWaterMark: 1 * 1024 });
const writeEmitter = createWriteStream('multiple_clients_simulation.copy.js');

// streams can be piped directly
// internally handles Backpressure
readEmitter.pipe(writeEmitter);

/* readEmitter.on('data', (chunk) => {
  writeEmitter.write(chunk, (err) => {
    if (err) {
      console.log(err);
    }
  });
}); */

readEmitter.on('close', () => {
  console.log('Read stream closed');
  writeEmitter.close();
});

writeEmitter.on('close', () => {
  console.log('Write stream closed');
});