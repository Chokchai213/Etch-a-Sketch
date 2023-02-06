const gridContainer = document.querySelector('.grid-container');
let perSide = 16; //initial size is 16 per side

createGrid(perSide);

function createGrid(perSide){
    gridContainer.style.gridTemplateColumns = (`repeat(${perSide}, 1fr`);
    gridContainer.style.gridTemplateRows = (`repeat(${perSide}, 1fr`);
    for(let i = 0; i<perSide*perSide; i++) {
      const gridCell = document.createElement('div');
      gridContainer.appendChild(gridCell);
    }
}