namespace GardenSimulation {
    export class Karotte extends Plant {
        static price: number = 5;
        static seedamount: number = 0;
        verkaufPrice: number = 35;
        priceNeu: number;
        
        
        images: HTMLImageElement[] = [Load.carotS, Load.carotM, Load.carotB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed1";
        row: number = this.row;
        collum: number = this.collum;
        finalAge: number = 50;
        age1: number = 23;
        age2: number = 45;

        waterLevel1: number = 10;
        waterLevel2: number = 20;
        waterLevel3: number = 30;
        waterLevelMax: number = 40;

        duengerLevel1: number = 12;
        duengerLevel2: number = 24;
        duengerLevel3: number = 36;
        duengerLevelMax: number = 48;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }

    }

    
}