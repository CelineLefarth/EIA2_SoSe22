var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let body = document.querySelector("body");
        let div1 = document.querySelector("#div1");
        let div2 = document.querySelector("#div2");
        document.addEventListener("mousemove", setInfoBox);
        body.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div2.addEventListener("keyup", logInfo);
        div2.addEventListener("click", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.pageX + 10;
        let y = _event.pageY + 10;
        let info = document.querySelector("#span1");
        info.style.left = x + "px";
        info.style.top = y + "px";
        document.querySelector("#span1").innerHTML = String("coordinates: " + _event.pageX + "px x " + _event.pageY + "px " + "target: " + _event.target);
    }
    function logInfo(_event) {
        console.log("Type: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("Current Target: " + _event.currentTarget);
        console.log("Event Phase: " + _event.eventPhase);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map