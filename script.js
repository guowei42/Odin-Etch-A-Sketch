const sketch = document.querySelector('#sketch');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let id = button.id;
        switch(id) {
            case "2":
                createDiv(2);
                break;
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
        }
    });
});

function createDiv(number) {
    console.log(number);
}
