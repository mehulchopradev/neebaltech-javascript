import { getDetails, getGrade } from './lib/student_ops.js';

// getGrade() and print the output after 5 seconds of my program run
// getDetails() and print the output immediately

setTimeout(() => {
  // CPU
  const g = getGrade(90);
  console.log('Grade is', g);
  // imagine a long running calculation
}, 5000);

setTimeout(() => {
  // CPU
  const g = getGrade(90);
  console.log('Grade is', g);
}, 8000);

setTimeout(() => {
  // CPU
  const g = getGrade(34);
  console.log('Grade is', g);
}, 7000);

// CPU
const d = getDetails('mehul', 'm', 10, 90);
console.log('details is ', d);