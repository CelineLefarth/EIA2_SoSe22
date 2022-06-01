var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    class Cow extends L09_1_OldMacDonaldsFarm.Animal {
        cowSpecialFeature;
        constructor() {
            super("Sarah", "cow", "muh", "straw", 5, 500);
            this.cowSpecialFeature = "I make milk";
        }
        specialFeature() {
            return 'My Special Feature is ' + this.cowSpecialFeature;
        }
    }
    L09_1_OldMacDonaldsFarm.Cow = Cow;
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Cow.js.map