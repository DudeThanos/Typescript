# javaScript - ES6

# Functions
    > // the `: number` here specifies that this function returns a number
        function getTime(): number {
        return new Date().getTime();
        }
        > If no return type is defined, 
            - TypeScript will attempt to infer it through the types of the variables or expressions returned.

        > // the `?` operator here marks parameter `c` as optional
        function add(a: number, b: number, c?: number) {
        return a + b + (c || 0);
        }

    > Named Parameter, Default parameters

    > Rest parameter (...args) - allows a function to treat an indefinite number of arguments as an array
    > argument object - contains an array of the arguments used when the function was called 
    x = sumAll(1, 123, 500, 115, 44, 88);

    function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
    }

    > Arguments are passed by Value
    > Objects are passed by reference


# Classes
TypeScript adds types and visibility modifiers to JavaScript classes.
classes.js -> to uderstand classes in js
points -
    Use the keyword class to create a class.
    Always add a method named constructor():
    It has to have the exact name "constructor"
    It is executed automatically when a new object is created
    It is used to initialize object properties
    Class methods are created with the same syntax as object methods.
    Use the keyword class to create a class. > Always add a constructor() method. > Then add any number of methods.

class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

---------
~ Inheritance

To create a class inheritance, use the extends keyword.
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();

> The super() method refers to the parent class.
>By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
>Inheritance is useful for code reusability

~ getters/setters
> You can use the underscore character to separate the getter/setter from the actual property:

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.carname;

> Unlike Functions, the classes are not hoisted.

~ Static class methods
> Static class methods are defined on the class itself.
> You cannot call a static method on an object, only on an object class.
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.

