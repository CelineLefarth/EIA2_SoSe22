var GardenSimulation;
(function (GardenSimulation) {
    class Melone extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 60;
            this.images = [GardenSimulation.Load.melonS, GardenSimulation.Load.melonM, GardenSimulation.Load.melonB];
            this.image = this.images[0];
            this.type = "seed2";
            this.row = this.row;
            this.collum = this.collum;
            this.finalAge = 90;
            this.age1 = 30;
            this.age2 = 85;
            this.waterLevel1 = 15;
            this.waterLevel2 = 30;
            this.waterLevel3 = 45;
            this.waterLevelMax = 60;
            this.duengerLevel1 = 5;
            this.duengerLevel2 = 10;
            this.duengerLevel3 = 15;
            this.duengerLevelMax = 20;
        }
    }
    Melone.seedamount = 0;
    Melone.price = 11;
    GardenSimulation.Melone = Melone;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Melone.js.map