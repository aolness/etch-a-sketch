const container = document.querySelector(".container");
const button = document.querySelector("button");
const gridSize = 960;
displayGrid(16);

function displayGrid(size) {
    container.replaceChildren();
    let etchSize = gridSize/size;
    let div, row;
    for (i=0; i<size; i++){
        row = document.createElement('div');
        row.setAttribute("class", "row");
        for (j=0; j<size; j++){
            div = document.createElement("div");
            div.setAttribute("class", "etch-box");
            div.addEventListener("mouseover", toggleColor);
            row.appendChild(div);
            div.style.height = etchSize.toString()+"px)";
            div.style.width = etchSize.toString()+"px)";
        }
        container.appendChild(row);
    }
}

function toggleColor(e) {
    e.target.style.backgroundColor = "black";
}

button.addEventListener("click", resize);
function resize(e) {
    let size = parseInt(prompt("How big should one side be?"));
    console.log(size);
    while (typeof(size) != 'number' || size == NaN || size<=0 || size > 100) {
        size = parseInt(prompt("Please enter a number 1-100..."));
        console.log(size);
    }
    displayGrid(size);
}