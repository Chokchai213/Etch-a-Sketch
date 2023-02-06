const DEFAULT_COLOR = "#000000";
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 32;
let perSide = DEFAULT_SIZE;
let drawMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;
const gridContainer = document.querySelector('.grid-container');
const colorButton = document.getElementById('color-button');
const rainbowButton = document.getElementById('rainbow-button');
const eraseButton = document.getElementById('erase-button');
const resetButton = document.getElementById('reset-button');
const colorPicker = document.getElementById('colorPicker');
function setColor(newColor) {
    currentColor = newColor;
}
colorPicker.oninput = (e) => setColor(e.target.value);
resetButton.onclick = () => reset();
colorButton.onclick = () => setMode('color');
rainbowButton.onclick = () => setMode('rainbow');
eraseButton.onclick = () => setMode('erase');
let userClick = false;
document.body.onmousedown = () => (userClick = true);
document.body.onmouseup = () => (userClick = false);
function setMode(mode) {
    if (mode == 'color') {
        drawMode = "color";
    } else if (mode == 'rainbow') {
        drawMode = 'rainbow';
    } else if (mode == 'erase') {
        drawMode = 'erase';
    }
}
function createGrid(perSide) {
    gridContainer.style.gridTemplateColumns = (`repeat(${perSide}, 1fr`);
    gridContainer.style.gridTemplateRows = (`repeat(${perSide}, 1fr`);
    for (let i = 0; i < perSide * perSide; i++) {
        const gridCell = document.createElement('div');
        gridCell.addEventListener('mousedown', draw);
        gridCell.addEventListener('mouseover', draw);
        gridContainer.appendChild(gridCell);
    }
    gridContainer.addEventListener('onmouseleave', function () {
        userClick = false;
    });
}
function clear() {
    gridContainer.innerHTML = '';
}
function reset() {
    clear();
    createGrid(perSide);
}
function draw(e) {
    if (e.type === 'mouseover' && !userClick) {
        return null;
    }
    if (drawMode == 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (drawMode == 'rainbow') {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    } else if (drawMode == 'erase') {
        e.target.style.backgroundColor = '#ffffff';
    }
}

window.onload = () => {
    createGrid(perSide);
}