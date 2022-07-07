var num1 = 10;
var num2 = 2065;
var num3 = 1987;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

var heroes = ['Iron Man', 'Spider-Man', 'Scarlet Witch', 'Dr. Strange'];
var randomNumber = (Math.random());
randomNumber = randomNumber * (heroes.length);

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Cien años de soledad',
    author: 'Gabriel Garcia Marquez'
  },
  {
    title: 'The Song of Achilles',
    author: 'Madeline Miller'
  },
  {
    title: 'Normal People',
    author: 'Sally Rooney'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Dulce Carolina Herrera';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
