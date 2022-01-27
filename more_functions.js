// REST operator
function nextGenSum(...args) {
  // arguments
  // console.log(arguments);
  // console.log(args);
  let sum = 0;
  for (let i = 0; i < args.length; i ++) {
    sum += args[i];
  }
  return sum;
}

console.log(nextGenSum());
console.log(nextGenSum(4));
console.log(nextGenSum(5, 6, 4, 3, 5, 8, 9));

function studentDetails(name, gender, ...options) {
  console.log(name);
  console.log(gender);
  console.log(options);
}
studentDetails('mehul', 'm', 10, 90);


function perimeterRectangle(length, breadth) {
  return 2 * (length + breadth);
}

const stats = [6, 4];

// console.log(perimeterRectangle(stats[0], stats[1]));
console.log(perimeterRectangle(...stats));