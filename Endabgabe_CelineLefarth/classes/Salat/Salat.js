var GardenSimulation;
(function (GardenSimulation) {
    class Salat extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 10;
            this.images = [GardenSimulation.Load.salatS, GardenSimulation.Load.salatM, GardenSimulation.Load.salatB];
            this.image = this.images[0];
            this.type = "seed4";
            this.row = this.row;
            this.collum = this.collum;
            this.finalAge = 66;
            this.age1 = 12;
            this.age2 = 60;
            this.waterLevel1 = 10;
            this.waterLevel2 = 20;
            this.waterLevel3 = 30;
            this.waterLevelMax = 40;
            this.duengerLevel1 = 15;
            this.duengerLevel2 = 30;
            this.duengerLevel3 = 45;
            this.duengerLevelMax = 60;
        }
    }
    Salat.seedamount = 0;
    Salat.price = 4;
    GardenSimulation.Salat = Salat;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Salat.js.map