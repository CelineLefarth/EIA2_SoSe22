var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    let animaltext;
    function handleLoad(_event) {
        let cow = new L09_1_OldMacDonaldsFarm.Cow;
        let animals = [cow];
        for (let index = 0; index <= animals.length; index++) {
            animaltext = document.querySelector("#animaltext");
            let verse = document.createElement("p");
            verse.innerHTML = animals[index].lyrics();
            animaltext.appendChild(verse);
            let verse2 = document.createElement("p");
            verse2.innerHTML = animals[index].specialFeature();
            animaltext.appendChild(verse2);
        }
    }
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Farm.js.map