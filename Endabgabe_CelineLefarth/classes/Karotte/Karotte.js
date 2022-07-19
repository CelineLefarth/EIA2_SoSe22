var GardenSimulation;
(function (GardenSimulation) {
    class Karotte extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 35;
            this.images = [GardenSimulation.Load.carotS, GardenSimulation.Load.carotM, GardenSimulation.Load.carotB];
            this.image = this.images[0];
            this.type = "seed1";
            this.row = this.row;
            this.collum = this.collum;
            this.finalAge = 50;
            this.age1 = 23;
            this.age2 = 45;
            this.waterLevel1 = 10;
            this.waterLevel2 = 20;
            this.waterLevel3 = 30;
            this.waterLevelMax = 40;
            this.duengerLevel1 = 12;
            this.duengerLevel2 = 24;
            this.duengerLevel3 = 36;
            this.duengerLevelMax = 48;
        }
    }
    Karotte.price = 5;
    Karotte.seedamount = 0;
    GardenSimulation.Karotte = Karotte;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Karotte.js.map