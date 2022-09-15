const container = document.querySelector('.container');
const button = document.querySelector('.zoom');
const input = document.querySelector('#search');
button.addEventListener('click', () => {
    if (input.value == 'Calculator') {
    window.open('rps/index.html');
    } else {
        alert('Type Calculator!')
    }
});