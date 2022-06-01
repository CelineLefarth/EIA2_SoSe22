namespace L09_1_OldMacDonaldsFarm {

    window.addEventListener("load", handleLoad);
    
    let animaltext: HTMLDivElement;

    function handleLoad(_event: Event): void {
        //let cow: Cow = new Cow;
                
        let animals: Animal[] = [new Cow];
        

        for (let index = 0; index <= animals.length; index++) {

            animaltext = document.querySelector("#animaltext");

            let verse: HTMLParagraphElement = document.createElement("p");
            verse.innerHTML = animals[index].lyrics();
            animaltext.appendChild(verse);

            let verse2: HTMLParagraphElement = document.createElement("p");
            verse2.innerHTML = animals[index].specialFeature();
            animaltext.appendChild(verse2);

            console.log(animals[index]);
            
        }
    }
}

