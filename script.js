console.log("yo");


function clickOnTile (cur) {

    cur.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if (trigger == true)
        {
            cur.style.backgroundColor = "black";
            console.log("click");
        }
    })
    cur.addEventListener('click', () => {
        cur.style.backgroundColor = "black";
        console.log("click");
    })
}

let trigger = false;

let slider = document.querySelector(".slider");
let size = slider.value;

console.log(`slider value: ${size}`);

// grid creation

let grid = document.querySelector(".grid");

for (let i = 0 ; i < size ; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute('draggable', "false");
    grid.appendChild(row)

    for (let j = 0 ; j < size ; j++) {
        let tile = document.createElement("div");
        tile.setAttribute("class", "tile");
        tile.setAttribute('draggable', "false");
        row.appendChild(tile);
    }
}





document.addEventListener('mousedown', () => {
    trigger = true;
});

document.addEventListener('mouseup', () => {
    trigger = false;
});

const tileList = document.querySelectorAll(".tile");
tileList.forEach(clickOnTile);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
    tileList.forEach((cur) => {
        cur.style.backgroundColor = 'white';
    })
});