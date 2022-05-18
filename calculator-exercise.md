# Calculator JS Programming Exercise

Task: Write a "calculate" function which behaves much like your classic handheld calculator. It can add, subtract, and undo the last command. It should accept an array of commands that looks like the following. It should ignore "error" commands and handle uppercase and lowercase for all other commands.

```
const commands = [
    ['aDd', 5],
    ['subtract', 2],
    ['undo'],
    ['ErRoR', ''],
    ['aDd', 3],
    ['subTract', 1]
]
```

```
calculate(commands) // output should be 7 --> 5 - 2 + 2 (the + 2 undoes the previous -2 command) + 3 - 1
```

For context, this exercise helps you practice the divide-and-conquer approach to programming problems, functional programming in JS, and the undo behavior of the calculator is a bit similar to how Redux works.

Note the similarity of the command format to the (head, tail) ordered pair structure we discussed when looking at lists.
