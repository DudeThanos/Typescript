# javaScript - ES6

# Functions
    > Rest parameter (...args) - allows a function to treat an indefinite number of arguments as an array
    > argument object - contains an array of the arguments used when the function was called 
    x = sumAll(1, 123, 500, 115, 44, 88);

    function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
    }

    > Arguments are passed by Value
    > Objects are passed by reference




