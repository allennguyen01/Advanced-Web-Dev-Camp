//addPlayer('lebron', 'Lebron James', 'images\\Lebron James.jpg', 27.1, 4, 5, 18, 'Most playoff points: 7631');
addPlayer('kareem', 'Kareem Abdul-Jabbar', 'images\\Kareem Abdul-Jabbar.jpg', 24.6, 6, 2, 15, 'Most MVPs: 6');

// Adds a player to index.html from the given player information
function addPlayer(playerFirstName, playerFullName, imgPath, ppg, nbaChamp, scoringChamp, allNBA, funFact) {
    let playersList = document.getElementById("all-players");
    
    let newPlayer = createDOM(
        `<div class="goat ` + playerFirstName + `"> 
            <button id="` + playerFirstName + `-button" class=` + playerFirstName + ` onclick="select('` + playerFirstName + `');"> 
                <h3>` + playerFullName + `</h3> 
                <img src="` + imgPath + `"> 
            </button>
            <div id="` + playerFirstName + `-stats" class="` + playerFirstName + ` invisible">
                <ol>
                    <li> ` + ppg + ` ppg </li>
                    <li> ` + nbaChamp + `x NBA Champ </li>
                    <li> ` + scoringChamp + `x Scoring Champ </li>
                    <li> ` + allNBA + `x All-NBA </li>
                    <li> ` + funFact + ` </li>
                </ol>
            </div>
        </div>`
    );

    playersList.appendChild(newPlayer);
}

// Creates a DOM element from the given HTML string
function createDOM (htmlString) {
    let template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    return template.content.firstChild;
}