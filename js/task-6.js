const inputRef = document.querySelector('#validation-input');
// console.log(inputRef);

// inputRef.addEventListener('focus', hundleInputFocus);
inputRef.addEventListener('blur', hundleInputBlur);
// console.log(inputRef.value);

// function hundleInputFocus(event) {
//     console.log('focus');
// }
function hundleInputBlur() {
    // console.log('blur');
    // console.log(event);
    // console.log(inputRef.value);

    if (Number(inputRef.getAttribute('data-length')) === inputRef.value.length){
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
    }
}
