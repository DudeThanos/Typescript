# Title
Typescript learning.
A Repo to Learn new enhancement and changes in typescript.

# Typescript
TypeScript is JavaScript with added syntax for types.
TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number.
JavaScript will not.

TypeScript uses compile time type checking.
Which means it checks if the specified types match before running the code, not while running the code.

# install typescript compiler
npm install typescript --save-dev

# run compiler
npx tsc
learn about all of the compiler options at https://aka.ms/tsc

# Create initial tsconfig.json
npx tsc --init
learn more at https://aka.ms/tsconfig
The tsconfig.json file is the heart of every TypeScript project.
It tells the TypeScript compiler how to process your code, which files to include, and which features to enable or disable.
A well-configured tsconfig.json ensures a smooth developer experience and reliable builds.

Key Concepts & Explanations
compilerOptions: Controls how TypeScript compiles your code (e.g., target, module, strictness).
include: Files or folders to include in the compilation.
exclude: Files or folders to exclude.
files: Explicit list of files to include (rarely used with include).
extends: Inherit options from another config file.
references: Enable project references for monorepos or multi-package setups.

# Save Ts code
The Ts code needs to be saved in src.
the compiled code for javascript is generated in build.
:Actual correct way in which projects are built.

# Compile
Single file - npx tsc 'hello.ts' <filename>
Entire bproject build - npx tsc
Build whenever a change (Auto: watcher) - npx tsc -w

# Primitive types
Boolean, Number, String, BigInt, Symbol (Total 5)
.
let isActive: boolean = true;
let hex: number = 0xf00d; 
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;
const bigNumber: bigint = 9007199254740991n;
const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};

# Annotation & Inference
Explicit Typing: You explicitly declare the type of a variable
Type Inference: TypeScript automatically determines the type based on the assigned value
-
> When to Use explicit types for:
Function parameters and return types
Object literals
When the initial value might not be the final type
.
// Array of numbers
scores: number[] = [100, 95, 98];

> When to Use type inference for:
Simple variable declarations with immediate assignment
When the type is obvious from the context
.
// TypeScript infers return type as 'number'
function add(a: number, b: number) {
return a + b;
}

Using any disables TypeScript's type checking.

# When to use any:
When migrating JavaScript code to TypeScript
When working with dynamic content where the type is unknown
When you need to opt out of type checking for a specific case

# When to use unknown:
When working with data from external sources (APIs, user input, etc.)
When you want to ensure type safety while still allowing flexibility
When migrating from JavaScript to TypeScript in a type-safe way

# When to use never:
For functions that will never return a value
In type guards that should never match
For exhaustive type checking in switch statements
In generic types to indicate certain cases are impossible

# Key points about undefined and null:
undefined means a variable has been declared but not assigned a value
null is an explicit assignment that represents no value or no object
In TypeScript, both have their own types: undefined and null respectively
With strictNullChecks enabled, you must explicitly handle these types

# Array - const names: string[] = [];
const numbers = [1, 2, 3]; // TS *infers* it to a number type array based on its content.

# Tuple
Typed Arrays
A tuple is a typed array with a pre-defined length and types for each index.
Tuples are great because they allow each element in the array to be a known type of value.
To define a tuple, specify the type of each element in the array:
.
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];#

# Objects
TypeScript has a specific syntax for typing objects.
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

> TypeScript can infer the types of properties based on their values.
> Optional properties are properties that don't have to be defined in the object definition.
> Index signatures can be used for objects without a defined list of properties.
    > const nameAgeMap: { [index: string]: number } = {};

# Enum
An enum is a special "class" that represents a group of constants (unchangeable variables).
Enums come in two flavors string and numeric.
By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum CardinalDirections {
  North = 1,
  East,
  South,
  West
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);
...
Enums can also be string..
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);

# Type Aliases
Type Aliases allow defining types with a custom name (an Alias).
Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
.
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
.

  > Union & Intersection Type
type Animal = { name: string };
type Bear = Animal & { honey: boolean }; //intersection
const bear: Bear = { name: "Winnie", honey: true };

type Status = "success" | "error"; //union
let response: Status = "success";

# Interfaces
Interfaces are similar to type aliases, except they only apply to object types.
.
interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};
.
> Interface merging can also be done
interface Animal { name: string; } interface Animal { age: number; } const dog: Animal = { name: "Fido", age: 5 };
.
> Interfaces can extend each other's definition.
Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
.
interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

# Union
Union types are used when a value can be more than a single type.
Such as when a property would be string or number.
.
> using '|' -
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

# Functions
Follow Notes.md

# Type Casting
Change the type of the variable - Casting is the process of overriding a type.
Sometimes it is necessary such as when incorrect type is provided by a library.

> as : let x: unknown = 'hello';
console.log((x as string).length);

Using <> works the same as casting with as.
> <> : let x: unknown = 'hello';
console.log((<string>x).length);

This type of casting will not work with TSX, such as when working on *React* files.

~ Force casting
To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let x = 'hello';
console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined

# Classes
Follow Notes.md
> The members of a class (properties & methods) are typed using type annotations, similar to variables.
> There are three main visibility modifiers in TypeScript.
  public - (default) allows access to the class member from anywhere
  private - only allows access to the class member from within the class
  protected - allows access to the class member from itself and any classes that inherit it
> Remeber Interfaces from Types Aliases & Interfaces, The interfcaes can only be used with object types.
> class Person {
    name: string;
  }

  const person = new Person();
  person.name = "Jane";
> The this keyword in a class usually refers to the instance of the class

> Similar to arrays, the readonly keyword can prevent class members from being changed.
> Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.
> A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored 
> Classes can extend each other through the extends keyword. A class can only extend one other class.
> When a class extends another class, it can replace the members of the parent class with the same name.
  Newer versions of TypeScript allow explicitly marking this with the override keyword.

~ Abstract
> Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
  This is done by using the abstract keyword.
  Members that are left unimplemented also use the abstract keyword.

> abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

# 