import { readFileSync, readFile } from 'fs';

function fibo(n) {
  const numbers = [];

  let a = 0;
  let b = 1;
  numbers.push(a, b);

  let i = 2;
  while(i <= n) {
    let c = a + b;
    numbers.push(c);

    a = b;
    b = c;

    i++;
  }

  return numbers.join(',');
}

let clientId = 0;

function processRequest(path, n) {
  clientId ++;
  console.log(`******* Process Request being processed for client ${clientId} ****************`);

  // read from a file denoted by the path and printing its contents
  // IO --- Event loop
  /* const data = readFileSync(path, {
    encoding: 'utf-8'
  });
  console.log(data); */

  // Non blocking asynchronous IO way

  // Event loop forks a very lower OS level thread to perform the IO operation (libuv)
  readFile(path, {
    encoding: 'utf-8'
  }, (err, data) => {
    // Executes on the event loop
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

  // calculate fibo series till n numbers and printing the output
  // CPU -- Event loop
  const a = fibo(n);
  console.log('Fibonacci series', a);

  console.log(`******* Process Request completely processed for client ${clientId} ****************`);
}

setTimeout(() => {
  processRequest('package.json', 100);
}, 0);

setTimeout(() => {
  processRequest('arrow_functions.js', 50);
}, 0);

setTimeout(() => {
  processRequest('create_accounts.js', 200);
}, 0);

setTimeout(() => {
  processRequest('play_dates.js', 10);
}, 0);

setTimeout(() => {
  processRequest('rectangle.js', 500);
}, 0);