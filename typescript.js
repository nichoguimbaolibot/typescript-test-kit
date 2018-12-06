var sum1 = function (a, b) {
    return a + b;
};
var string = function (a, b) {
    return a + b;
};
var sumAnswer = sum1(1, 2);
console.log('string answer: ', string("test" + sumAnswer, ' hahaha'));
// using of typescript according to data types
// boolean
var isCool = true;
// number
var age = 69;
// string
var eyeColor = 'brown';
// string using template literals
var favouriteQuote = "I'm not young, i'm " + age;
// Array of string
var animals = ['cat', 'elephant', 'jaguar', eyeColor, favouriteQuote];
var names = [{
        name: 'test',
        age: 23,
        email: 'test@gmail.com'
    }
];
// types of array object static typing tuple
var names1 = [
    {
        test: 'app',
        numbers: 1,
        booleans: true
    },
];
console.log('arrayObject: ', names1);
// object static typing tuple
var car = {
    brand: 'chevrolet',
    plateNum: 9999,
    color: 'red',
    isManual: true
};
console.log('object: ', car);
// undefined and null static typing
var nothing = undefined;
var impossible = null;
// tuple array
var arrays = [
    'cars', 1, false
];
