namespace GardenSimulation {
    export class Field {

        row: number;
        collum: number;
        clearField: boolean = true;
        plant: Plant;

        constructor(_row: number, _collum: number) {
            this.row = _row;
            this.collum = _collum;
        }

        isHit(_mX: number, _mY: number): void {
            if (_mX - 100 < this.row * 100 && _mX - 100 > this.row * 100 - 100 && _mY - 100 < this.collum * 100 && _mY - 100 > this.collum * 100 - 100) {
                switch (Player.task) {
                    case TASK.SEED1:
                        if (this.clearField == true && Karotte.seedamount >= 0) {
                            plants.push(new Karotte(this.row, this.collum));
                            this.plant = plants[plants.length - 1];
                            this.clearField = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.SEED2:
                        if (this.clearField == true && Melone.seedamount >= 0) {
                            console.log("seed 2");
                            plants.push(new Melone(this.row, this.collum));
                            this.plant = plants[plants.length - 1];
                            this.clearField = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.SEED3:
                        if (this.clearField == true && Radish.seedamount >= 0) {
                            console.log("seed 3");
                            plants.push(new Radish(this.row, this.collum));
                            this.plant = plants[plants.length - 1];
                            this.clearField = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.SEED4:
                        if (this.clearField == true && Salat.seedamount >= 0) {
                            plants.push(new Salat(this.row, this.collum));
                            this.plant = plants[plants.length - 1];
                            this.clearField = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.SEED5:
                        if (this.clearField == true && Sellerie.seedamount >= 0) {
                            plants.push(new Sellerie(this.row, this.collum));
                            this.plant = plants[plants.length - 1];
                            this.clearField = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.HARVEST:               
                        if (this.clearField == false) {
                            if (this.plant.age >= this.plant.age2 && this.plant.age <= this.plant.finalAge) {
                                
                                plants.splice(plants.findIndex((e) => e == this.plant), 1);
                                money = money + this.plant.verkaufPrice;
                                console.log(this.plant);
                                this.clearField = true;
                                //timer();
                                startTimerShop();
                            }
                        }
                        break;
                    case TASK.WATER:
                        if (this.clearField == false) {
                            console.log("water");
                            this.plant.plantWatering();
                        }
                        break;
                    case TASK.FERTILIZE:
                        if (fertilizeMenge > 0)
                        if (this.clearField == false) {
                            console.log("fertilize");
                            this.plant.plantDuengering();
                            fertilizeMenge--;
                            updateSeedAmount();
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
                for (let plant of plants) {
                    plant.draw();
                }
            }
        }
        
        draw(): void {
            cr2.resetTransform();
            cr2.translate(this.row * 100, this.collum * 100);
            cr2.fillStyle = "#497550";
            cr2.fillRect(5, 5, 95, 95);
        }
    }
}