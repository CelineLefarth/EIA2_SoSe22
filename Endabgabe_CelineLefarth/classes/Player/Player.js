var GardenSimulation;
(function (GardenSimulation) {
    let TASK;
    (function (TASK) {
        TASK[TASK["SEED1"] = 0] = "SEED1";
        TASK[TASK["SEED2"] = 1] = "SEED2";
        TASK[TASK["SEED3"] = 2] = "SEED3";
        TASK[TASK["SEED4"] = 3] = "SEED4";
        TASK[TASK["SEED5"] = 4] = "SEED5";
        TASK[TASK["HARVEST"] = 5] = "HARVEST";
        TASK[TASK["WATER"] = 6] = "WATER";
        TASK[TASK["FERTILIZE"] = 7] = "FERTILIZE";
        TASK[TASK["PESTICIDE"] = 8] = "PESTICIDE";
    })(TASK = GardenSimulation.TASK || (GardenSimulation.TASK = {}));
    class Player {
        //Aktionen
        plant(_value) {
            if (_value == "seed1") {
                Player.task = TASK.SEED1;
                GardenSimulation.Karotte.seedamount--;
            }
            if (_value == "seed2") {
                Player.task = TASK.SEED2;
                GardenSimulation.Melone.seedamount--;
            }
            if (_value == "seed3") {
                Player.task = TASK.SEED3;
                GardenSimulation.Radish.seedamount--;
            }
            if (_value == "seed4") {
                Player.task = TASK.SEED4;
                GardenSimulation.Salat.seedamount--;
            }
            if (_value == "seed5") {
                Player.task = TASK.SEED5;
                GardenSimulation.Sellerie.seedamount--;
            }
        }
        harvest() {
            Player.task = TASK.HARVEST;
        }
        water() {
            Player.task = TASK.WATER;
        }
        fertilize() {
            Player.task = TASK.FERTILIZE;
        }
        pesticide() {
            Player.task = TASK.PESTICIDE;
        }
        buy(_value) {
            if (_value == "buyKarotten" && GardenSimulation.money >= GardenSimulation.Karotte.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Karotte.priceNeu;
                GardenSimulation.Karotte.seedamount++;
            }
            if (_value == "buyMelone" && GardenSimulation.money >= GardenSimulation.Melone.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Melone.priceNeu;
                GardenSimulation.Melone.seedamount++;
            }
            if (_value == "buyRadieschen" && GardenSimulation.money >= GardenSimulation.Radish.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Radish.priceNeu;
                GardenSimulation.Radish.seedamount++;
            }
            if (_value == "buySalat" && GardenSimulation.money >= GardenSimulation.Salat.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Salat.priceNeu;
                GardenSimulation.Salat.seedamount++;
            }
            if (_value == "buySellerie" && GardenSimulation.money >= GardenSimulation.Sellerie.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Sellerie.priceNeu;
                GardenSimulation.Sellerie.seedamount++;
            }
            GardenSimulation.updateSeedAmount();
        }
    }
    GardenSimulation.Player = Player;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Player.js.map