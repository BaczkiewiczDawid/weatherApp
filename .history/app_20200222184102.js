const questionOne = {
    title: "Która liczba jest największa?",
    first: "2",
    two: "53",
    three: "-43",
    four: "64"
}

const h1 = document.querySelector("h1");
const buttonFirst = document.querySelector("buttonFirst").addEventListener("click", result);
const buttonTwo = document.querySelector("buttonTwo").addEventListener("click", result);
const buttonThree = document.querySelector("buttonTwo").addEventListener("click", result);
const buttonFour = document.querySelector("buttonTwo").addEventListener("click", result);

function result() {
    h1.textContent = questionOne.title;
    buttonFirst.textContent = questionOne.first;
    buttonTwo.textContent = questionOne.two;
    buttonThree.textContent = questionOne.three;
    buttonFour.textContent = questionOne.four;
}