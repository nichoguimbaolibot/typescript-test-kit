const sum1 = (a: number, b: number): number => {
 return a + b;
}

const string = (a: string, b: string): string => {
  return a + b
}
const sumAnswer = sum1(1, 2)

console.log('string answer: ', string(`test${sumAnswer}`, ' hahaha'))



// using of typescript according to data types
// boolean
let isCool: boolean = true;
// number
let age: number = 69;
// string
let eyeColor: string = 'brown';
// string using template literals
let favouriteQuote: string = `I'm not young, i'm ${age}`
// Array of string
let animals: string[] = ['cat', 'elephant', 'jaguar'];
// Array of object
interface objectLayout {
  name: string,
  age: number,
  email: string,
}
let names: {name: string, age: number, email: string}[] = [{
    name: 'test',
    age: 23,
    email: 'test@gmail.com'
  }
]

interface arrayObjectLayout {
  test: string,
  numbers: number,
  booleans: boolean
}
// types of array object static typing tuple
let names1: Array<arrayObjectLayout> = [
  {
    test: 'app',
    numbers: 1,
    booleans: true,
  },
]

console.log('arrayObject: ', names1)
// object static typing tuple
let car: {brand: string, plateNum: number, color: string, isManual: boolean} = {
  brand: 'chevrolet',
  plateNum: 9999,
  color: 'red',
  isManual: true,
}

console.log('object: ', car)

// undefined and null static typing

let nothing: undefined = undefined

let impossible: null = null;


// tuple array

let arrays: [string, number, boolean] = [
  'cars', 1, false
]