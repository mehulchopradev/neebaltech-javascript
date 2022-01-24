function perimeterRectangle(length, breadth=2) {
  return 2 * (length + breadth);
}

function areaRectangle(length=2, breadth=1) {
  return length * breadth;
}

const l = 9;
const b = 4;


const perimeter = perimeterRectangle(l, b);
const area = areaRectangle(l, b);

console.log(perimeter);
console.log(area);