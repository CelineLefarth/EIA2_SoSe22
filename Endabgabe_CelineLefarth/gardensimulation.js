var GardenSimulation;
(function (GardenSimulation) {
    window.addEventListener("load", handleLoad);
    GardenSimulation.fields = [];
    GardenSimulation.plants = [];
    GardenSimulation.player = new GardenSimulation.Player();
    GardenSimulation.time = 0;
    GardenSimulation.timeanimation = 0;
    GardenSimulation.allBugs = [];
    //Buttons Kosten und Mengen Werte
    GardenSimulation.fertilizeMenge = 0;
    GardenSimulation.pestizideMenge = 0;
    let fertilizePreis = 2;
    let pestizidePreis = 2;
    let fertilizePreisNeu;
    let pestizidePreisNeu;
    let gameField;
    let formValues;
    let moneyChange;
    function handleLoad() {
        GardenSimulation.Load.loading();
        let assets = document.querySelector("#assets");
        assets.setAttribute("style", "display: none");
        gameField = document.querySelector("#gameField");
        gameField.style.visibility = ("hidden");
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", buildField);
    }
    //Spielfeld wird geladen
    function buildField() {
        getFormSettings();
        update();
        createGameButtons();
        createGardenField();
        startTimer();
        startTimerShop();
        gameField.style.visibility = ("visible");
        let formData = document.querySelector("#gamesettings");
        formData.setAttribute("style", "display:none");
    }
    //erstellen einzelner Gartenfelder
    function createGardenField() {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                GardenSimulation.fields.push(new GardenSimulation.Field(j, i));
            }
        }
        for (let field of GardenSimulation.fields) {
            field.draw();
        }
    }
    //Marktbuttons, Canvas und ClickEvent werden geladen 
    function createGameButtons() {
        //Canvasgröße wird
        GardenSimulation.canvas = document.querySelector("canvas");
        GardenSimulation.cr2 = GardenSimulation.canvas.getContext("2d");
        GardenSimulation.canvas.height = 600;
        GardenSimulation.canvas.width = 800;
        GardenSimulation.canvas.addEventListener("click", (evt) => { getMousePosition(evt); });
        let buyBtn1 = document.querySelector("#buyKarotten");
        let buyBtn2 = document.querySelector("#buyMelone");
        let buyBtn3 = document.querySelector("#buyRadieschen");
        let buyBtn4 = document.querySelector("#buySalat");
        let buyBtn5 = document.querySelector("#buySellerie");
        let buyfertilize = document.querySelector("#buyFertilize");
        let buypestizide = document.querySelector("#buyPesticide");
        //Event Listener, Value wird weitergegeben an die Klasse Player
        buyBtn1.addEventListener("click", () => GardenSimulation.player.buy(buyBtn1.value));
        buyBtn2.addEventListener("click", () => GardenSimulation.player.buy(buyBtn2.value));
        buyBtn3.addEventListener("click", () => GardenSimulation.player.buy(buyBtn3.value));
        buyBtn4.addEventListener("click", () => GardenSimulation.player.buy(buyBtn4.value));
        buyBtn5.addEventListener("click", () => GardenSimulation.player.buy(buyBtn5.value));
        //Gekaufte Menge wird genneriert und angezeigt
        buyfertilize.addEventListener("click", stackfertilize);
        buypestizide.addEventListener("click", stackpesticide);
        let seedButton1 = document.querySelector("#seed1");
        let seedButton2 = document.querySelector("#seed2");
        let seedButton3 = document.querySelector("#seed3");
        let seedButton4 = document.querySelector("#seed4");
        let seedButton5 = document.querySelector("#seed5");
        let harvestButton = document.querySelector("#harvest");
        let waterButton = document.querySelector("#water");
        let fertilizeButton = document.querySelector("#fertilize");
        let pesticideButton = document.querySelector("#pesticide");
        seedButton1.addEventListener("click", () => GardenSimulation.player.plant(seedButton1.value));
        seedButton2.addEventListener("click", () => GardenSimulation.player.plant(seedButton2.value));
        seedButton3.addEventListener("click", () => GardenSimulation.player.plant(seedButton3.value));
        seedButton4.addEventListener("click", () => GardenSimulation.player.plant(seedButton4.value));
        seedButton5.addEventListener("click", () => GardenSimulation.player.plant(seedButton5.value));
        harvestButton.addEventListener("click", GardenSimulation.player.harvest);
        waterButton.addEventListener("click", GardenSimulation.player.water);
        fertilizeButton.addEventListener("click", GardenSimulation.player.fertilize);
        pesticideButton.addEventListener("click", GardenSimulation.player.pesticide);
    }
    function getMousePosition(_evt) {
        let rect = GardenSimulation.canvas.getBoundingClientRect();
        GardenSimulation.mX = _evt.clientX - rect.left;
        GardenSimulation.mY = _evt.clientY - rect.top;
        for (let field of GardenSimulation.fields) {
            field.isHit(GardenSimulation.mX, GardenSimulation.mY);
        }
    }
    function getFormSettings() {
        formValues = new FormData(document.forms[0]);
        GardenSimulation.money = Number(formValues.get("startmoney"));
        moneyChange = Number(formValues.get("schwankung"));
    }
    function startTimer() {
        setInterval(timer, 1000);
    }
    function timer() {
        GardenSimulation.time++;
        console.log(GardenSimulation.time);
        for (let field of GardenSimulation.fields) {
            field.draw();
        }
        GardenSimulation.cr2.resetTransform();
        for (let plant of GardenSimulation.plants) {
            plant.grow();
            plant.plantNeedsWater();
            plant.plantNeedsDuenger();
            plant.draw();
            random(plant);
        }
        for (let pest of GardenSimulation.allBugs) {
            pest.draw();
        }
        document.querySelector("#money").innerHTML = "Money: " + GardenSimulation.money + " €";
    }
    GardenSimulation.timer = timer;
    function random(_plant) {
        let randomEvent = Math.random() * 40;
        if (randomEvent < 2) {
            _plant.createBug();
        }
    }
    function startTimerShop() {
        setInterval(update, 3000);
    }
    GardenSimulation.startTimerShop = startTimerShop;
    function stackfertilize() {
        GardenSimulation.money = GardenSimulation.money - fertilizePreisNeu;
        GardenSimulation.fertilizeMenge++;
        updateSeedAmount();
    }
    function stackpesticide() {
        GardenSimulation.money = GardenSimulation.money - pestizidePreisNeu;
        GardenSimulation.pestizideMenge++;
        updateSeedAmount();
    }
    function update() {
        GardenSimulation.Karotte.priceNeu = GardenSimulation.Karotte.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Melone.priceNeu = GardenSimulation.Melone.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Radish.priceNeu = GardenSimulation.Radish.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Salat.priceNeu = GardenSimulation.Salat.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Sellerie.priceNeu = GardenSimulation.Sellerie.price + (Math.floor(Math.random() * moneyChange));
        fertilizePreisNeu = fertilizePreis + (Math.floor(Math.random() * moneyChange));
        pestizidePreisNeu = pestizidePreis + (Math.floor(Math.random() * moneyChange));
        updatePrice();
    }
    function updatePrice() {
        document.querySelector("#karottePrice").innerHTML = GardenSimulation.Karotte.priceNeu.toString() + "€";
        document.querySelector("#melonePrice").innerHTML = GardenSimulation.Melone.priceNeu.toString() + "€";
        document.querySelector("#radischenPrice").innerHTML = GardenSimulation.Radish.priceNeu.toString() + "€";
        document.querySelector("#salatPrice").innerHTML = GardenSimulation.Salat.priceNeu.toString() + "€";
        document.querySelector("#selleriePrice").innerHTML = GardenSimulation.Sellerie.priceNeu.toString() + "€";
        document.querySelector("#fertilizePrice").innerHTML = fertilizePreisNeu.toString() + "€";
        document.querySelector("#pesticidePrice").innerHTML = pestizidePreisNeu.toString() + "€";
    }
    function getRandomInt(_min, _max) {
        let min = Math.ceil(_min);
        let max = Math.floor(_max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    GardenSimulation.getRandomInt = getRandomInt;
    function updateSeedAmount() {
        document.querySelector("#karotteMenge").innerHTML = GardenSimulation.Karotte.seedamount.toString();
        document.querySelector("#meloneMenge").innerHTML = GardenSimulation.Melone.seedamount.toString();
        document.querySelector("#radieschenMenge").innerHTML = GardenSimulation.Radish.seedamount.toString();
        document.querySelector("#salatMenge").innerHTML = GardenSimulation.Salat.seedamount.toString();
        document.querySelector("#sellerieMenge").innerHTML = GardenSimulation.Sellerie.seedamount.toString();
        document.querySelector("#fertilizeMenge").innerHTML = GardenSimulation.fertilizeMenge.toString();
        document.querySelector("#pesticideMenge").innerHTML = GardenSimulation.pestizideMenge.toString();
    }
    GardenSimulation.updateSeedAmount = updateSeedAmount;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=gardensimulation.js.map