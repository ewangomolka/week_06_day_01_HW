// var name = "Steve"
// var secretsFuction = function () {
//     var pinCode = [0, 0, 0, 0]
//     console.log('name inside secretsFunction: ', name);
// }

// secretsFuction()
// console.log('name outside secretsFunction: ', name);

// var filterNamesByFirstLetter = function (names, letter) {
//     var filteredNames = [];
//         for (let name of names) {
//             if ( name[0] === letter ) {
//                 filteredNames.push(name)
//             }
//         }
//     return filteredNames;
// }

// var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs']
// console.log(filterNamesByFirstLetter(students, 'A'));

// CONST

//E=mc2

// let calculateEnergy = function (mass) {
//     const speedOfLight = 299792458;
//     return mass * speedOfLight ** 2
// }

// let energyOfMe = calculateEnergy(75);
// console.log('energyOfMe (if i had a mass of 75kg): ', energyOfMe);

// const song = {
//     title: 'Alkaline',
//     artist: 'Sleep Token'
// }

// console.log('song before mutation', song);
// song.title = 'The Summoning'
// console.log('song after mutation', song);

const helloWorld = function () {
    let result = "Hello World!"
}

helloWorld()
console.log(result);