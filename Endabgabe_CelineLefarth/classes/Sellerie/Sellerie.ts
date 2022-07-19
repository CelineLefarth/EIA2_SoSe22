namespace GardenSimulation {
    export class Sellerie extends Plant {
        static seedamount: number = 0;
        static price: number = 3;
        verkaufPrice: number = 50;
        priceNeu: number; 
        
        images: HTMLImageElement[] = [Load.sellerieS, Load.sellerieM, Load.sellerieB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed5";
        row: number = this.row;
        collum: number = this.collum;
        finalAge: number = 60;
        age1: number = 26;
        age2: number = 55;

        waterLevel1: number = 10;
        waterLevel2: number = 20;
        waterLevel3: number = 30;
        waterLevelMax: number = 40;

        duengerLevel1: number = 5;
        duengerLevel2: number = 15;
        duengerLevel3: number = 25;
        duengerLevelMax: number = 35;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }
}