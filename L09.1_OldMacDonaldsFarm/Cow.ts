namespace L09_1_OldMacDonaldsFarm {
    export class Cow extends Animal {
        cowSpecialFeature: string

    constructor() {
        super("Sarah", "cow", "muh", "straw", 5, 500);
        this.cowSpecialFeature = "I make milk"
    } 


    specialFeature() {
        return 'My Special Feature is ' + this.cowSpecialFeature
    }
}
}