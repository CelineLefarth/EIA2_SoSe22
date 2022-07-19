 namespace GardenSimulation {
    export class Melone extends Plant {
        static seedamount: number = 0;
        static price: number = 11;
        verkaufPrice: number = 60;
        priceNeu: number;

        images: HTMLImageElement[] = [Load.melonS, Load.melonM, Load.melonB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed2";
        row: number = this.row;
        collum: number = this.collum;
        finalAge: number = 90;
        age1: number = 30;
        age2: number = 85;

        waterLevel1: number = 15;
        waterLevel2: number = 30;
        waterLevel3: number = 45;
        waterLevelMax: number = 60;

        duengerLevel1: number = 5;
        duengerLevel2: number = 10;
        duengerLevel3: number = 15;
        duengerLevelMax: number = 20;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }

    
}