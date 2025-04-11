const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
const input = document.querySelector("input[name='size']")

function clearChildren() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
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
            box.classList.add('colored');
        })
    })
    
}

renderCanvas();

btn.addEventListener('click', renderCanvas);
