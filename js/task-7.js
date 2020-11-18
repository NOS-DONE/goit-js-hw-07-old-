const getInputControlRef = document.querySelector('#font-size-control');
const getSpanTexRef = document.querySelector('#text');
// console.log(getInputControlRef.value);
// console.log(getSpanTexRef.textContent);

function fontSizeHandler(event) {
    // console.log(event.target.value);
    return getSpanTexRef.style.fontSize = `${event.target.value}px`
}

getInputControlRef.addEventListener('input', fontSizeHandler);
