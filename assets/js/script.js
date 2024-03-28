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

// Task 3
const btnPlusOne = document.querySelector('#btnPlusOne');

btnPlusOne.addEventListener('click', incrementListValues);

function incrementListValues() {
    const listItems = document.querySelectorAll('#numberedList li');

    listItems.forEach(item => item.textContent++);
}

// Task 4
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => paragraph.addEventListener('click', changeTextStyle));

function changeTextStyle() {
    if (this.classList.contains('italic')) {
        this.classList.remove('italic');
    } else {
        this.classList.add('italic');
    }
}

// Task 5
let isIndexesAdded = false;

const btnNumberParagraphs = document.querySelector('#btnNumberParagraphs');

btnNumberParagraphs.addEventListener('click', numberParagraphs);

function numberParagraphs() {
    paragraphs.forEach((paragraph, index) => {
        if (isIndexesAdded) {
            paragraph.textContent = paragraph.textContent.replace(/^\d+\.\s/, '');
            this.textContent = 'add indexes';
        } else {
            paragraph.textContent = `${index + 1}. ${paragraph.textContent}`;
            this.textContent = 'remove indexes';
        }
    });

    isIndexesAdded = !isIndexesAdded;
}
