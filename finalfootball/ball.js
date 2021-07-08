var final;
(function (final) {
    var Ball = /** @class */ (function () {
        function Ball() {
        }
        Ball.prototype.update = function () {
            if (this.moving) {
                var xoffset = this.x - this.targetX;
                var yoffset = this.y - this.targetY;
                var ratio = xoffset / yoffset;
                var angle = Math.atan2(xoffset, yoffset);
                var xSpeed = Math.sin(angle) * this.speed;
                var ySpeed = Math.cos(angle) * this.speed;
                this.x -= xSpeed;
                this.y -= ySpeed;
                if (Math.abs(xoffset) < this.speed && Math.abs(yoffset) < this.speed) {
                    this.moving = false;
                }
            }
        };
        Ball.prototype.moveTo = function (x, y) {
            this.targetX = x;
            this.targetY = y;
            this.moving = true;
        };
        return Ball;
    }());
    final.Ball = Ball;
})(final || (final = {}));
