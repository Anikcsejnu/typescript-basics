let character = "mario";
let age = 30;
let isBlackBelt = false;

const circle = (diameter: number) => {
    return diameter * Math.PI;
};

console.log(circle(10));

// Arrays
let names = ["alice", "bob", "mario"];

names.push("toad");

let number = [1, 2, 3];
number.push(3);

let mixed = ["ken", 4, "chun-li", 9, 10, true];

mixed.push("ryu");
mixed.push(11);
mixed[0] = 3;

console.log(mixed);

// shalow copy
let shalowCopy = mixed;
shalowCopy[1] = "test";
console.log(`Orginal copy: ${mixed}`);
console.log(`Shalow copy: ${shalowCopy}`);

// Deep copy
let deepCopy = [...names];
deepCopy[1] = "Atikur";

console.log(`Orginal copy: ${names}`);
console.log(`Deep copy: ${deepCopy}`);

// Object

let ninja = {
    name: "mario",
    belt: "black",
    age: 30,
};

ninja = {
    name: "Atikur",
    belt: "Black",
    age: 29
};


console.log(ninja);