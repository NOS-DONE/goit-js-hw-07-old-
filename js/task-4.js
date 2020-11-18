const changedValueRef = document.querySelector('#value');
const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');
// console.log(changedValueRef, incrementRef, decrementRef);

let counterValue = 0;

function increment() {
    counterValue += 1;
    console.log(counterValue);
    changeText()
}

function decrement() {
    counterValue -= 1;
    console.log(counterValue);
    changeText()
}

function changeText() {
    changedValueRef.textContent = counterValue;
}




incrementRef.addEventListener('click', increment);
decrementRef.addEventListener('click', decrement);

// console.log(counterValue);


