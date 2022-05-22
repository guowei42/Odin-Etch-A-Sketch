const slider = document.getElementById("myrange");
const output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

const buttonValue = document.getElementById('change-value');

buttonValue.addEventListener('click', () => {
    createDiv(slider.value);
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
