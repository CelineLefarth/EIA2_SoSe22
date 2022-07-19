namespace L11 {
    
export abstract class Moveable {
    posX: number;
    posY: number;

    velocityX: number;
    velocityY: number;

    mosX: number;
    mosY: number;


    constructor(_position: Vector, _velocity: Vector,  _mosX: number, _mosY: number) {
          this.posX = _position.x; 
          this.posY = _position.y; 

          this.velocityX = _velocity.x;
          this.velocityY = _velocity.y;

          this.mosX = _mosX;
          this.mosY = _mosY;

    }

    abstract interact?(_x: number, _y: number): void;
        abstract draw(): void;
        abstract update(): void;
}
}