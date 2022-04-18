var MemoryGame;
(function (MemoryGame) {
    window.addEventListener("load", handleLoad);
    let FormValues;
    let memoryvalue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    let memoryPairs;
    let memoryDeck = [];
    let Hight;
    let cardColor;
    let fontColor;
    let Font;
    let openCard = [];
    function handleLoad() {
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", gamestart);
    }
    function gamestart(_event) {
        _event.preventDefault();
        let formDiv = document.querySelector("#gamesettings");
        formDiv.setAttribute("style", "display:none");
        let DivField = document.createElement("div");
        DivField.className = "gamefield";
        let body = document.querySelector("body");
        body.appendChild(DivField);
        FormValues = new FormData(document.forms[0]);
        let memoryPairsValue = FormValues.get("Pairs");
        if (memoryPairsValue) {
            memoryPairs = Number(memoryPairsValue);
        }
        Hight = Number(FormValues.get("Hight"));
        cardColor = FormValues.get("cardColor");
        fontColor = FormValues.get("fontColor");
        Font = FormValues.get("Font");
        console.log(Number(memoryPairs));
        for (let a = 0; a < 2; a++) {
            for (let i = 0; i < memoryPairs; i++) {
                renderedCard(memoryPairs, i);
            }
        }
        shuffle();
        for (let i = 0; i < memoryDeck.length; i++) {
            DivField.appendChild(memoryDeck[i]);
        }
    }
    function renderedCard(_memoryPairs, _i) {
        let renderedMemorycard = document.createElement("div");
        renderedMemorycard.addEventListener("click", clickedCard);
        renderedMemorycard.classList.add("card");
        renderedMemorycard.classList.add("hidden");
        if (cardColor) {
            renderedMemorycard.style.backgroundColor = cardColor.toString();
        }
        renderedMemorycard.style.height = Hight + "px";
        renderedMemorycard.style.width = Hight + "px";
        renderedMemorycard.innerHTML = "<p>" + memoryvalue[_i] + "</p>";
        renderedMemorycard.style.fontSize = Hight - 5 + "px";
        if (Font) {
            renderedMemorycard.style.fontFamily = Font.toString();
        }
        if (fontColor) {
            renderedMemorycard.style.color = fontColor.toString();
        }
        memoryDeck.push(renderedMemorycard);
    }
    function shuffle() {
        for (let i = memoryDeck.length - 1; i > 0; i--) {
            let randomNumber = Math.floor(Math.random() * (i + 1));
            let tmp = memoryDeck[i];
            memoryDeck[i] = memoryDeck[randomNumber];
            memoryDeck[randomNumber] = tmp;
        }
    }
    function clickedCard(_event) {
        let target = _event.target;
        openCard.push(target);
        openCard[0].classList.remove("hidden");
        openCard[0].classList.add("open");
        if (openCard.length == 2) {
            openCard[1].classList.remove("hidden");
            openCard[1].classList.add("open");
            setTimeout(compare, 500);
        }
        function compare() {
            if (openCard[0].innerHTML === openCard[1].innerHTML) {
                openCard[0].style.visibility = "hidden";
                openCard[1].style.visibility = "hidden";
                memoryDeck.splice(0, 2);
                winCondition();
            }
            else {
                openCard[0].classList.contains("open");
                openCard[0].classList.add("hidden");
                openCard[1].classList.contains("open");
                openCard[1].classList.add("hidden");
            }
            openCard = [];
        }
        function winCondition() {
            if (memoryDeck.length == 0) {
                alert("Du hast gewonnen!");
                location.reload();
            }
        }
    }
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=script.js.map