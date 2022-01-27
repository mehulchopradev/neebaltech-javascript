// a function can be defined inside another function
function abc() {

  const i = 10; // i ->  number (abc) --> Non callable
  const s1 = {
    name: 'mehul'
  };

  // xyz -> Function (abc) ---> Callable
  function xyz() {
    // can access the enclosing scope data
    console.log('in xyz', i); // Closures
    s1.name = 'rahul';
  }

  console.log('In abc', i);
  console.log(s1);
  xyz();
  console.log(s1);
}
abc();

// a function can return a function
function pqr(i) { // i -> number (pqr)
  const j = 10; // j -> number (pqr)

  function mno() {
    // const j = 11;
    // Closures
    // inner function has a reference to the enclosing environment data under all situations for the entire life cycle
    return i + j;
  }
  console.log(i, j);
  return mno;
}

const func = pqr(10); // func -> Function (callable)
console.log(func()); // mno()


// a function can be passed as an argument to another function
// qwe -> Function (entire file) --> callable
// callback functions

// qwe -> Higher order functions
function qwe(func) {
  // func --- callable -> Function
  const i = 10;
  const j = 11;
  console.log(i + j);
  const k = func(); // rty(), pot()
  console.log('hello');

  return i + j + k;
}

// rty -> Function (entire file)
// Lower order functions
function rty() {
  return 10;
}

// Lower order functions 
function pot() {
  return 11;
}

qwe(rty);
qwe(pot);