class Animal {
    constructor(name) {
      this.name = name;
    }
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log(`${this.name} meows.`);
    }
  }
  const dog = new Dog("Buddy");
  const cat = new Cat("Whiskers");
  
  dog.makeSound(); 
  cat.makeSound(); 