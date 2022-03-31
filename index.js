// initial function returns random number from 9-20
let x = function randomNumber(min,max) {
    return Math.floor( Math.random() * ( 1 + max - min ) ) + min;
}
let a = 9;
let b = 20;
console.log(x(a,b));

//function now returns random numbers from 1-100
a = 1;
b = 100;
let y = function(){
  return x(a,b);
}
console.log(y());
