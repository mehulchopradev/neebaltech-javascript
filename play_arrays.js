const ea = [];
console.log(ea);

const cars = ['audi', 'bmw'];
console.log(cars);
console.log(cars.length);

// get to an element
console.log(cars[0]);
console.log(cars[1]);

// update an existing element in the array
cars[1] = 'mercedes';
console.log(cars);

// add a new element but at the end
// cars.push('bmw', 'porshe', 'i20');
// console.log(cars);

// add an element at the start
cars.unshift('i20');
console.log(cars);

// remove an element from the end
cars.pop();
console.log(cars);

// remove an element from the start
cars.shift()
console.log(cars);

// add an element in a specific poisition
cars.splice(1, 0, 'bmw');
console.log(cars);

cars.splice(1, 2);
console.log(cars);

cars.splice(0, 1, 'mercedes', 'porshe', 'bmw');
console.log(cars);

const stats = [8, 9, 10];
/* const m1 = stats[0];
const m2 = stats[1];
const m3 = stats[2];
console.log(m1, m2, m3); */

// array destructuring
const [m1, m2, m3, m4] = stats;
console.log(m1, m2, m3, m4);

// clones
console.log(cars);
const clonedCars = [...cars];
console.log(clonedCars);
console.log(cars === clonedCars);