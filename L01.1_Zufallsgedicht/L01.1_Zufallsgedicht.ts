namespace Aufgabe01 {

    //Arrays indem sie Wörter gespeichert sind
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikat: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
   

    //For-Schleife zählt herunter von 6 bis 1    
    for (let i = subjekte.length; i >= 1; i--) {
        
        //Gedicht als string, wird durch die Funktion getVerse generiert
        let Gedicht: string = getVerse(subjekte, praedikat, objekte);

        //Ausgabe in der Konsole
        console.log(Gedicht);

                
    }

    function getVerse(_subjekte: string[], _praedikat:string[], _objekte: string[]): string {
       
        //random Zahl generieren
        let wert1: number = Math.floor(Math.random()* _subjekte.length);
        let wert2: number = Math.floor(Math.random()* _praedikat.length);
        let wert3: number = Math.floor(Math.random()* _objekte.length);
        
        //Zahl => Arraywert
        let Wert = _subjekte[wert1] + " " + _praedikat[wert2] + " " + _objekte[wert3];

        //verwendeter string wird aus dem Array gelöscht
        _subjekte.splice(wert1, 1);
        _praedikat.splice(wert2, 1);
        _objekte.splice(wert3, 1);

        return Wert;
    }
    

    

}