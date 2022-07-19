namespace GardenSimulation {

    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let cr2: CanvasRenderingContext2D;
    export let fields: Field[] = [];
    export let plants: Plant[] = [];
    export let player: Player = new Player();
    export let mX: number;
    export let mY: number;
    export let time: number = 0;
    export let timeanimation: number = 0;
    export let allBugs: Bug[] = [];

    //Buttons Kosten und Mengen Werte
    export let fertilizeMenge: number = 0;
    export let pestizideMenge: number = 0;

    let fertilizePreis: number = 2;
    let pestizidePreis: number = 2;

    let fertilizePreisNeu: number;
    let pestizidePreisNeu: number;

    let gameField: HTMLDivElement;

    let formValues: FormData;
    export let money: number;
    let moneyChange: number;

    function handleLoad(): void {
        
        Load.loading();

        let assets: HTMLDivElement = document.querySelector("#assets");
        assets.setAttribute("style", "display: none");

        gameField = document.querySelector("#gameField");
        gameField.style.visibility = ("hidden");

        let startButton: HTMLButtonElement = document.querySelector("#startButton");
        startButton.addEventListener("click", buildField);
    }

    //Spielfeld wird geladen
    function buildField(): void {
        
        getFormSettings();
        update();
        createGameButtons();
        createGardenField(); 
        startTimer();
        startTimerShop();
        
        gameField.style.visibility = ("visible");

        let formData: HTMLDivElement = document.querySelector("#gamesettings");
        formData.setAttribute("style", "display:none");
    }

    //erstellen einzelner Gartenfelder
    function createGardenField(): void {
        for (let i: number = 0; i < 6; i++) {
            for (let j: number = 0; j < 8; j++) {
                fields.push(new Field(j, i));
            }
        }
        for (let field of fields) {
            field.draw();
        }
    }

    //Marktbuttons, Canvas und ClickEvent werden geladen 
    function createGameButtons(): void {

        //Canvasgröße wird
        canvas = document.querySelector("canvas");
        cr2 = canvas.getContext("2d");
        canvas.height = 600;
        canvas.width = 800;

        canvas.addEventListener("click", (evt) => {getMousePosition(evt); });

        let buyBtn1: HTMLInputElement = document.querySelector("#buyKarotten");
        let buyBtn2: HTMLInputElement = document.querySelector("#buyMelone");
        let buyBtn3: HTMLInputElement = document.querySelector("#buyRadieschen");
        let buyBtn4: HTMLInputElement = document.querySelector("#buySalat");
        let buyBtn5: HTMLInputElement = document.querySelector("#buySellerie");
        let buyfertilize: HTMLInputElement = document.querySelector("#buyFertilize");
        let buypestizide: HTMLInputElement = document.querySelector("#buyPesticide");

        //Event Listener, Value wird weitergegeben an die Klasse Player
        buyBtn1.addEventListener("click", () => player.buy(buyBtn1.value));
        buyBtn2.addEventListener("click", () => player.buy(buyBtn2.value));
        buyBtn3.addEventListener("click", () => player.buy(buyBtn3.value));
        buyBtn4.addEventListener("click", () => player.buy(buyBtn4.value));
        buyBtn5.addEventListener("click", () => player.buy(buyBtn5.value));

        //Gekaufte Menge wird genneriert und angezeigt
        buyfertilize.addEventListener("click", stackfertilize);
        buypestizide.addEventListener("click", stackpesticide);

        let seedButton1: HTMLInputElement = document.querySelector("#seed1");
        let seedButton2: HTMLInputElement = document.querySelector("#seed2");
        let seedButton3: HTMLInputElement = document.querySelector("#seed3");
        let seedButton4: HTMLInputElement = document.querySelector("#seed4");
        let seedButton5: HTMLInputElement = document.querySelector("#seed5");
        let harvestButton: HTMLInputElement = document.querySelector("#harvest");
        let waterButton: HTMLInputElement = document.querySelector("#water");
        let fertilizeButton: HTMLInputElement = document.querySelector("#fertilize");
        let pesticideButton: HTMLInputElement = document.querySelector("#pesticide");

        seedButton1.addEventListener("click", () => player.plant(seedButton1.value) );
        seedButton2.addEventListener("click", () => player.plant(seedButton2.value) );
        seedButton3.addEventListener("click", () => player.plant(seedButton3.value) );
        seedButton4.addEventListener("click", () => player.plant(seedButton4.value) );
        seedButton5.addEventListener("click", () => player.plant(seedButton5.value) );

        harvestButton.addEventListener("click", player.harvest);
        waterButton.addEventListener("click", player.water);
        fertilizeButton.addEventListener("click", player.fertilize);
        pesticideButton.addEventListener("click", player.pesticide);
    }

    function getMousePosition(_evt: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        mX = _evt.clientX - rect.left;
        mY = _evt.clientY - rect.top;
        for (let field of fields) {
            field.isHit(mX, mY);
        }
    }

    function getFormSettings(): void {
        formValues = new FormData(document.forms[0]);
        money = Number(formValues.get("startmoney"));
        moneyChange = Number(formValues.get("schwankung"));
    }

    function startTimer(): void {
        setInterval(timer, 1000);
    }

    export function timer(): void {
        time ++;
        console.log(time);

        for (let field of fields) {
            field.draw();
        }
        
        cr2.resetTransform();
        for (let plant of plants) {  
            plant.grow();
            plant.plantNeedsWater(); 
            plant.plantNeedsDuenger();
            plant.draw();
            random(plant);
        }
        for (let pest of allBugs) {
            pest.draw();
        }
        document.querySelector("#money").innerHTML = "Money: " + money + " €";
    }

    function random(_plant: Plant): void {
        let randomEvent: number = Math.random() * 40;
        if (randomEvent < 2) {
            _plant.createBug();
        }
    }

    export function startTimerShop(): void {
        setInterval(update, 3000);
    }

    function stackfertilize (): void {
        money = money - fertilizePreisNeu;
        fertilizeMenge++;
        updateSeedAmount();

    }
    
    function stackpesticide (): void {
        money = money - pestizidePreisNeu;
        pestizideMenge++;
        updateSeedAmount();
    }

    function update (): void {
        Karotte.priceNeu = Karotte.price + (Math.floor(Math.random() * moneyChange));
        Melone.priceNeu = Melone.price + (Math.floor(Math.random() * moneyChange));
        Radish.priceNeu = Radish.price + (Math.floor(Math.random() * moneyChange));
        Salat.priceNeu = Salat.price + (Math.floor(Math.random() * moneyChange));
        Sellerie.priceNeu = Sellerie.price + (Math.floor(Math.random() * moneyChange));
        fertilizePreisNeu = fertilizePreis + (Math.floor(Math.random() * moneyChange));
        pestizidePreisNeu = pestizidePreis + (Math.floor(Math.random() * moneyChange));
        updatePrice();
    }

    function updatePrice (): void {
        document.querySelector("#karottePrice").innerHTML = Karotte.priceNeu.toString() + "€";
        document.querySelector("#melonePrice").innerHTML = Melone.priceNeu.toString() + "€";
        document.querySelector("#radischenPrice").innerHTML = Radish.priceNeu.toString() + "€";
        document.querySelector("#salatPrice").innerHTML = Salat.priceNeu.toString() + "€";
        document.querySelector("#selleriePrice").innerHTML = Sellerie.priceNeu.toString() + "€";
        document.querySelector("#fertilizePrice").innerHTML = fertilizePreisNeu.toString() + "€";
        document.querySelector("#pesticidePrice").innerHTML = pestizidePreisNeu.toString() + "€";
    }

    export function getRandomInt(_min: number, _max: number): number {
        let min: number = Math.ceil(_min);
        let max: number = Math.floor(_max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    export function updateSeedAmount(): void {
        document.querySelector("#karotteMenge").innerHTML = Karotte.seedamount.toString();
        document.querySelector("#meloneMenge").innerHTML = Melone.seedamount.toString();
        document.querySelector("#radieschenMenge").innerHTML = Radish.seedamount.toString();
        document.querySelector("#salatMenge").innerHTML = Salat.seedamount.toString();
        document.querySelector("#sellerieMenge").innerHTML = Sellerie.seedamount.toString();
        document.querySelector("#fertilizeMenge").innerHTML = fertilizeMenge.toString();
        document.querySelector("#pesticideMenge").innerHTML = pestizideMenge.toString();

    }

}