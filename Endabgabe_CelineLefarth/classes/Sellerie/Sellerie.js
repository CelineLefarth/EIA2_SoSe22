var GardenSimulation;
(function (GardenSimulation) {
    class Sellerie extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 50;
            this.images = [GardenSimulation.Load.sellerieS, GardenSimulation.Load.sellerieM, GardenSimulation.Load.sellerieB];
            this.image = this.images[0];
            this.type = "seed5";
            this.row = this.row;
            this.collum = this.collum;
            this.finalAge = 60;
            this.age1 = 26;
            this.age2 = 55;
            this.waterLevel1 = 10;
            this.waterLevel2 = 20;
            this.waterLevel3 = 30;
            this.waterLevelMax = 40;
            this.duengerLevel1 = 5;
            this.duengerLevel2 = 15;
            this.duengerLevel3 = 25;
            this.duengerLevelMax = 35;
        }
    }
    Sellerie.seedamount = 0;
    Sellerie.price = 3;
    GardenSimulation.Sellerie = Sellerie;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Sellerie.js.map