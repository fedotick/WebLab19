// Task 1
let isHighlighted = false;

const btnHighlightZeros = document.querySelector('#btnShowZeros');
const cells = document.querySelectorAll('#table td');

btnShowZeros.addEventListener('click', btnHighlightZerosClick);

function btnHighlightZerosClick() {
    if (isHighlighted) {
        removeHighlightingZeros(cells);
        this.textContent = 'show zeros';
        isHighlighted = false;
    } else {
        highlightZeros(cells);
        this.textContent = 'hide zeros';
        isHighlighted = true;
    }
}

function highlightZeros(cells) {
    cells.forEach(cell => highlightZero(cell));
}

function highlightZero(cell) {
    cell.textContent === '0' ? cell.classList.add('red-cell') : cell.classList.remove('red-cell');
}

function removeHighlightingZeros(cells) {
    cells.forEach(cell => cell.classList.remove('red-cell'));
}

// Task 2
cells.forEach(cell => cell.addEventListener('click', cellClick));

function cellClick() {
    const newText = prompt('Enter text:');

    if (newText !== null) {   
        this.textContent = newText;

        if (isHighlighted) highlightZero(this);
    }
}
