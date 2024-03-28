// Task 1
let isHighlighted = false;

const btnHighlightZeros = document.querySelector('#btnShowZeros');

btnShowZeros.addEventListener('click', btnHighlightZerosClick);

function btnHighlightZerosClick() {
    const cells = document.querySelectorAll('#table td');
    
    if (isHighlighted) {
        removeHighlightingZeros(cells);
        this.textContent = 'show zeros';
        isHighlighted = false;
    } else {
        highlightZeros(cells);
        this.textContent = 'hide zeros';
        isHighlighted = true;
    }
};

function highlightZeros(cells) {
    cells.forEach(cell => highlightZero(cell));
};

function highlightZero(cell) {
    cell.textContent === '0' ? cell.classList.add('red-cell') : cell.classList.remove('red-cell');
};

function removeHighlightingZeros(cells) {
    cells.forEach(cell => cell.classList.remove('red-cell'));
};
