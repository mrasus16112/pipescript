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
In PipeScript, the first way to store data is within a tape of 6,969 cells. Each cell can hold a signed 64-bit integer. You access cells with the cell operator. For example, `cell(1)` references the first cell and `cell(5862)` references the five thousand eight hundred sixty-second cell. Indexed from 1 because yes.

It's not all that useful to just have cells you can't do anything with, so you use a make-statement to set values of these cells. In addition, you can name cells with make-statements, and in this way they act sort of like variables. 

```
make cell(1) names `firstcell`;
make cell(`firstcell`) is 69;
```

The above program will name the first cell "firstcell", and then set its value to 69.

Now you can set values, but that is still an extremely incomplete language. To actually do things with these cells, there are many built-in procedures (or functions) which you first import with the import-statement, and then execute with the do-statement. 

```
import(`arithmetical operations`);

make cell(1) names `firstcell`;
make cell(2) names `bean`;
make cell(`firstcell`) is 69;
make cell(`bean`) is 2;

do procedure(`Add Number And Return's Number`) am uses cell(`firstcell`), cell(`bean`) only and into cell(`firstcell`);
```

The first cell will have the value 71.

### Do you need to use another cell if you're just going to add a constant value?

That's right. To pass values into procedures, you must place said value into a cell. Otherwise, you will have broken the fabric of space-time.

### What does "only and into" mean?

It lets you specify where to put the return value. In the example above, the result Add Number And Return's Number will go into cell(\`firstcell\`). 

## Control Flow 1: If?

Now to introduce control flow. Control flow is written with the define-statement.

### Why define?

Because it's also how you define a procedure.

### Are you serious?

Yes.

In PipeScript, there is not an if-statement but instead an on-statement.

```
import(`input and and output`);

make cell(1) names `lung`;
make cell(2) names `compare`;
make cell(`lung`) is 3;
make cell(`compare`) is 3;

define cell(`lung`) on then less cell(`compare`) [
  do procedure(`Put Character But Is Number In For Terminal`) am uses cell(`lung`) only and into null;
]
```

There are three parts to this on-statement: the first being a comparison value, the second being a comparison operator, and the third being the second comparison value. The example above will check if cell(\`lung\`) is less than ("then less") cell(\`compare\`). If this is true, the following block is executed. 

## Control Flow 1.1: Types of Comparison Operators

```
then less: check if value 1 is less than value 2
no then less: check if value 1 is not less than value 2
```

### Wait, that's it?

Correct.

### How am I supposed to check if one value equals another?

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
  do procedure(`Put Character But Is Number In For Terminal`) am uses cell(`lung`) only and into null;
]
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

Why? This is because the for..on loop checks whether cell(\`lung\`) is less than cell(\`compare\`), and 3 < 3 == false. 


