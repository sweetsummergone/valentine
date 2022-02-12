import { wishes } from "./wishes.js";
import { shuffleArray } from "./utils.js";
import Card from "./Card.js";

let field = [];

// Generating of list with paths to images

let arr = [];

while(arr.length < 18){
    let r = Math.floor(Math.random() * 18) + 1; // 16 - because 16 pictures in total
    if(arr.indexOf(r) === -1) arr.push(r);
}

let pathArray = arr.map(num => {
    return "./images/type_1/" + num + ".svg";
})

let clonedPathArray = [...pathArray]; // cloning of created array
pathArray.push(clonedPathArray)
pathArray = pathArray.flat(); // flat for deleting array in array

pathArray.forEach(url => {
    const newItem = new Card(url);
    field.push(newItem);
})

field.forEach(item => {
    const newItem = item.generateCard();
    document.querySelector(".cells").append(newItem);
})

// After cards was created and added, we suppose to close it all

setTimeout( () => {
    document.querySelector(".cells").textContent = "";
    field.forEach(card => {
        card.closeCard();
        const newItem = card.generateCard();
        document.querySelector(".cells").append(newItem);
    })    
}, 3000)

// Generation of wish from wishes list

// const wish = wishes[Math.floor(Math.random()*wishes.length)];

// document.querySelector(".wish").textContent = wish;