
import { shuffleArray } from "./utils.js";
import Card from "./Card.js";
import Field from "./Field.js";

let field = new Field();

// Generating of list with paths to images

let arr = [];

while(arr.length < 18){
    let r = Math.floor(Math.random() * 18) + 1; // 18 - because 18 pictures in total
    if(arr.indexOf(r) === -1) arr.push(r);
}

let pathArray = arr.map(num => {
    return "./images/type_1/" + num + ".svg";
})

let clonedPathArray = [...pathArray]; // cloning of created array
pathArray.push(clonedPathArray)
pathArray = shuffleArray(pathArray.flat()); // flat for deleting array in array

pathArray.forEach(url => {
    const newItem = new Card(url, false);
    field.addItem(newItem);
})

field.generateField();

// After cards was created and added, we suppose to close it all

setTimeout( () => {
    document.querySelector(".cells").textContent = "";
    field.closeCards();
    field.generateField();
}, 3000);