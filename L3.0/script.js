var MemoryGame;
(function (MemoryGame) {
    window.addEventListener("load", handleLoad);
    let memoryCards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    function handleLoad(_event) {
        let startButton = document.querySelector("#start");
        startButton.addEventListener("click", gameStart);
    }
    function gameStart(_event) {
        let gameSettings = document.querySelector("#gamesettings");
        gameSettings.setAttribute("style", "display:none");
        let playGround = document.createElement("div");
        playGround.classList.add("playGround");
        let body = document.querySelector("body");
        body.appendChild(playGround);
    }
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=script.js.map