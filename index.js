const textAreaElement = document.getElementById('textarea');

const remainingCounterElement = document.getElementById('remaining-counter');

const totalCounterElement = document.getElementById('total-counter');

const maxAttributeValue = textAreaElement.getAttribute('maxlength');

// console.log(maxAttributeValue);

textAreaElement.addEventListener('keyup', (event) => {
    // console.log(`${event.key} is pressed`);
    updateCounter();
})

updateCounter();

function updateCounter() {

    totalCounterElement.innerText = textAreaElement.value.length;

    remainingCounterElement.innerText = maxAttributeValue - totalCounterElement.innerText
}