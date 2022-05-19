var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    class Animal {
        name;
        animaltype;
        animalsound;
        foodtype;
        foodamount;
        foodration;
        constructor(_name, _animaltype, _animalsound, _foodtype, _foodamount, _foodration) {
            this.name = _name;
            this.animaltype = _animaltype;
            this.animalsound = _animalsound;
            this.foodtype = _foodtype;
            this.foodamount = _foodamount;
            this.foodration = _foodration;
        }
        lyrics() {
            return `${this.name} the ${this.animaltype} <br><br>
            Old McDonald had a farm, E-I-E-I-O! <br> 
            And on his farm he had a ${this.animaltype}, E-I-E-I-O! <br> 
            With a ${this.animalsound} ${this.animalsound} here, And a ${this.animalsound} ${this.animalsound} there! <br>
            Here a ${this.animalsound}, <br>
            There a ${this.animalsound}, <br>
            Everywhere a ${this.animalsound} ${this.animalsound}! <br>
            Old McDonald had a farm, E-I-E-I-O! <br><br>
            (left ${this.foodration - this.foodamount} kg ${this.foodtype}.)`;
        }
    }
    L09_1_OldMacDonaldsFarm.Animal = Animal;
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=script.js.map