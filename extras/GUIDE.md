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

# Introduction

## Cells and Statements

PipeScript is an esoteric programming language that only makes sense after smoking a joint. It transpiles to either TypeScript to JavaScript, and it is meant to be as hard to remember to use as possible.

In PipeScript, you store data within a tape of cells, just like in Brainf\*ck (and in most esolangs :toll:). Each cell can hold a signed 64-bit integer. You access cells with the cell operator. For example, `cell(1)` references the first cell. Indexed from 1 because yes.

As with many practical languages, and some esoteric languages, comments are permitted in source code in order to explain or clarify things. In PipeScript you use the # # construct to create a comment. Comments are treated like whitespace, ignored by the parser.

## Numbers and Names 

It's not all that useful to just have cells you can't do anything with, so you use a make-statement to set values of these cells. In addition, you can name cells with make-statements, and in this way they act sort of like variables. 

```
make cell(1) names `firstcell`;
make cell(`firstcell`) is 69;
# The above program will name the cell(1) "firstcell", and then set its value to 69. #
```

A word of warning, though; in PipeScript, numbers are written in base-37. (`0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A`) Because of this, the program above does not set `firstcell` to the base-10 value 69, but instead the base-10 value 237. You can customize which base you use for numbers, but will be shown in a later section.

## Thingies and Procedures

Now you can assign values to cells, but this is still an extremely incomplete language. To actually do things with these cells, you will need to use procedures. Procedures are just like functions in practical languages. To access procedures, you will first use the import-statement and import thingies which contain procedures. Then, you use the do-statement to execute these procedures.

```
import(`arithmetical operations`); # import procedures from the thingy #

make cell(1) names `firstcell`;
make cell(2) names `bean`;
make cell(`firstcell`) is 69;
make cell(`bean`) is 2;

do procedure(`Add Number And Return's Number`) am from cell(`firstcell`) only and into cell(`firstcell`); # execute procedure #
```

The `Add Number And Return's Number` procedure comes from the `arithmetical operations` thingy, and it serves the sum of two parameters. 

### How do parameters work in PipeScript?

Think of parameters as a subsection of the tape. The cell you provide in the `am from` construct is the first parameter, and the next cell in the tape sequentially is the second parameter, and the next is the third, and so on. So, in the program above, the result will be the sum of the value of `cell(1)` or `firstcell`, and the value of `cell(2)` or `bean`.

### What does "only and into" mean? Where did the serve value go?

It lets you specify where to put the serve value. In the example above, the result of `Add Number And Return's Number` will go into `firstcell`. If you specify `null`, the serve value will be sent to die in the depths of hell for all eternity.

### Do procedures have to have a serve value?

Yes, but they can also serve `null` if you are a not a functional member of society.

## Rule of the Raw

This is a fundamental idea in PipeScript. Raw values, which are values that can be determined at parse-time, such as the number `1s390lun48892834987987t4ght98f7tgh349878755775752f93b9g9bb93f000eif39929000pp3p3p3pe98s39888gf0x37A2` or the name <code>&#96;bean me&#96;</code>, cannot be passed directly into any statement with the exception of the make-statement and the define-statement for procedures.

## Control Flow 1: If?

Control flow is written with the define-statement.

### Why define?

Because it's also how you define a procedure.

### Okay, but WHY?

Yes.

```
import(`input and and output`);

make cell(1) names `lung`;
make cell(2) names `compare`;
make cell(`lung`) is 3;
make cell(`compare`) is 3;

define cell(`lung`) on then less cell(`compare`) [
  do procedure(`Put Character But Is Number In For Terminal`) am from cell(`lung`) only and into null;
] # my first "if-statement" #
```

There are three parts to this on-statement: the first being a comparison value, the second being a comparison operator, and the third being the second comparison value. The example above will check if `lung` is less than (`then less`) `compare`. If so, the following block in square brackets is executed. 

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
import(`input and and output`);

make cell(1) names `lung`;
make cell(2) names `compare`;
make cell(`lung`) is 3;
make cell(`compare`) is 3;

define cell(`lung`) for on then less cell(`compare`) [
  do procedure(`Put Character But Is Number In For Terminal`) am from cell(`lung`) only and into null;
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

Use the param() construct to access parameters. Parameters are accessed with indexes, indexed from 0. The amount of parameters are not specified upfront in the procedure definition, as mentioned previously. As parameters are really just a subsection of the tape, you can also pass them to procedures.

```
import(`arithmetical operations`);
define procedure names `add three` [
  make param(1) names `three`;
  make cell(`result`) is 3;
  do procedure(`Add Numbers And Return's Numbers`) am from param(0) only and into cell(`result`);
  serve cell(`result`);
]
```
## psconfig.json

There are a multitude of options that you can configure for PipeScript which are put in a psconfig.json file. To make things quicker, the following format will be used to showcase all the options.

```
property: type (default_value)
  description
```

---

```
tape: number (256)
  Set the size of the tape. Must be an integer in the range 1...69420.

base: number (37)
  Set the numeric base. Must be an odd number in the range 1...61.
 
endparam: number (-1)
  Set the cell index (indexed from 0) of the last parameter for all procedures. If set to a negative value, the last parameter will be the last cell.
  
typescript: boolean (true)
  Set whether you want PipeScript to transpile to JavaScript or TypeScript. TypeScript if true, JavaScript if false.
```

  
## Colophon

kidn jang pengi8rue w/0 wg039g  2 quou qo3fpowefw g332oteibgb wp 0 p3 

this guide was badly put together

eat gar

have fun p 1 2 f48u ej
