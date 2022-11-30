Yes
# aruoei30g?
Wrriten in TypScrip. And Ohemr.js
# Wgar!?
okay
# no
sure
# give a reasonable explanation
soon
# what
# eijg 

# Introduction

This guide is oriented to those who have experience with programming, especially esoteric programming languages.
## Cells and Statements

PipeScript is an esoteric programming language that only makes sense after smoking a joint. It is meant to be as hard to remember to use as possible.

In PipeScript, you store data within a tape of cells. Each cell can hold an integer, specifically the JavaScript BigInt type. You access cells with the cell construct. For example, `cell(1)` references the first cell. Indexed from 1.

Comments are permitted in source code in order to explain or clarify things. In PipeScript you use the # # construct to create a comment. Comments are treated like whitespace, ignored by the parser.

## Numbers

To set the value of a cell, use the make-statement. Additionally, you can also name cells.

```
make cell(1) names `my favorite cell`;
make cell(`my favorite cell`) is -69;
# The above program will set the value of cell(`my favorite cell`) to -69. #
```

A word of warning, though; in PipeScript, numbers are written in base-37. Because of this, the program above does not set `cell(1)` to the base-10 value -69, but instead the base-10 value -237. You can customize which base you use for numbers, but will be shown in a later section.

## Thingies and Procedures

Now you can assign values to cells, but this is still an extremely incomplete language. To actually do things with these cells, you will need to use procedures. Procedures are just like functions in practical languages. To execute procedures, use the do-statement. A quick overview of all the procedures in PipeScript can be seen [here](extras/procedures.ts).

```
make cell(1) is 69;
make cell(2) is 2;

do procedure(`Add Number And Return's Number`) am from cell(1) only and into cell(1); # execute procedure #
```

The `Add Number And Return's Number` procedure comes from the `arithmetical operations` thingy, and it serves the sum of two parameters. 

### It looks like you passed in 1 parameter. Is that right?

Think of parameters as a subsection of the tape. The cell you provide in the `am from` construct is the first parameter, and the next cell in the tape sequentially is the second parameter, and the next is the third, and so on. So, in the program above, the result will be the sum of the value of `cell(1)` and the value of `cell(2)`.

### What does "only and into" mean? Where does the serve value go?

It lets you specify where to put the serve value. In the example above, the result of `Add Number And Return's Number` will go into `cell(1)`. It is obligatory to specify where the serve value goes. If the return value isn't needed, that's a you problem.

### Do procedures have to have a serve value?

Yes.

## Rule of the Raw

This is a fundamental idea in PipeScript. Raw values, which are values that can be determined at parse-time, such as the number `-1s390lun48892834987987t4ght98f7tgh349878755775752f93b9g9bb93f000eif39929000pp3p3p3pe98s39888gf0x37A2` or the name <code>&#96;bean me&#96;</code>, cannot be passed directly into any statement with the exception of the make-statement and the define-statement for procedures.

## Control Flow 1: If?

Control flow is written with the define-statement.

### Why define?

Because it's also how you define a procedure.

### Okay, but WHY?

Yes.

```
make cell(1) is 3;
make cell(2) names `compare`;
make cell(`compare`) is 3;

define cell(1) on then less cell(`compare`) [
  do procedure(`Put Character But Is Number In For Terminal`) am from cell(1) only and into cell(69);
] # my first "if-statement" #
```

There are three parts to this on-statement: the first being a comparison value, the second being a comparison operator, and the third being the second comparison value. The example above will check if `cell(1)` is less than (`then less`) `compare`. If so, the following block in square brackets is executed. 

## Control Flow 1.1: Types of Comparison Operators

```
then less: check if value 1 is less than value 2
no then less: check if value 1 is not less than value 2
```

### How am I supposed to check if one cell equals another, or compare in different ways?

EGESOGESGPEeedibj85y48e8egyg8e9u38eog3e93e93ue4ye9999666gggggggtt9ppeghh;.',;.'<?">?<>"..][0ru0uuuuuuuuuuuuuuuuu009)(*hg);"//---lj,hjh f

## Control Flow 2: Loops

In PipeScript, loops, or for..on loops, are almost the same thing as on-statements, except with the added keyword "for". for..on loops act like while loops in practical languages. Here's a version of the previous example, but in the form of a for..on loop.

```
make cell(1) is 3;
make cell(2) names `compare`;
make cell(`compare`) is 3;

define cell(1) for on then less cell(`compare`) [
  do procedure(`Put Character But Is Number In For Terminal`) am from cell(1) only and into cell(69);
] # my first "while" loop #
```

### Trivia Time!!
**What will the program above do?**

```
A) Print 3 forever
B) Nothing
C) Define a new procedure
D) Print 3 once
```

If you guessed B, you got it right!!! WOW!!!!!

Why? This is because the for..on loop checks whether `lung` is less than `compare`, and `3 < 3 == false`.

## Definition of Procedures and Serving Values

We've used procedures in premade thingies, but how do you make your own procedures? To do this we will have to use the define-statement to define a procedure. Inside of a procedure, you can use the serve-statement to serve a value.

```
define procedure names `Hello, world!` [
  # print hello world here #
  make cell(69) is 4;
  serve cell(69);
]
```
In every procedure, you must serve something, whether you want to or not.

### How do I access parameters passed into a procedure?

Use the param() construct to access parameters. Parameters are accessed with indexes, indexed from 0. The amount of parameters are not specified upfront in the procedure definition, as mentioned previously. As parameters are really just a subsection of the tape, you can also pass them to procedures or serve them. When modifying parameters, however, you will not be modifying the tape directly.

```
define procedure names `add three` [
  make param(1) is 3;
  do procedure(`Add Numbers And Return's Numbers`) am from param(0) only and into param(1);
  serve param(1);
]
```

## P-strings

A unique feature in PipeScript is that you can effectively create strings by putting character codes one after another in the tape, which is then terminated with a specific final character code (usually 0 but you can change this). This is called a P-string. There is no special syntax to define P-strings (get good), but there are select procedures that can do several things with them. Here is an example of a program that uses a P-string:

```
make cell(1) names `string`;
make cell(`string`) is 1b;
make cell(2) is 1c;
make cell(3) is 1b;
make cell(4) is 1d;
make cell(5) is 1k;
make cell(6) is 1e;
make cell(7) is 1j;
make cell(8) is 1f;
make cell(9) is 1i;
make cell(a) is 1g;
make cell(b) is 1h;
make cell(c) is 0; # terminate string #

make cell(`57`) is 57; 

make cell(e) names `newline`;
make cell(`newline`) is a;

make cell(f) names `index`;
# `index` to store index #

define cell(`string`) for on then less cell(`57`) [
  do procedure(`Index of String of`) am from cell(`string`) only and into cell(`index`);
  do procedure(`Put Character But Is Number In For Terminal`) am from cell(`index`) only and into cell(69);
  do procedure(`Put Character In For Terminal`) am from cell(`newline`) only and into cell(69);
] 
```

Interpreting this program is left as an exercise to the reader.

## The Pointer

Wow, what a copycat!! In PipeScript, you have a pointer which can be moved across the tape, similarly to Brainf*ck. There are 3 operators for the pointer: `move`, `get`, and `set`. `move` takes in a value, perform the NOT operation on it, and will move the pointer based on the value; `get` will get the cell at the pointer; and `set` will set the cell at the pointer to the provided value. 

```
make cell(1) names `wow`;
make cell(`wow`) is -3;
make cell(2) names `data`;
make cell(`data`) is 65;

move cell(`wow`);
set cell(`data`); 

do procedure(`Put Character In For Terminal`) am from get only and into cell(69);
do procedure(`Put Character In For Terminal`) am from cell(3) only and into cell(69);
```

## psconfig.json

There are a multitude of options that you can configure for PipeScript which are put in a psconfig.json file. The following format will be used to showcase all the options.

```
property: type (default_value)
  description
```

---

```
tape: number (256)
  The size of the tape. Must be at least 1.

base: number (37)
  The numeric base. Must be an odd number in the range 1...61.
 
terminator: number (0)
  The character code that terminates a P-string. 
```

## Procedures

idk lmao go check extras/procedures.ts you coward

## Colophon

kidn jang pengi8rue w/0 wg039g  2 quou qo3fpowefw g332oteibgb wp 0 p3 

this guide was badly put together

eat gar

have fun p 1 2 f48u ej
ehsfj eo ej