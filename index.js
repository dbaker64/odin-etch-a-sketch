let num;
let containerDiv = document.querySelector("#container");
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
    reset();
})

function getNum() {
    num = prompt("Please enter the number of rows/columns you want");
    if(num > 100){
        answer = prompt("That's too many rows, are you sure you want that many? Y/N");
        answer = answer.toLowerCase();
        if(answer === "n"){
            num = prompt("Please enter the number of rows/columns you want");
        }
    }
    createRows();
}

function createRows() {
    for(let i = 0; i < num; i++){
        let currentDiv = document.createElement("div");
        currentDiv.setAttribute("id",`row${i}`);
        currentDiv.setAttribute("class","row");
        containerDiv.appendChild(currentDiv);
    }
    createBoxes();
}

function createBoxes() {
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            let currentDiv = document.createElement("div");
            currentDiv.setAttribute("id",`b${j}r${i}`);
            currentDiv.setAttribute("class","square");
            let currentDivId = currentDiv.id;
            currentDiv.addEventListener("mouseenter", function() {
                changeBox(currentDivId);
                console.log(`fired event listener with ${currentDivId}`);
            })
            let rowDiv = document.querySelector(`#row${i}`);
            rowDiv.appendChild(currentDiv);
        }
    }
}

function changeBox(divId){
    let divToChange = document.querySelector(`#${divId}`);
    divToChange.classList.add("drawn");
}

function reset() {
    let gridDivs = document.querySelectorAll(".square");
    console.log(gridDivs);
    gridDivs.forEach(element => {
        element.remove();
    })
    let rowDivs = document.querySelectorAll(".row");
    rowDivs.forEach(element => {
        element.remove();
    })
    getNum();
}

//starting program
getNum();