// const fs = require("fs");
// fs.copyFileSync("text.txt","text2.txt");
// console.log("text is coppied to txt2");
const superheroes = require('superheroes');
for(let i=0;i<10;i++)
{
    console.log(superheroes.random());

}


const op= require("./module");
const module_add= op.add(10,5);
const module_minus=op.minus(10,5);
const module_multiply=op.multiply(10,5);
const module_division=op.division(10,5);
console.log(op.title);
console.log("module sum: ",module_add);
console.log("module minus: ",module_minus);
console.log("module multiply: ",module_multiply);
console.log("module division: ",module_division);