namespace L11 {

    export class Boot extends Moveable {
        declare posX: number;
        declare posY: number;
        velocityX: number = 0.9;
        velocityY: number = 0.1;

        mor: number

        constructor(_position: Vector, _velocity: Vector, _mosX: number, _mosY: number) {
            super(_position, _velocity, _mosX, _mosY);
        }
        // From Codepen
        draw(): void {

            let scale: number = ((crc2.canvas.width*2)/1000);
            console.log(scale);
    
            crc2.save();
    
            crc2.translate(this.posX,this.posY);
            crc2.scale(scale, scale);
    
            crc2.beginPath();
                crc2.moveTo(10,70);
                crc2.lineTo(60,70);
                crc2.lineTo(50, 60);
                crc2.lineTo(20, 60);
                crc2.closePath();
                crc2.strokeStyle = '#ff0000';
                crc2.fillStyle = "#ff0000";
                crc2.fill();
                crc2.stroke();
    
            crc2.beginPath();
                crc2.moveTo(20,60);
                crc2.bezierCurveTo(20, 60, 35 , 75, 50, 60);
                crc2.lineTo(50, 55);
                crc2.lineTo(45, 50);
                crc2.lineTo(45, 40);
                crc2.lineTo(50, 50);
                crc2.lineTo(52.5, 45);
                crc2.lineTo(50, 30);
                crc2.bezierCurveTo(50, 30, 35 , 20, 20, 30);
                crc2.lineTo(17.5, 45);
                crc2.lineTo(20, 50);
                crc2.lineTo(25, 40);
                crc2.lineTo(25, 50);
                crc2.lineTo(20, 55);
                crc2.closePath();
    
                crc2.fillStyle = '#ff8661';
                crc2.fill();
                crc2.strokeStyle = '#ff8661';
                crc2.stroke();
                
                crc2.stroke();
    
                crc2.beginPath();
                crc2.moveTo(20,60);
                crc2.bezierCurveTo(20, 60, 35 , 75, 50, 60);
                crc2.lineTo(50, 55);
                crc2.lineTo(20, 55);
                crc2.closePath();
    
                crc2.fillStyle = '#800080';
                crc2.fill();
                crc2.strokeStyle = '#800080';
                crc2.stroke();
                
                crc2.stroke();
    
            crc2.beginPath();
    
                crc2.moveTo(25,45);
                crc2.lineTo(45,45);
    
                crc2.fillStyle = '#800080';
                crc2.fill();
                crc2.strokeStyle = '#800080';
                crc2.stroke();
                
            crc2.beginPath();
        
                crc2.arc(35, 20, 12, 0, Math.PI * 2);
                crc2.fillStyle = "#800080";
                crc2.strokeStyle = '#800080';
                crc2.fill();
                crc2.stroke();
            
            crc2.beginPath();
    
                crc2.arc(35, 20, 4, 0, Math.PI * 2);
                crc2.fillStyle = "#551054";
                crc2.strokeStyle = '#551054';
                crc2.fill();
                crc2.stroke();
    
            crc2.restore();

        }

        update(): void {
            

        }

        interact(_x: number, _y: number): void {
            let hitboxX: number = 90;
            let hitboxY: number = 600;
            const distanceX: number = Math.sqrt(((_x - this.mosX) * (_x - this.mosX)));
            const distanceY: number = Math.sqrt(((_y - this.mosY) * (_y - this.mosY)));
            if (Math.abs(this.mor) > 1) {
                hitboxX = 600;
                hitboxY = 90;
            }
        }
    }
}