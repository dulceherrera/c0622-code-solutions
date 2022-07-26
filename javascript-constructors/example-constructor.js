function ExampleConstructor() {

}

console.log(ExampleConstructor.prototype);
console.log(typeof (ExampleConstructor.prototype));

var example = new ExampleConstructor();
console.log(example);

var instanceExample = example instanceof ExampleConstructor;
console.log(instanceExample);
