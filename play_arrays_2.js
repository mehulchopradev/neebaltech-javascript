const marks = [5, 6, 5, 4, 3, 7, 8, 1, 2, 10, 10, 9];

/* for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 5) {
    console.log(marks[i]);
  }
} */

/* for (let i = 0; i < marks.length; i++) {
  if (marks[i] === 10) {
    console.log(marks[i]);
  }
} */

// repetitive element -- higher order function
// dynamic element (algorithm -- code) -- lower order function
// lower order function ---> higher order function

/* function forEach(elements, func) {
  for (let i = 0; i < elements.length; i ++) {
    const element = elements[i];
    func(element);
  }
} */

// Print out all the marks that were 5 or more than 5
console.log('********* Marks 5 or more than 5 *************');
/* function marksFiveOrMore(element) {
  if (element >= 5) {
    console.log(element);
  }
} */

// forEach(marks, marksFiveOrMore);
// marks.forEach(marksFiveOrMore);
/* marks.forEach(function(element) {
  if (element >= 5) {
    console.log(element);
  }
}); */
marks.forEach(element => {
  if (element >= 5) {
    console.log(element);
  }
})

// ES6 Arrow functions

// Print all marks where students scored 10 marks
console.log('********* Marks 10 *************');

/* function print10(element) {
  if (element === 10) {
    console.log(element);
  }
} */

// forEach(marks, print10);
// marks.forEach(print10);
/* marks.forEach(function(element) {
  if (element === 10) {
    console.log(element);
  }
}); */

marks.forEach(element => {
  if (element === 10) {
    console.log(element);
  }
})