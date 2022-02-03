import { createReadStream } from 'fs';

const readEmitter = createReadStream('multiple_clients_simulation.js', { encoding: 'utf-8', highWaterMark: 1 * 1024 });

let chunkNo = 0;

readEmitter.on('open', () => {
  console.log('Reading about to start...')
});

readEmitter.on('data', (chunk) => {
  console.log(`Printing chunk ${++chunkNo}`);
  console.log(chunk);
});

readEmitter.on('close', () => {
  console.log('Reading done!');
});