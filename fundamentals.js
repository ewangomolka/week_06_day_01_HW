console.log('Hello World!');

var name = "Mickey";
console.log('Name:', name);

var greeting = 'Hello';
greeting = 5;
console.log(greeting);

if ( 1 > 0 ) {
    var message = '1 is greater than 0';
} else if (1 == 0) {
    var message = '1 is equal to 0';
} else {
    var message = '1 is less than 0';
}

console.log(message);

if (null) {
    var result = 'The expression evaluates to true';
} else {
    var result = 'The expression evaluates to false';
}

console.log(result);

// a string
// '' (an empty string)
// 0
// a number other than zero
// undefined
// NaN

// Run the following in the Node REPL to see the results of JavaScript's type coercion:

// 3 + "hello"
// "route" + 6 + 6
// 6 + 6 + "route"

