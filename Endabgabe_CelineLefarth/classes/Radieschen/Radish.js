var GardenSimulation;
(function (GardenSimulation) {
    class Radish extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 10;
            this.images = [GardenSimulation.Load.radishS, GardenSimulation.Load.radishM, GardenSimulation.Load.radishB];
            this.image = this.images[0];
            this.type = "seed3";
            this.row = this.row;
            this.collum = this.collum;
            this.finalAge = 70;
            this.age1 = 24;
            this.age2 = 65;
            this.waterLevel1 = 14;
            this.waterLevel2 = 28;
            this.waterLevel3 = 42;
            this.waterLevelMax = 56;
            this.duengerLevel1 = 10;
            this.duengerLevel2 = 20;
            this.duengerLevel3 = 30;
            this.duengerLevelMax = 40;
        }
    }
    Radish.seedamount = 0;
    Radish.price = 2;
    GardenSimulation.Radish = Radish;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Radish.js.map