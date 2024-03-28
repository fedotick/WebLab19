// Task 1
const btnShowZeros = document.querySelector('#btnShowZeros');

btnShowZeros.addEventListener('click', showZeros);

function showZeros() {
    const cells = document.querySelectorAll('#table td');

    cells.forEach(cell => {
        if (cell.textContent == '0') {
            cell.classList.add('red-cell');
        } 
    });
}
