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
    var CircleParticle = /** @class */ (function (_super) {
        __extends(CircleParticle, _super);
        function CircleParticle(_size, _color, _positionX, _positionY, _offset, _i) {
            return _super.call(this, _size, _color, _positionX, _positionY, _offset, _i) || this;
        }
        CircleParticle.prototype.draw = function () {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI, true);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.restore();
        };
        CircleParticle.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
        };
        return CircleParticle;
    }(Rocket));
    Fireworks.CircleParticle = CircleParticle;
})(Fireworks || (Fireworks = {}));
