var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fireworks;
(function (Fireworks) {
    var StarParticle = /** @class */ (function (_super) {
        __extends(StarParticle, _super);
        function StarParticle(_size, _color, _positionX, _positionY, _offset, _i) {
            return _super.call(this, _size, _color, _positionX, _positionY, _offset, _i) || this;
        }
        StarParticle.prototype.draw = function () {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.rotate(180 * Math.PI / 180);
            crc2.beginPath();
            crc2.moveTo(4.4, 0);
            crc2.lineTo(8.6, 4.4);
            crc2.lineTo(2.6, 5); // 4.8?
            crc2.lineTo(0, 10.4);
            crc2.lineTo(-2.6, 5);
            crc2.lineTo(-8.6, 4.4);
            crc2.lineTo(-4.4, 0);
            crc2.lineTo(-5.6, -6.6);
            crc2.lineTo(0, -3.6);
            crc2.lineTo(5.6, -6.6);
            crc2.lineTo(4.4, 0);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.restore();
        };
        StarParticle.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
        };
        return StarParticle;
    }(Rocket));
    Fireworks.StarParticle = StarParticle;
})(Fireworks || (Fireworks = {}));
