namespace L09_1_OldMacDonaldsFarm {

    window.addEventListener("load", handleLoad);
    
    let animaltext: HTMLDivElement;

    function handleLoad(_event: Event): void {
        let cow: Animal = new Animal("Sara", "cow", "muh", "straw", 5, 500);
        let chicken: Animal = new Animal("Christa", "chicken", "eckeck", "corn", 1, 40);
        let dog: Animal = new Animal("Peter", "dog", "wuff", "dogfood", 1, 10);
        let pig: Animal = new Animal("Ludolf", "pig", "oink", "grass", 2, 50);
        let horse: Animal = new Animal("Sara", "cow", "hüh", "oats", 2, 30); 

        let animals: Animal[] = [cow, chicken, dog, pig, horse];

        for (let index = 0; index < Animal.length; index++) {
            let verse: HTMLParagraphElement = document.createElement("p");
            animaltext = document.querySelector("#animaltext");
            verse.innerHTML = animals[index].lyrics();
            animaltext.appendChild(verse);
            
        }
    }
}

