 namespace GardenSimulation {

    export enum TASK {
        SEED1,
        SEED2,
        SEED3,
        SEED4,
        SEED5,
        HARVEST,
        WATER,
        FERTILIZE,
        PESTICIDE
    }

    export class Player {
        
        static task: TASK;

        //Aktionen
        plant(_value: string): void {
            if (_value == "seed1") {
                Player.task = TASK.SEED1;
                Karotte.seedamount --;
            }
            if (_value == "seed2") {
                Player.task = TASK.SEED2;
                Melone.seedamount--;
            }
            if (_value == "seed3") {
                Player.task = TASK.SEED3;
                Radish.seedamount--;
            }
            if (_value == "seed4") {
                Player.task = TASK.SEED4;
                Salat.seedamount--;
            }
            if (_value == "seed5") {
                Player.task = TASK.SEED5;
                Sellerie.seedamount--;
            }

            }
            harvest(): void {
                Player.task = TASK.HARVEST;
            }
            water(): void {
                Player.task = TASK.WATER;
            }
            fertilize(): void {
                Player.task = TASK.FERTILIZE;
            }
            pesticide(): void {
                Player.task = TASK.PESTICIDE;
            }

    
        buy (_value: string): void {
            if (_value == "buyKarotten" && money >= Karotte.priceNeu) {
                money = money - Karotte.priceNeu;
                Karotte.seedamount++;
            }
            if (_value == "buyMelone" && money >= Melone.priceNeu) {
                money = money - Melone.priceNeu;
                Melone.seedamount++;
            }
            if (_value == "buyRadieschen" && money >= Radish.priceNeu) {
                money = money - Radish.priceNeu;
                Radish.seedamount++;
            }
            if (_value == "buySalat" && money >= Salat.priceNeu) {
                money = money - Salat.priceNeu;
                Salat.seedamount++;
            }
            if (_value == "buySellerie" && money >= Sellerie.priceNeu) {
                money = money - Sellerie.priceNeu;
                Sellerie.seedamount++;
            }
            updateSeedAmount();
        }

    }

}