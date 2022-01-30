import { readFileSync } from 'fs';

const data = readFileSync('package.json', {
  encoding: 'utf-8'
});
console.log(data);