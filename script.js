const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let id = button.id;
        switch(id) {
            case "4":
                createDiv(4);
                break;
            case "8":
                createDiv(8);
                break;
            case "16":
                createDiv(16);
                break;
            case "32":
                createDiv(32);
                break;
            case "64":
                createDiv(64);
                break;
        }
    });
});

function createDiv(number) {
    const sketch = document.querySelector('.sketch');
    sketch.style['grid-template-columns'] = 'repeat(' + number + ', auto)';
    sketch.textContent = '';
    for (let i = 0; i < number * number; i++) {
        const div = document.createElement('div');
        div.id = 'etch';
        div.textContent = '';
        sketch.appendChild(div);
    }
    setColor('royalblue');
    console.log(number);
}

function setColor(color) {
    const colours = document.querySelectorAll('#etch');
    colours.forEach((colour) => {
        colour.addEventListener('mouseover', () => {
            colour.style['background-color'] = color;
        });
    });
}
