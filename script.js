const countries = {
    easy: [
        {
            name: "France",
            clue: "This European country is famous for a tower in Paris and is known for fashion and cuisine."
        },
        {
            name: "Brazil",
            clue: "This South American country is home to the Amazon rainforest and has the largest population in South America."
        },
        {
            name: "Japan",
            clue: "This island nation in Asia is famous for technology, sushi, and the city of Tokyo."
        },
        {
            name: "Egypt",
            clue: "This African country is home to ancient pyramids and the Nile River."
        }
    ],

    medium: [
        {
            name: "Kazakhstan",
            clue: "This country is the world's largest landlocked country and is located in Central Asia."
        },
        {
            name: "Madagascar",
            clue: "This island country off Africa is famous for unique wildlife like lemurs."
        },
        {
            name: "Chile",
            clue: "This long, narrow country stretches along the western side of South America."
        },
        {
            name: "Morocco",
            clue: "This North African country is known for colorful markets and the Atlas Mountains."
        }
    ],

    hard: [
        {
            name: "Tuvalu",
            clue: "This tiny Pacific island nation has Funafuti as its capital and is one of the world's smallest countries."
        },
        {
            name: "Vanuatu",
            clue: "This Pacific island country has Port Vila as its capital and is made up of many islands."
        },
        {
            name: "Liechtenstein",
            clue: "This small European country is located between Switzerland and Austria."
        },
        {
            name: "Lesotho",
            clue: "This African country is completely surrounded by another country and has Maseru as its capital."
        },
        {
            name: "Bhutan",
            clue: "This Himalayan country is known for measuring Gross National Happiness."
        }
    ]
};

let difficulty = "easy";
let currentCountry;
let score = 0;
let streak = 0;
let usedCountries = [];

function newCountry() {
    let list = countries[difficulty];

    let available = list.filter(
        country => !usedCountries.includes(country.name)
    );

    if (available.length === 0) {
        usedCountries = [];
        available = list;
    }

    currentCountry = available[Math.floor(Math.random() * available.length)];

    usedCountries.push(currentCountry.name);

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

        score += 10;
        streak++;

        result.textContent = "✅ Correct!";

    } else {

        streak = 0;
        result.textContent = "❌ Incorrect!";

    }

    document.getElementById("score").textContent = score;

    setTimeout(() => {
        result.textContent = "";
        newCountry();
    }, 1500);
}

function setDifficulty(level) {
    difficulty = level;
    usedCountries = [];
    score = 0;
    streak = 0;

    document.getElementById("score").textContent = score;

    newCountry();
}

newCountry();
