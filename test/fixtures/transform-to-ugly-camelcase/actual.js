class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calc_area();
  }

  calc_area() {
    return this.height * this.width;
  }
}
