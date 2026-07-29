const countries = {
    easy: [
        {
            name: "France",
            clue: "This European country has Paris as its capital and is famous for fashion and cuisine."
        },
        {
            name: "Brazil",
            clue: "This South American country contains much of the Amazon rainforest."
        },
        {
            name: "Japan",
            clue: "This Asian island country has Tokyo as its capital."
        },
        {
            name: "Egypt",
            clue: "This African country is home to ancient pyramids."
        },
        {
            name: "Italy",
            clue: "This European country is shaped like a boot and has Rome as its capital."
        }
    ],

    medium: [
        {
            name: "Kazakhstan",
            clue: "This Central Asian country is the largest landlocked country in the world."
        },
        {
            name: "Madagascar",
            clue: "This island country near Africa is famous for lemurs."
        },
        {
            name: "Chile",
            clue: "This long narrow country stretches along South America's western coast."
        },
        {
            name: "Morocco",
            clue: "This North African country is known for the Atlas Mountains."
        },
        {
            name: "Uzbekistan",
            clue: "This Central Asian country was part of the Silk Road and has Tashkent as its capital."
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
            clue: "This African country is completely surrounded by South Africa."
        },
        {
            name: "Kiribati",
            clue: "This Pacific island country has Tarawa as its capital."
        },
        {
            name: "Comoros",
            clue: "This island nation is located between Madagascar and mainland Africa."
        },
        {
            name: "Palau",
            clue: "This Pacific island country is famous for its marine biodiversity and has Ngerulmud as its capital."
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


    currentCountry =
        available[Math.floor(Math.random() * available.length)];


    usedCountries.push(currentCountry.name);


    document.getElementById("clue").textContent =
        currentCountry.clue;

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

        setTimeout(() => {
            result.textContent = "";
            newCountry();
        }, 1000);


    } else {

        streak = 0;
        result.textContent = "❌ Incorrect! Try again.";

    }


    document.getElementById("score").textContent = score;
    document.getElementById("streak").textContent = streak;

}



function setDifficulty(level) {

    difficulty = level;

    usedCountries = [];

    score = 0;
    streak = 0;


    document.getElementById("difficulty").textContent =
        level.toUpperCase() + " MODE";


    document.getElementById("score").textContent = score;
    document.getElementById("streak").textContent = streak;


    newCountry();

}



newCountry();
