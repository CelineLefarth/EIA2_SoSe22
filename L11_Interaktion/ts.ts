namespace L11 {
    
    export let crc2: CanvasRenderingContext2D;
    export let rotate: number = 0;
    let move: Moveable[] = [];
    let imageData: ImageData;
    let canvas: HTMLCanvasElement

    let currentHitbox: number = 0;
    export let picked: boolean = false;
    export let cw: number;
    export let ch: number;
    export let mouseX: number;
    export let mouseY: number;


    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        createBackground();
        canvas.addEventListener("click", (e) => { wantToClickOnHitbox(e); });
        
        createSchiff();
        
        imageData =  crc2.getImageData(0, 0, canvas.width, canvas.height);
        animation();
    }   

    function createBackground(): void {
        drawBackground();
        
    }

    function createSchiff (): void {
        move.push(<Moveable> new Boot({ x: crc2.canvas.width * .9, y: crc2.canvas.height * .23 }, {x: 0.7, y: 0.8}, mouseX, mouseY));
        move.push(<Moveable> new Boot({ x: crc2.canvas.width * 0.2, y: crc2.canvas.height * .34 }, {x: 0.7, y: 0.8}, mouseX, mouseY));
    }

    function wantToClickOnHitbox(_e: MouseEvent): void {
        picked = false;
        const rect: DOMRect = canvas.getBoundingClientRect();   
        mouseX = _e.clientX - rect.left - (cw / 2);        
        mouseY = -1 * (_e.clientY - rect.top) + (ch / 2);       
        console.log(mouseX, mouseY);

        currentHitbox = 0;
        for (let moves: number = Moveable.length - 1; moves >= 0; moves--) {
        Moveable[moves].interact(mouseX, mouseY);
        currentHitbox++;
        }

         }


    function animation(): void {
        requestAnimationFrame(animation);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        for (let index: number = 0; index < move.length; index ++) {
            move[index].update();
            move[index].draw(); 
        }
    }
}