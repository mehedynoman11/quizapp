// const num1 = Math.round(Math.random() * 10)
// const num2 = Math.round(Math.random() * 10)
// const q1 = document.getElementById("question");
// const f1 = document.getElementById("formE")
// const i1 = document.getElementById("input")
// const scoreDisplay = document.getElementById("score")
// let score = 0;
// const correctAns = num1 + num2


// q1.innerText= `what is ${num1} Addition by ${num2}?`

// f1.addEventListener("submit", function (event) {
//     event.preventDefault(); 

//     const userAns = parseInt(i1.value, 10);

//     if (userAns === correctAns) {
//         score++;
//         alert("Correct!");
//     } else {
//         alert("Incorrect. Try again!");
//     }

//     scoreDisplay.innerText = `Score: ${score}`;
//     i1.value = "";
//     updateQuestion();
// });
const generateRandomNumber = () => Math.round(Math.random() * 10);

const q1 = document.getElementById("question");
const f1 = document.getElementById("formE");
const i1 = document.getElementById("input");
const scoreDisplay = document.getElementById("score");
let score = 0;

let num1, num2, correctAns;

const updateQuestion = () => {
    if (score === 20) {
        q1.innerText = "Thank you!";
    } else {
        num1 = generateRandomNumber();
        num2 = generateRandomNumber();
        correctAns = num1 + num2;
        q1.innerText = `What is ${num1} + ${num2}?`;
    }
};

const handleFormSubmit = (event) => {
    event.preventDefault();

    const userAns = parseInt(i1.value, 10);

    if (userAns === correctAns) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect. Try again!");
    }

    scoreDisplay.innerText = `Score: ${score}`;
    i1.value = "";
    updateQuestion();
};

f1.addEventListener("submit", handleFormSubmit);

// Initial question setup
updateQuestion();
