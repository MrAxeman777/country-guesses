const countries = {
    easy: [
        {
            name: "France",
            clue: "This European country is famous for a tower in Paris and is known for fashion and cuisine."
        },
        {
            name: "Brazil",
            clue: "This South American country is home to the Amazon rainforest and is the largest country in South America."
        },
        {
            name: "Japan",
            clue: "This island nation in Asia is famous for sushi, technology, and Tokyo."
        },
        {
            name: "Egypt",
            clue: "This African country is home to ancient pyramids and the Nile River."
        },
        {
            name: "Argentina",
            clue: "This South American country is famous for tango and won the 2022 FIFA World Cup."
        }
    ],

    medium: [
        {
            name: "Kazakhstan",
            clue: "This Central Asian country is the world's largest landlocked country."
        },
        {
            name: "Madagascar",
            clue: "This island country near Africa is famous for lemurs and unique wildlife."
        },
        {
            name: "Chile",
            clue: "This long, narrow country stretches along the western side of South America."
        },
        {
            name: "Morocco",
            clue: "This North African country is known for the Atlas Mountains and colorful markets."
        },
        {
            name: "New Zealand",
            clue: "This island country near Australia is known for rugby and stunning landscapes."
        }
    ],

    hard: [
        {
            name: "Tuvalu",
            clue: "This tiny Pacific island nation has Funafuti as its capital and is one of the world's smallest countries."
        },
        {
            name: "Vanuatu",
            clue: "This Pacific island nation has Port Vila as its capital and consists of more than 80 islands."
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
        },
        {
            name: "Kiribati",
            clue: "This Pacific island country is made up of many small islands and has Tarawa as its capital."
        },
        {
            name: "Comoros",
            clue: "This island nation is located between Madagascar and mainland Africa."
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
    let answer = document
        .getElementById("answer")
        .value
        .trim();

    let result = document.getElementById("result");

    if (answer.toLowerCase() === currentCountry.name.toLowerCase()) {

        score += 10;
        streak++;

        result.textContent = "✅ Correct!";

    } else {

        streak = 0;

        result.textContent = "❌ Wrong! Try again.";

    }

    document.getElementById("score").textContent = score;
    document.getElementById("streak").textContent = streak;

    if (answer.toLowerCase() === currentCountry.name.toLowerCase()) {
        setTimeout(() => {
            result.textContent = "";
            newCountry();
        }, 1200);
    }
}

function setDifficulty(level) {

    difficulty = level;
    usedCountries = [];

    score = 0;
    streak = 0;

    document.getElementById("score").textContent = score;
    document.getElementById("streak").textContent = streak;
    document.getElementById("difficulty").textContent =
        level.charAt(0).toUpperCase() + level.slice(1) + " Mode";

    newCountry();
}

newCountry();
