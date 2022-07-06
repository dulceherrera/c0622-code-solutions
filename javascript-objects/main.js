var student = {
  firstName: 'Dulce',
  lastName: 'Herrera',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Quality Inspector';

console.log('value of livesInIrvine', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Kia',
  model: 'Seltos',
  year: 2022
};

vehicle['color'] = 'Green';
vehicle['isConvertible'] = false;

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'augusto',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
