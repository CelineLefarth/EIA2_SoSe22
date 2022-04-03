namespace EventInspector {

    window.addEventListener("load", handleLoad);
    
    
    function handleLoad (_event: Event): void{

        let body: HTMLElement = <HTMLElement>document.querySelector("body");
        let div1: HTMLDivElement = <HTMLDivElement>document.querySelector("#div1");
        let div2: HTMLDivElement = <HTMLDivElement>document.querySelector("#div2");

        body.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div2.addEventListener("keyup", logInfo);
        div2.addEventListener("click", logInfo);
    }

    function setInfoBox (_event: MouseEvent) : void {
        
        let x: number = _event.pageX + 10;
        let y: number = _event.pageY + 10;

        let info : HTMLSpanElement = <HTMLSpanElement>document.querySelector("#span1")

        info.style.left = x + "px";
        info.style.top = y + "px";

        document.querySelector("#span1").innerHTML = String("coordinates: " + _event.pageX + "px x " + _event.pageY + "px " + "target: "+ _event.target );
    }

    function logInfo (_event: Event) : void {
        console.log("Type: " +_event.type);
        console.log("Target: " +_event.target);
        console.log("Current Target: " + _event.currentTarget);
        console.log("Event Phase: " +_event.eventPhase);
    }
}