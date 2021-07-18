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
    var Participant = (function (_super) {
        __extends(Participant, _super);
        function Participant(_position, _velocity, _tricotcolor) {
            var _this = _super.call(this, _position, _velocity) || this;
            _this.position = _position;
            _this.tricotcolor = _tricotcolor;
            return _this;
        }
        Participant.prototype.update = function () { };
        Participant.prototype.draw = function () {
            final.crc2.save();
            final.crc2.beginPath();
            final.crc2.arc(this.position.X - Participant.radius, this.position.Y - Participant.radius, Participant.radius, 0, 2 * Math.PI);
            final.crc2.fillStyle = this.tricotcolor;
            final.crc2.fill();
            final.crc2.stroke();
            final.crc2.closePath();
            final.crc2.restore();
        };
        Participant.prototype.move = function (_timeslice) {
            var offset = new final.Vector(this.velocity.X, this.velocity.Y);
            offset.scale(_timeslice);
            this.position.add(offset);
        };
        Participant.radius = 18;
        return Participant;
    }(final.Movable));
    final.Participant = Participant;
})(final || (final = {}));
//# sourceMappingURL=participant.js.map