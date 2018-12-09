const sum1 = (a: number, b: number): number => {
 return a + b;
}

const string = (a: string, b: string): string => {
  return a + b
}
const sumAnswer = sum1(1, 2)

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

// object static typing tuple
let car: {brand: string, plateNum: number, color: string, isManual: boolean} = {
  brand: 'chevrolet',
  plateNum: 9999,
  color: 'red',
  isManual: true,
}

// undefined and null static typing

let nothing: undefined = undefined

let impossible: null = null;


// tuple array

let arrays: [string, number, boolean] = [
  'cars', 1, false
]

enum Size { Small = 1, Medium = 2, Large = 3}
// enum is accessible by two ways by the value and by the variable
// example: Size["Small"] === 1 or Size[1] === "Small"
let sizeName: string = Size[2]

// Any - !!!!  Shouldn't be use often
let anything: any = "String"

// void can return functions but any data types will return an error
this.string = 'string'
let faceless = (): void => {
  this.string = 'nothing'
}

faceless()
this.test = 'test'
let doSomething = (): void => {
  return faceless()
}

// never is a function where you dont return anything
// use never if you are throwing an error or any function that wont return anything
this.number = 1;
let sing = (): never => {
  do{
    this.number
  }while(true)
}
let y = 1;
console.log(y)

// interface
interface ZombieArmy {
  counts: number,
  ability: string,
  strength: number,
}

let zombieArmy: ZombieArmy = {
  counts: 1000,
  ability: "Swim",
  strength: 100,
}

interface HumanArmy {
  counts: number,
  ability: string,
  strength: number,
  special?: string,
}

let humanArmy: HumanArmy = {
  counts: 100,
  ability:'advanced technology',
  strength: 500,
}

let zombieWar = (humans: HumanArmy, zombies: ZombieArmy ): void => {
  console.log('Humans: ', humans)
  console.log('Zombies: ', zombies)
}

zombieWar(humanArmy, zombieArmy)

// type assertion
// Type assertion shouldn't be use often
// Conclusion: This can be use on a data or from an API that has a missing field
// including a "?" on a field of an interface is an indication that the field can have no value or have it
interface AIArmy {
  counts: number,
  ability: string,
  strength: number,
  special?: string,
}

let robocop = {

} as AIArmy

console.log('robocop: ', robocop.counts)
