// function
let greet: Function;

greet = () => {
    console.log("Hello, world");
};

const add = (a: number, b: number = 10, c?: number | string): void => {
    console.log(a + b);
    console.log(c);
};

add(1, 4);
add(1, 5, "20");

const minus = (a: number, b:number): number => {
    return a + b;
}

let result = minus(20, 10);
console.log(result);
