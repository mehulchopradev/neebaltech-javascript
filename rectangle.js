function perimeterRectangle(length, breadth=2) {
  return 2 * (length + breadth);
}

/* function areaRectangle(length=2, breadth=1) {
  return length * breadth;
} */

function areaRectangle({ length, breadth }) {
  return length * breadth;
}

const l = 9;
const b = 4;

console.log(l, b, areaRectangle, perimeterRectangle);

const perimeter = perimeterRectangle(l, b);
const area = areaRectangle(l, b);

// console.log(perimeter);
// console.log(area);

// console.log(areaRectangle(4.5, 4.3));
// console.log(areaRectangle(3, 3.6));

console.log(areaRectangle({ length: 4.5, breadth: 4.3 }));
console.log(areaRectangle({ breadth: 3.6, length: 3 }));