let input, button, slider, output, questionText, difficultyText, resetButton;
let score = 0;
let currentQuestionIndex = 0;
let difficultyLevel = "Medium";

const questions = {
    easy: [
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What color is the sky?", answer: "Blue" },
        { question: "What is the opposite of hot?", answer: "Cold" },
        { question: "What is 5 - 3?", answer: "2" }
    ],
    medium: [
        { question: "How many provinces are in Canada?", answer: "10" },
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
        { question: "What is the boiling point of water in Celsius?", answer: "100" }
    ],
    hard: [
        { question: "What is the square root of 144?", answer: "12" },
        { question: "What is the chemical symbol for gold?", answer: "Au" },
        { question: "Who developed the theory of relativity?", answer: "Einstein" },
        { question: "What is the derivative of x^2?", answer: "2x" }
    ]
};
questions.easy.push(
    { question: "What is 1 + 1?", answer: "2" },
    { question: "What is the color of grass?", answer: "Green" },
    { question: "What is the opposite of up?", answer: "Down" },
    { question: "What is 10 - 7?", answer: "3" },
    { question: "What is the color of a banana?", answer: "Yellow" },
    { question: "What is 3 + 0?", answer: "3" }
);

questions.medium.push(
    { question: "What is the capital of Germany?", answer: "Berlin" },
    { question: "What is the square root of 81?", answer: "9" },
    { question: "What is the chemical symbol for water?", answer: "H2O" },
    { question: "What is 15 divided by 3?", answer: "5" },
    { question: "What is the capital of Japan?", answer: "Tokyo" },
    { question: "What is 12 * 12?", answer: "144" }
);

questions.hard.push(
    { question: "What is the value of pi to 3 decimal places?", answer: "3.142" },
    { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
    { question: "What is the speed of light in m/s?", answer: "299792458" },
    { question: "What is the atomic number of carbon?", answer: "6" },
    { question: "What is the derivative of sin(x)?", answer: "cos(x)" },
    { question: "What is the capital of Australia?", answer: "Canberra" }
);

let currentQuestions = questions.medium;

function setup() {
    createCanvas(400, 100);
    background(77, 77, 77);

    input = createInput();
    input.position(20, 80);

    button = createButton('Submit');
    button.position(input.x + input.width + 10, 80);
    button.mousePressed(checkAnswer);

    slider = createSlider(1, 3, 2); // 1: Easy, 2: Medium, 3: Hard
    slider.position(20, 105);
    slider.style('width', '200px');
    slider.input(updateDifficulty);

    output = createP('Score: 0');
    output.position(20, 160);

    questionText = createP('');
    questionText.position(20, 30);

    difficultyText = createP('Difficulty: Medium');
    difficultyText.position(20, 131);

    resetButton = createButton('Reset Quiz');
    resetButton.position(240, 80);
    resetButton.mousePressed(resetQuiz);

    displayQuestion();
}

function draw() {
}

function keyPressed() {
    if (key === 'Enter') {
        checkAnswer();
    }
}

function checkAnswer() {
    let userInput = input.value().trim();
    let correctAnswer = currentQuestions[currentQuestionIndex].answer;

    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        output.html('Correct! Score: ' + score);
        input.value('');
        nextQuestion();
    } else {
        output.html('Wrong! Try again. Score: ' + score);
    }
}

function displayQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        questionText.html(currentQuestions[currentQuestionIndex].question);
    } else {
        questionText.html('Quiz complete! Final Score: ' + score);
        input.hide();
        button.hide();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function updateDifficulty() {
    let sliderValue = slider.value();
    if (sliderValue === 1) {
        difficultyLevel = "Easy";
        currentQuestions = questions.easy;
    } else if (sliderValue === 2) {
        difficultyLevel = "Medium";
        currentQuestions = questions.medium;
    } else if (sliderValue === 3) {
        difficultyLevel = "Hard";
        currentQuestions = questions.hard;
    }

    difficultyText.html('Difficulty: ' + difficultyLevel);
    currentQuestionIndex = 0;
    score = 0;
    output.html('Score: ' + score);
    displayQuestion();
}

function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    input.value('');
    input.show();
    button.show();
    output.html('Score: ' + score);
    displayQuestion();
}