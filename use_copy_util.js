import { copy } from "./lib/copy_utils.js";

const emitter = copy('evennos.js', 'evennos_copy.js');

// subscribe for various events on the emitter that will be published in the futurew
emitter.on('readSuccess', (data) => {
  console.log('Read success. Data read is ', data);
});

emitter.on('readFailure', (err) => {
  console.log('Read failure. Error is ', err);
});

emitter.on('writeSuccess', () => {
  console.log('Write success');
});

emitter.on('writeFailure', (err) => {
  console.log('Write failure. Error is ', err);
});