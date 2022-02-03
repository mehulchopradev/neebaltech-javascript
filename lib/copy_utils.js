// the copy utility function must
  // take in source and destination
  // should perform the copy operation

  // Events that need to be transmitted from the asynchronous operations --- EventTransmitter
  // inform the caller whenever the read operation is done (with the data was read) -- first step of copy
  // inform the caller whenever the write operation is done --- copy operation is done
  // inform the caller if there is any error in read operation -- first step of copy
  // inform the caller if there is any error in write operation -- last step of copy

import { readFile, writeFile } from 'fs/promises';
import { EventEmitter } from 'events';
import ReadError from './read_error.js';


export function copy(source, destination) {
  const eventEmitter = new EventEmitter();

  /* readFile(source, { encoding: null })
    .then(data => {
      eventEmitter.emit('readSuccess', data);
      return writeFile(destination, data);
    }, (err) => {
      // console.log(err);
      eventEmitter.emit('readFailure', err);
    })
    .then(() => {
      eventEmitter.emit('writeSuccess');
    }, (err) => {
      console.log(err);
      eventEmitter.emit('writeFailure', err);
    }); */

  readFile(source, { encoding: null })
    .then(data => {
      eventEmitter.emit('readSuccess', data);
      return writeFile(destination, data);
    }, (err) => {
      throw new ReadError(err.message);
    })
    .then(() => {
      eventEmitter.emit('writeSuccess');
    })
    .catch(err => {
      if (err instanceof ReadError) {
        eventEmitter.emit('readFailure', err);
      } else {
        eventEmitter.emit('writeFailure', err);
      }
    });

  return eventEmitter;
}