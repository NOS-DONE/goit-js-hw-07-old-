const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
// console.log(inputRef);
inputRef.addEventListener('input', event => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value)
    if (event.target.value === '') {
        outputRef.textContent = 'незнакоменц'
    } else {
        outputRef.textContent = event.target.value
    }
});


