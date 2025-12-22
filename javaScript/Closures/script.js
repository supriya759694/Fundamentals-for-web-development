function outer(){
    let count = 0;

    function inner(){
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

