namespace L09_1_OldMacDonaldsFarm {
    export class Animal {
        
        name: string;
        animaltype: string;
        animalsound:string;
        foodtype: string;
        foodamount: number;
        foodration: number;
        

        constructor(_name: string, _animaltype: string, _animalsound: string, _foodtype: string, _foodamount: number, _foodration: number) {
            
            this.name = _name;
            this.animaltype = _animaltype;
            this.animalsound = _animalsound;
            this.foodtype = _foodtype;
            this.foodamount = _foodamount;
            this.foodration = _foodration;
        
            
        }

        
        lyrics(): string {
            
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
}

    

    
