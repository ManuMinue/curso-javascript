class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get perimeter() {
    return (this.width + this.height) * 2;
  }

  get isValid() {
    return this.width > 0 && this.height > 0;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

const r = new Rectangle(10, 20);
console.log(r.perimeter); // gettter
console.log(r.isValid); // getter => true
const r2 = new Rectangle(-10, 20);
console.log(r2.isValid); // getter  => false

const c = new Square(10);
console.log(c.perimeter);
