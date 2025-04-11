function renderCanvas() {
    const container = document.querySelector('#container');


    for(i = 0; i < 256; i++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        container.appendChild(box);
        console.log(i)
    }

    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.classList.add('colored');
        })
    })
    
}

renderCanvas();
