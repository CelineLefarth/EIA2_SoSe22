var GardenSimulation;
(function (GardenSimulation) {
    class Field {
        constructor(_row, _collum) {
            this.clearField = true;
            this.row = _row;
            this.collum = _collum;
        }
        isHit(_mX, _mY) {
            if (_mX - 100 < this.row * 100 && _mX - 100 > this.row * 100 - 100 && _mY - 100 < this.collum * 100 && _mY - 100 > this.collum * 100 - 100) {
                switch (GardenSimulation.Player.task) {
                    case GardenSimulation.TASK.SEED1:
                        if (this.clearField == true && GardenSimulation.Karotte.seedamount >= 0) {
                            GardenSimulation.plants.push(new GardenSimulation.Karotte(this.row, this.collum));
                            this.plant = GardenSimulation.plants[GardenSimulation.plants.length - 1];
                            this.clearField = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.SEED2:
                        if (this.clearField == true && GardenSimulation.Melone.seedamount >= 0) {
                            console.log("seed 2");
                            GardenSimulation.plants.push(new GardenSimulation.Melone(this.row, this.collum));
                            this.plant = GardenSimulation.plants[GardenSimulation.plants.length - 1];
                            this.clearField = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.SEED3:
                        if (this.clearField == true && GardenSimulation.Radish.seedamount >= 0) {
                            console.log("seed 3");
                            GardenSimulation.plants.push(new GardenSimulation.Radish(this.row, this.collum));
                            this.plant = GardenSimulation.plants[GardenSimulation.plants.length - 1];
                            this.clearField = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.SEED4:
                        if (this.clearField == true && GardenSimulation.Salat.seedamount >= 0) {
                            GardenSimulation.plants.push(new GardenSimulation.Salat(this.row, this.collum));
                            this.plant = GardenSimulation.plants[GardenSimulation.plants.length - 1];
                            this.clearField = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.SEED5:
                        if (this.clearField == true && GardenSimulation.Sellerie.seedamount >= 0) {
                            GardenSimulation.plants.push(new GardenSimulation.Sellerie(this.row, this.collum));
                            this.plant = GardenSimulation.plants[GardenSimulation.plants.length - 1];
                            this.clearField = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.HARVEST:
                        if (this.clearField == false) {
                            if (this.plant.age >= this.plant.age2 && this.plant.age <= this.plant.finalAge) {
                                GardenSimulation.plants.splice(GardenSimulation.plants.findIndex((e) => e == this.plant), 1);
                                GardenSimulation.money = GardenSimulation.money + this.plant.verkaufPrice;
                                console.log(this.plant);
                                this.clearField = true;
                                //timer();
                                GardenSimulation.startTimerShop();
                            }
                        }
                        break;
                    case GardenSimulation.TASK.WATER:
                        if (this.clearField == false) {
                            console.log("water");
                            this.plant.plantWatering();
                        }
                        break;
                    case GardenSimulation.TASK.FERTILIZE:
                        if (GardenSimulation.fertilizeMenge > 0)
                            if (this.clearField == false) {
                                console.log("fertilize");
                                this.plant.plantDuengering();
                                GardenSimulation.fertilizeMenge--;
                                GardenSimulation.updateSeedAmount();
                            }
                        break;
                    // case TASK.PESTICIDE:
                    //     if (this.clearField == false) {
                    //         console.log("pesticide");
                    //         this.plant.killBug();
                    //     }
                    //     break;
                }
                this.draw();
                for (let plant of GardenSimulation.plants) {
                    plant.draw();
                }
            }
        }
        draw() {
            GardenSimulation.cr2.resetTransform();
            GardenSimulation.cr2.translate(this.row * 100, this.collum * 100);
            GardenSimulation.cr2.fillStyle = "#497550";
            GardenSimulation.cr2.fillRect(5, 5, 95, 95);
        }
    }
    GardenSimulation.Field = Field;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Field.js.map