# 📌 Closures in JavaScript

## 🔹 Example Code

```js
function outer() {
    let count = 0;

    function inner() {
        console.log(count++);
    }

    return inner;
}

const myFunc = outer();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();



🔹 Output
Copy code
0
1
2
3
4
5
6
🔹 Step-by-Step Explanation (Best Answer)
When outer() is called, a variable count is created and initialized to 0.

The inner() function accesses this count variable and is returned.

Even after outer() finishes execution, the inner() function remembers the variable count.

This happens because of closure, where an inner function retains access to its outer function’s variables.

Every time the returned function (myFunc) is called, it accesses and updates the same count variable, instead of creating a new one.

🔹 Why count Does Not Reset?
outer() is executed only once

count exists in memory because inner() still references it

Each call updates the same variable

🔹 One-Line Interview Answer (Power Answer)
“This is a closure because the inner function remembers and accesses the variable count from its outer function even after the outer function has finished executing.”

