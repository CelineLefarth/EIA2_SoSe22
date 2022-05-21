var generierteKunst;
(function (generierteKunst) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        generateBackground(crc2);
        generateCirclelines(crc2);
        generateCircles(crc2);
    }
    function generateBackground(crc2) {
        let gradient = crc2.createLinearGradient(0, 400, 90, 100);
        for (var i = 0; i < 2; i++) {
            let randomZahl1 = Math.round(Math.random() * 255);
            let randomZahl2 = Math.round(Math.random() * 255);
            let randomZahl3 = Math.round(Math.random() * 255);
            gradient.addColorStop(i, 'rgb(' + randomZahl1 + ',' +
                randomZahl2 + ',' + randomZahl3 + ')');
        }
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 600, 600);
    }
    function generateCircles(crc2) {
        let randomBubble1 = Math.round(10 + Math.random() * 40);
        console.log(randomBubble1);
        for (let index = 0; index < randomBubble1; index++) {
            let randomZahl1 = Math.round(Math.random() * 255);
            let randomZahl2 = Math.round(Math.random() * 255);
            let randomZahl3 = Math.round(Math.random() * 255);
            let _X = Math.random() * 620;
            let _Y = 200 + Math.random() * 260;
            let radius = Math.random() * 60;
            crc2.beginPath();
            crc2.arc(_X, _Y, radius, 0, Math.PI * 2);
            crc2.fillStyle = "rgb(" + randomZahl1 + "," + randomZahl2 + "," + randomZahl3 + ")";
            crc2.fill();
            crc2.closePath();
            let randomHalfMoon = Math.round(10 + Math.random() * 20);
        }
    }
    function generateCirclelines(crc2) {
        let randomHalfMoon = Math.round(10 + Math.random() * 400);
        for (let index = 0; index < randomHalfMoon; index++) {
            crc2.beginPath();
            let _X = Math.random() * 620;
            let _Y = Math.random() * 460;
            let radius = Math.random() * 30;
            crc2.arc(_X, _Y, 20, radius, 1.5 * Math.PI);
            crc2.closePath();
            crc2.stroke();
        }
    }
})(generierteKunst || (generierteKunst = {}));
//# sourceMappingURL=script.js.map