# PipeScript: an esoteric programming language that only makes sense after smoking a joint
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
In PipeScript, the first way to store data is within a tape of 6,969 cells. Each cell can hold a signed 64-bit integer. You access cells with the cell operator. For example, `cell(1)` references the first cell. Indexed from 1 because yes.

As with many practical languages, and some esoteric languages, comments are permitted in source code in order to explain or clarify things. In PipeScript you use the # # construct to create a comment. Comments are treated like whitespace, ignored by the parser.

## Numbers and Names 

It's not all that useful to just have cells you can't do anything with, so you use a make-statement to set values of these cells. In addition, you can name cells with make-statements, and in this way they act sort of like variables. 

```
make cell(1) names `firstcell`;
make cell(`firstcell`) is 69;
# The above program will name the cell(1) "firstcell", and then set its value to 69. #
```

A word of warning, though; in PipeScript, numbers are written in base-37. (`0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A`) Because of this, the program above does not set `firstcell` to the base-10 value 69, but instead the base-10 value 237.

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

The `Add Number And Return's Number` procedure comes from the `arithmetical operations` thingy, and it serves the sum of two values. But what values? Well, you specify which cell you choose to be the first parameter, and consecutive cells will be used as subsequent parameters. The `Add Number And Return's Number` only uses the first two parameters provided. Because the first parameter `firstcell` is at index 1, the next parameter will be at inde 2, and that's `bean`. In PipeScript, a procedure does not have a defined amount of parameters, so parameters only really represent a subsection of the tape that a procedure can access.

### What does "only and into" mean? Where did the serve value go?

It lets you specify where to put the serve value. In the example above, the result of `Add Number And Return's Number` will go into `firstcell`. If you specify `null`, the serve value will be sent to die in the depths of hell for all eternity.

### Do procedures have to have a serve value?

Yes, but they can also serve `null` if you are a not a functional member of society.

## Rule of the Raw

This is fundamental idea in PipeScript. Literals, or AST nodes whose underlying value can be determined at parse-time, such as the number `390lungf0x37A2` or the name <code>&#96;bean me&#96;</code>, cannot be passed directly into any statement with the exception of the make-statement and the define-statement for procedures, which will be covered in a later section.

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

### Wait, that's it?

Correct.

### How am I supposed to check if one cell equals another?

I am not meant to give strategies on how to use this esoteric language, but the solution involves using both comparison operators.

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

Why? This is because the for..on loop checks whether `lung` is less than `compare`, and 3 < 3 == false.

## Definition of Procedures and Serving Values

We've used procedures in premade thingies, but how do you make your own procedures? To do this we will have to use the define-statement to define a procedure. Inside of a procedure, you can use the serve-statement to serve a value. 

```
define procedure names `Hello, world!` [
  # print hello world here #
]
```

### How do I access parameters passed into a procedure?

Use the param() construct to access parameters. Parameters are accessed by indexes, indexed from 0. The amount of parameters are not specified upfront in the procedure definition, as mentioned previously.

```
import(`arithmetical operations`);
define procedure names `add three` [
  make cell(1) names `three`;
  make cell(`result`) is 3;
  do procedure(`Add Numbers And Return's Numbers`) am uses param(0), cell(`result`) only and into cell(`result`);
  serve cell(`result`);
]
```

## Specificities of Procedures

### How do procedures operate with data on the tape?

A procedure has two options as to how it operates with data. With the first option, the procedure creates a deep copy of the tape (not including names of cells). If you modify values in the copy, it will not modify the actual tape. With the second option, you will be able to access and modify the actual tape directly.

Which option the procedure will take is determined by the sum of the UTF-8 values of the characters of the name of the procedure. (Wow, that's a lot of of...) If the sum is even, the procedure will choose the first option; otherwise, the procedure will choose the second option.

### How are parameters and serve-values passed?

Parameters are passed-by-value, instead of by-reference. Likewise, serve-values are also passed-by-value.

## Colophon

kidn jang pengi8rue w/0 wg039g  2 quou qo3fpowefw g332oteibgb wp 0 p3 

this guide was badly put together and should not be in the readme lmao

eat gar

have fun p 1 2 f48u ej
