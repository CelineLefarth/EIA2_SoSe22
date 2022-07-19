namespace GardenSimulation {
    export class Salat extends Plant {
        static seedamount: number = 0;
        static price: number = 4;
        verkaufPrice: number = 10;
        priceNeu: number;
        
        images: HTMLImageElement[] = [Load.salatS, Load.salatM, Load.salatB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed4";
        row: number = this.row;
        collum: number = this.collum;
        finalAge: number = 66;
        age1: number = 12;
        age2: number = 60;

        waterLevel1: number = 10;
        waterLevel2: number = 20;
        waterLevel3: number = 30;
        waterLevelMax: number = 40;

        duengerLevel1: number = 15;
        duengerLevel2: number = 30;
        duengerLevel3: number = 45;
        duengerLevelMax: number = 60;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }


}