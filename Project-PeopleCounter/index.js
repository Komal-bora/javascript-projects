//document.getElementById("count-el").innerText = 5;

// let count = 0 //initialization

// console.log(count)  //printing

// let firstBatch = 5;
// let secondBatch = 10;

// let count = firstBatch + secondBatch;

// console.log(count)

let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
} 

let saveEl = document.getElementById("save-el") 

function save(){
    let prevText = count + " - "
    saveEl.textContent += prevText
    count = 0
    countEl.innerText = 0
}