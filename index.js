let num = prompt("How many rows/columns would you like?");
let containerDiv = document.querySelector("#container");

for(let i = 0; i < num; i++){
    let currentDiv = document.createElement("div");
    currentDiv.setAttribute("id",`row${i}`);
    currentDiv.setAttribute("class","row");
    currentDiv.textContent = `this is row${i}`;
    containerDiv.appendChild(currentDiv);
}