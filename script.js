const countries = [
    {
        name: "France",
        clue: "This country has the Eiffel Tower 🇫🇷"
    },
    {
        name: "Brazil",
        clue: "This country is famous for the Amazon rainforest 🇧🇷"
    },
    {
        name: "Japan",
        clue: "This country is known for sushi and anime 🇯🇵"
    },
    {
        name: "Canada",
        clue: "This country has the maple leaf flag 🇨🇦"
    },
    {
        name: "Argentina",
        clue: "This country won the 2022 FIFA World Cup 🇦🇷"
    }
];

let currentCountry;
let score = 0;

function newCountry() {
    currentCountry = countries[Math.floor(Math.random() * countries.length)];

    document.getElementById("clue").textContent = currentCountry.clue;
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const answer = document
        .getElementById("answer")
        .value
        .trim();

    const result = document.getElementById("result");

    if (answer.toLowerCase() === currentCountry.name.toLowerCase()) {
        score++;
        document.getElementById("score").textContent = score;
        result.textContent = "✅ Correct!";
    } else {
        result.textContent = "❌ Try again!";
    }

    setTimeout(() => {
        result.textContent = "";
        newCountry();
    }, 1500);
}

newCountry();
