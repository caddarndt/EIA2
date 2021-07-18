var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var final;
(function (final) {
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball(_position, _velocity, _color) {
            var _this = _super.call(this, _position, _velocity) || this;
            _this.drag = 0.75;
            _this.color = _color;
            return _this;
        }
        Ball.prototype.move = function (_timeslice) {
            var offset = new final.Vector(this.velocity.X, this.velocity.Y);
            offset.scale(_timeslice);
            this.position.add(offset);
        };
        Ball.prototype.setVelocity = function (vel) {
            this.velocity = vel;
        };
        Ball.prototype.draw = function () {
            final.crc2.save();
            final.crc2.fillStyle = "#383838";
            final.crc2.beginPath();
            final.crc2.arc(this.position.X, this.position.Y, Ball.radius, 0, 2 * Math.PI);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.fill();
            final.crc2.restore();
        };
        Ball.prototype.update = function () {
            var length = Math.max(0, this.velocity.length() - this.drag);
            if (length != 0) {
                this.velocity = this.velocity.normalize();
                this.velocity.scale(length);
            }
        };
        Ball.radius = 10;
        return Ball;
    }(final.Movable));
    final.Ball = Ball;
})(final || (final = {}));
//# sourceMappingURL=ball.js.map