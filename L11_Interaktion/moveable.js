var L11;
(function (L11) {
    class Moveable {
        posX;
        posY;
        velocityX;
        velocityY;
        mosX;
        mosY;
        constructor(_position, _velocity, _mosX, _mosY) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
            this.mosX = _mosX;
            this.mosY = _mosY;
        }
    }
    L11.Moveable = Moveable;
})(L11 || (L11 = {}));
//# sourceMappingURL=moveable.js.map