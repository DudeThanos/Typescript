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

# create initial tsconfig.json
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

# compile
npx tsc 'hello.ts' <filename>