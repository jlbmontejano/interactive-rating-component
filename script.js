const submitButton = document.getElementById('submit-button');
const radioButtons = document.querySelectorAll('input[name="number"]');

const enableSubmit = () => {
    submitButton.classList.remove('disabled');
    submitButton.removeAttribute('disabled');
};

submitButton.addEventListener('click', () => {
    const ask = document.getElementById('asking-box');
    const thank = document.getElementById("thank-you-box");
    let rating = document.querySelector('input[type = radio]:checked').value;

    if (rating !== null) {

        ask.style.display = "none";
        thank.style.display = "block";

        document.getElementById('final-rating').innerHTML = `You selected ${rating} out of 5`;
    }
});