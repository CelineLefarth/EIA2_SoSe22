namespace GardenSimulation {
    export class Radish extends Plant {
        static seedamount: number = 0;
        static price: number = 2;
        verkaufPrice: number = 10;
        priceNeu: number;
        

        images: HTMLImageElement[] = [Load.radishS, Load.radishM, Load.radishB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed3";
        row: number = this.row;
        collum: number = this.collum;
        finalAge: number = 70;
        age1: number = 24;
        age2: number = 65;

        waterLevel1: number = 14;
        waterLevel2: number = 28;
        waterLevel3: number = 42;
        waterLevelMax: number = 56;

        duengerLevel1: number = 10;
        duengerLevel2: number = 20;
        duengerLevel3: number = 30;
        duengerLevelMax: number = 40;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }

    
}