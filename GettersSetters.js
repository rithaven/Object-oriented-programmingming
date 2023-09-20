class Circle {
    constructor(radius) {
      this._radius = radius; 
    }
    set radius(newRadius) {
      if (newRadius > 0) {
        this._radius = newRadius;
      } else {
        console.log("Radius must be a positive number.");
      }
    }
  
    get radius() {
      return this._radius;
    }
  }
  
  const myCircle = new Circle(5); 
  myCircle.radius = 8; 
  console.log(myCircle.radius); 
  