let num = prompt("How many rows/columns would you like?");
let containerDiv = document.querySelector("#container");

for(let i = 0; i < num; i++){
    let currentDiv = document.createElement("div");
    currentDiv.setAttribute("id",`row${i}`);
    currentDiv.setAttribute("class","row");
    containerDiv.appendChild(currentDiv);
}

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

function changeBox(divId){
    let divToChange = document.querySelector(`#${divId}`);
    divToChange.classList.add("drawn");
}