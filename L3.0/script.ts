namespace Memory {
    window.addEventListener("load", function(){

        const startButton : HTMLButtonElement = document.querySelector("#start");
        const gamesettings: HTMLDivElement = document.querySelector("#gamesettings");
        const pairsInput = document.querySelector("#pairs") as HTMLInputElement;
        let cardArray: number[] = createPairs();  
        
        

        startButton.addEventListener("click", createPlayfield)
    
        function createPlayfield (){
            gamesettings.setAttribute("style", "display:none")

            // randomizePairs(cardArray);
           
            


        }

        //Memorypaare werden erstellt
        function createPairs () {
            let cardArray = []       
        
                for (let index = 1; index <= pairsInput.valueAsNumber; index++) {
                    let cardvalue = index;
                    console.log(cardvalue);
                    
                    cardArray.push(cardvalue)            
                }

        return cardArray;            
        }

        //Memorypaare
        // function randomizePairs(cardArray){
        //     for (let i = 0; i < 1000; i++) {
        //         //Erstellen einer zufälligen Zahl
        //         let location1 = Math.floor((Math.random() * cardArray.length));
        //         let location2 = Math.floor((Math.random() * cardArray.length));
        //         let tmp = cardArray[location1];
    
        //         cardArray[location1] = cardArray[location2];
        //         cardArray[location2] = tmp;
        //         }
        //     };
 
    })
}