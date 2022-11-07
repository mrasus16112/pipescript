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

The above program will name the first cell "firstcell," and then set its value to 69.

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

## Control Flow

Now to introduce control flow. Control flow is written with the define-statement.

### Why define?

Because it's also how you define a procedure.

### Are you serious?

Yes.

To have a control flow that acts like an if-statement in the programming languages you know and love, you would write something like this in PipeScript:

```
import(`input and and output`);

make cell(1) names `lung`;
make cell(`lung`) is 3;

define cell(`lung`) on then less [
  do procedure(`Put Character But Is Number In For Terminal`) am uses cell(`lung`) only and into null;
]
```

Figuring this out is a challenge left to the reader (that is, I am too lazy to continue writing this. Maybe someday I will. Who knows)
