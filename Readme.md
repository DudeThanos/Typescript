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