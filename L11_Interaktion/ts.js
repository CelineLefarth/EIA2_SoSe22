var L11;
(function (L11) {
    L11.rotate = 0;
    let move = [];
    let imageData;
    let canvas;
    let currentHitbox = 0;
    L11.picked = false;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        canvas = document.querySelector("canvas");
        L11.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBackground();
        canvas.addEventListener("click", (e) => { wantToClickOnHitbox(e); });
        createSchiff();
        imageData = L11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animation();
    }
    function createBackground() {
        L11.drawBackground();
    }
    function createSchiff() {
        move.push(new L11.Boot({ x: L11.crc2.canvas.width * .9, y: L11.crc2.canvas.height * .23 }, { x: 0.7, y: 0.8 }));
        move.push(new L11.Boot({ x: L11.crc2.canvas.width * 0.2, y: L11.crc2.canvas.height * .34 }, { x: 0.7, y: 0.8 }));
    }
    function wantToClickOnHitbox(_e) {
        L11.picked = false;
        const rect = canvas.getBoundingClientRect();
        L11.mouseX = _e.clientX - rect.left - (L11.cw / 2);
        L11.mouseY = -1 * (_e.clientY - rect.top) + (L11.ch / 2);
        console.log(L11.mouseX, L11.mouseY);
        currentHitbox = 0;
        for (let moves = L11.Moveable.length - 1; moves >= 0; moves--) {
            L11.Moveable[moves].interact(L11.mouseX, L11.mouseY);
            currentHitbox++;
        }
    }
    function animation() {
        requestAnimationFrame(animation);
        L11.crc2.clearRect(0, 0, L11.crc2.canvas.width, L11.crc2.canvas.height);
        L11.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < move.length; index++) {
            move[index].update();
            move[index].draw();
        }
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=ts.js.map