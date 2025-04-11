const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
const input = document.querySelector("input[name='size']")

function clearChildren() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getRandomNum() {
    const randomNum = Math.floor(Math.random() * 255) + 1;
    return randomNum;
}

function renderCanvas() {
    clearChildren();
    const gridSize = input.value;
    const boxSize = 960 / gridSize
    const boxNum = gridSize * gridSize;

    for(i = 0; i < boxNum; i++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.style.width = boxSize + 'px';
        box.style.height = boxSize + 'px';
    
        container.appendChild(box);
    }
    
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'rgb(' + [getRandomNum(),getRandomNum(),getRandomNum()].join(',') + ')';
        })
    })
    
}

renderCanvas();

btn.addEventListener('click', renderCanvas);
