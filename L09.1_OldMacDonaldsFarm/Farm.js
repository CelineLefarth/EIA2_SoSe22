var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    let animaltext;
    function handleLoad(_event) {
        let cow = new L09_1_OldMacDonaldsFarm.Animal("Sara", "cow", "muh", "straw", 5, 500);
        let chicken = new L09_1_OldMacDonaldsFarm.Animal("Christa", "chicken", "eckeck", "corn", 1, 40);
        let dog = new L09_1_OldMacDonaldsFarm.Animal("Peter", "dog", "wuff", "dogfood", 1, 10);
        let pig = new L09_1_OldMacDonaldsFarm.Animal("Ludolf", "pig", "oink", "grass", 2, 50);
        let horse = new L09_1_OldMacDonaldsFarm.Animal("Sara", "cow", "hüh", "oats", 2, 30);
        let animals = [cow, chicken, dog, pig, horse];
        for (let index = 0; index < L09_1_OldMacDonaldsFarm.Animal.length; index++) {
            let verse = document.createElement("p");
            animaltext = document.querySelector("#animaltext");
            verse.innerHTML = animals[index].lyrics();
            animaltext.appendChild(verse);
        }
    }
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Farm.js.map