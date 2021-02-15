// Question 2

const gamesUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {
    
    const response = await fetch(gamesUrl);

    const games = await response.json();

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
        console.log(games[i].name);

        if (i === 8) {
            break;
        }
    

        resultsContainer.innerHTML += `<div class="result">${games[i].name}</div>`;
    }
}

getGames();
