var array = [
  {
    isbn: '9780936388878',
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes'
  },
  {
    isbn: '9780061122415',
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    isbn: '9780007136599',
    title: 'The Fellowship of the Ring',
    author: 'R. R. Tolkien'
  }
];

console.log('array:', array, 'typeof:', typeof array);

var jsonString = JSON.stringify(array);
console.log('jsonString:', jsonString);
console.log('typeof:', typeof jsonString);

var jsonObject = JSON.parse(jsonString);
console.log('jsonObject:', jsonObject);
console.log('typeof:', typeof jsonObject);

var studentString = '{"numberId":234, "name":"kevin aguilar"}';

console.log('studentString:', studentString);
console.log('typeof:', typeof studentString);

var student = JSON.parse(studentString);
console.log('student:', student);
console.log('typeof:', typeof student);
