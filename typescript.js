var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _this = this;
var sum1 = function (a, b) {
    return a + b;
};
var string = function (a, b) {
    return a + b;
};
var sumAnswer = sum1(1, 2);
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
var animals = ['cat', 'elephant', 'jaguar'];
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
// object static typing tuple
var car = {
    brand: 'chevrolet',
    plateNum: 9999,
    color: 'red',
    isManual: true
};
// undefined and null static typing
var nothing = undefined;
var impossible = null;
// tuple array
var arrays = [
    'cars', 1, false
];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
// enum is accessible by two ways by the value and by the variable
// example: Size["Small"] === 1 or Size[1] === "Small"
var sizeName = Size[2];
// Any - !!!!  Shouldn't be use often
var anything = "String";
// void can return functions but any data types will return an error
this.string = 'string';
var faceless = function () {
    _this.string = 'nothing';
};
faceless();
this.test = 'test';
var doSomething = function () {
    return faceless();
};
// never is a function where you dont return anything
// use never if you are throwing an error or any function that wont return anything
this.number = 1;
var sing = function () {
    do {
        _this.number;
    } while (true);
};
var y = 1;
console.log(y);
var zombieArmy = {
    counts: 1000,
    ability: "Swim",
    strength: 100
};
var humanArmy = {
    counts: 100,
    ability: 'advanced technology',
    strength: 500
};
var zombieWar = function (humans, zombies) {
};
zombieWar(humanArmy, zombieArmy);
var robocop = {};
// experimentation of as code in typescript
var functional = function (robots) {
    var robo = __assign({}, robots);
    console.log(robots);
};
var pest = "langaw";
var func = function (army) {
    _this.state = {
        test: "400"
    };
    return _this.state.test;
};
var army = {
    counts: 200,
    ability: "hydro cannon",
    strength: 1000
};
console.log(func(army));
// function return type strict
var armyWar = function (army1, army2) {
    var army = {};
    return army + " has won.";
};
// class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        // private is only accessible inside the class
        // private sing: string = "tralalalala"
        this.sing = "tralalalalala";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "My animal sound is \"" + this.sing + "\"";
    };
    return Animal;
}());
var lion = new Animal("rawwwr");
console.log(lion.greet());
// Union
// union is being used if you accept multiple type of data types
// This can be use on datas that return multiple types
var numberOrString = "string";
