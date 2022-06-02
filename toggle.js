function select(player) {
    // get the selected player's details and button, as well as the old details and button
    let stats = document.getElementById(player + "-info");
    let button = document.getElementById(player + "-button");

    // toggle the player's details visibility and selection status
    stats.classList.toggle("invisible");
    button.classList.toggle("selected");
}