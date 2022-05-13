namespace L08_2_StrandCanvas {

    window.addEventListener("load", handleLoad);

    function handleLoad() {

        let context = document.querySelector("canvas").getContext("2d");

        var render = function() {

        context.canvas.width = document.documentElement.clientWidth * 0.5;
        context.canvas.height = document.documentElement.clientHeight * 0.5;
        
        context.fillStyle = "#add8e6";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        Wasser(context);
        Strand(context);

        Wolke(context, 0.002, 0.002); //Wolke1
        Wolke(context, 0.4, 0.08); //Wolke2
        Wolke(context, 0.8, 0.05); //Wolke3

        Schwimmer(context, 0.8, 0.25); //Schwimmer1
        Schwimmer(context, 0.3, 0.35); //Schwimmer2

        Boot(context, 0.04, 0.2); //Boot1
        Boot(context, 0.55, 0.16); //Boot2 
 
        Strandbesucher(context, 0.7, 0.6); //Besucher1
        Strandbesucher(context, 0.3, 0.5); //Besucher2

        Birds(context, 0.2, 0.15); //Vogel1
        Birds(context, 0.4, 0.03); //Vogel2
        Birds(context, 0.8, 0.05); //Vogel3

        };

        window.addEventListener("resize", render);
        render();
    }
    
    function Wasser(context) {  

        context.fillStyle = "#000088";
        context.fillRect(0, context.canvas.height*0.2, context.canvas.width, context.canvas.height*0.8);
    }
    
    function Strand(context) { 
           
        context.fillStyle = "#c2b280";
        context.fillRect(0, context.canvas.height*0.5, context.canvas.width, context.canvas.height*0.5);
    }

    function Wolke(context, _X:number, _Y:number){
        let scale: number = ((context.canvas.width*0.3)/1000);
        console.log(scale);

        context.save();
        
        context.translate(context.canvas.width*_X,context.canvas.height*_Y);
        context.scale(scale, scale);
            context.beginPath();
            context.moveTo(170, 80);
            context.bezierCurveTo(130, 100, 130, 150, 230, 150);
            context.bezierCurveTo(250, 180, 320, 180, 340, 150);
            context.bezierCurveTo(420, 150, 420, 120, 390, 100);
            context.bezierCurveTo(430, 40, 370, 30, 340, 50);
            context.bezierCurveTo(320, 5, 250, 20, 250, 50);
            context.bezierCurveTo(200, 5, 150, 20, 170, 80);
            context.closePath();
            context.lineWidth = 5;
            context.fillStyle = '#ffffff';
            context.fill();
            context.strokeStyle = '#ffffff';
            context.stroke();

        context.restore();
    }

    function Schwimmer(context, _X:number, _Y:number) {

        let scale: number = ((context.canvas.width)/1000);
        console.log(scale);

        context.save();

        context.translate(context.canvas.width*_X,context.canvas.height*_Y);
        context.scale(scale, scale);

        context.beginPath();
            context.arc(109, 45, 9, 0, Math.PI * 2, true);
            context.fillStyle = '#ff0000';
            context.strokeStyle = '#ff0000';
            context.fill();
            context.stroke();

        context.beginPath();            
            context.moveTo(60, 60);
            context.bezierCurveTo(60,60,100,30, 140,50);
            context.bezierCurveTo(140, 50, 125, 45, 110, 55);
            context.lineTo(110,60);
            context.closePath();
            
            context.fillStyle = '#ff8661';
            context.fill();
            context.strokeStyle = '#ff8661';
            context.stroke();

        context.beginPath();
            context.moveTo(40, 60);
            context.lineTo(140, 60);
            context.strokeStyle = '#ffffff';
            context.lineWidth = 3;
            context.stroke();

        context.restore();
        context.save();
    }
    
    function Boot(context, _X:number, _Y:number) {
        let scale: number = ((context.canvas.width*2)/1000);
        console.log(scale);

        context.save();

        context.translate(context.canvas.width*_X,context.canvas.height*_Y);
        context.scale(scale, scale);

        context.beginPath();
            context.moveTo(10, 50);
            context.lineTo(60,50);
            context.lineTo(70, 40);
            context.lineTo(0, 40);
            context.closePath();
            context.moveTo(35,40);
            context.lineTo(35,0);

            context.lineWidth = 1.5;
            context.strokeStyle = '#a52a2a';
            context.fillStyle = "#a52a2a"
            context.fill();
            context.stroke(); 
            
        context.beginPath();
            context.moveTo(0,50);
            context.lineTo(70,50);
            context.strokeStyle = '#ffffff';
            context.lineWidth = 3;
            context.stroke();

        context.beginPath();
            context.moveTo(35,0);
            context.lineTo(55,30);
            context.lineTo(15, 30);
            context.closePath();
            context.strokeStyle = '#ffffff';
            context.fillStyle = "#ffffff";
            context.lineWidth = 3;
            context.fill();
            context.stroke();
        
        context.restore();

    }

    function Strandbesucher(context, _X:number, _Y:number) {

        let scale: number = ((context.canvas.width*2)/1000);
        console.log(scale);

        context.save();

        context.translate(context.canvas.width*_X,context.canvas.height*_Y);
        context.scale(scale, scale);

        context.beginPath();
            context.moveTo(10,70);
            context.lineTo(60,70);
            context.lineTo(50, 60);
            context.lineTo(20, 60);
            context.closePath();
            context.strokeStyle = '#ff0000';
            context.fillStyle = "#ff0000";
            context.fill();
            context.stroke();

        context.beginPath();
            context.moveTo(20,60);
            context.bezierCurveTo(20, 60, 35 , 75, 50, 60);
            context.lineTo(50, 55);
            context.lineTo(45, 50);
            context.lineTo(45, 40);
            context.lineTo(50, 50);
            context.lineTo(52.5, 45);
            context.lineTo(50, 30);
            context.bezierCurveTo(50, 30, 35 , 20, 20, 30);
            context.lineTo(17.5, 45);
            context.lineTo(20, 50);
            context.lineTo(25, 40);
            context.lineTo(25, 50);
            context.lineTo(20, 55);
            context.closePath();

            context.fillStyle = '#ff8661';
            context.fill();
            context.strokeStyle = '#ff8661';
            context.stroke();
            
            context.stroke();

            context.beginPath();
            context.moveTo(20,60);
            context.bezierCurveTo(20, 60, 35 , 75, 50, 60);
            context.lineTo(50, 55);
            context.lineTo(20, 55);
            context.closePath();

            context.fillStyle = '#800080';
            context.fill();
            context.strokeStyle = '#800080';
            context.stroke();
            
            context.stroke();

        context.beginPath();

            context.moveTo(25,45);
            context.lineTo(45,45);

            context.fillStyle = '#800080';
            context.fill();
            context.strokeStyle = '#800080';
            context.stroke();
            
        context.beginPath();
    
            context.arc(35, 20, 12, 0, Math.PI * 2);
            context.fillStyle = "#800080";
            context.strokeStyle = '#800080';
            context.fill();
            context.stroke();
        
        context.beginPath();

            context.arc(35, 20, 4, 0, Math.PI * 2);
            context.fillStyle = "#551054";
            context.strokeStyle = '#551054';
            context.fill();
            context.stroke();

        context.restore();

            
    }

    function Birds(context, _X:number, _Y:number) {

        let scale: number = ((context.canvas.width)/1000);
        console.log(scale);

        context.save();

        context.translate(context.canvas.width*_X,context.canvas.height*_Y);
        context.scale(scale, scale);

        context.beginPath();
            context.moveTo(0,10);
            context.bezierCurveTo(0,10, 10, -5, 20, 10 );
            context.bezierCurveTo(20 ,10, 30, -5, 40, 10 )
            
            context.strokeStyle = '#000000';
            context.stroke();
    
            context.restore();

    }


}
