// def sayHello():
//     return 'Hello World!'

//Named Function
// function sayHello(greeting, name = 'Aqib'){
//     return `${greeting} ${name}`
// }

// console.log('sayHello Message: ', sayHello('Hi', 'Steve'));

//Anonymous Function
// var add = function (firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// console.log('1 + 3 with add: ', add(1, 3));

// var numbers = [1, 2, 3, 4, 5]

// function getTotal(numbers){
//     var total = 0
//     for (var number of numbers) {
//         total = total + number;
//     }
//     return total
// }

// console.log(getTotal(numbers));

// var expression = function (object, string) {
//     return object + string
// }
// console.log(expression(`You heard of this guy `, expression({name: 'Wojtek', age: '30'}, 'Sheeet')))

// var keyCheck = function (object, key) {
//     if (object[key]) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(keyCheck({name: 'Wojtek', age: 30}, 'name'));

// var keyCheck = function (object, searchString) {
//     for (var key in object) {
//         if (searchString === key) {
//             return true
//         }
//     }
//     return false
// }
// console.log(keyCheck({name: 'Wojtek', age: 30}, 'name'));


//Arrow Functions
var multiply = (noOne, noTwo) => {
    return noOne * noTwo
}
console.log(multiply(2, 5));

//Other Way of Arrow
var multiply = (noOne, noTwo) => noOne * noTwo;

var person = {
    name: 'Sean', 
    status: 'Need Coffee', 
    drink: function drinkCoffee(){
        this.status = "caffinated"
    }
}
console.log(person)
person.drink()
console.log(person);