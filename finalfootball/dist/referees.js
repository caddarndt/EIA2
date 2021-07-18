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
    var Referee = (function (_super) {
        __extends(Referee, _super);
        function Referee(_position, _velocity, _tricotcolor, _ball, _direction) {
            var _this = _super.call(this, _position, _velocity, _tricotcolor) || this;
            _this.ball = _ball;
            _this.direction = _direction;
            return _this;
        }
        Referee.prototype.draw = function () {
            _super.prototype.draw.call(this);
        };
        Referee.prototype.update = function () {
            if (this.direction) {
                this.position.X = this.ball.position.X + final.Participant.radius;
            }
            else {
                this.position.Y = this.ball.position.Y + final.Participant.radius;
            }
        };
        return Referee;
    }(final.Participant));
    final.Referee = Referee;
})(final || (final = {}));
//# sourceMappingURL=referees.js.map