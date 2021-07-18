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
    var PlayerState;
    (function (PlayerState) {
        PlayerState[PlayerState["ToBall"] = 0] = "ToBall";
        PlayerState[PlayerState["GotBall"] = 1] = "GotBall";
        PlayerState[PlayerState["ShootBall"] = 2] = "ShootBall";
        PlayerState[PlayerState["Stop"] = 3] = "Stop";
    })(PlayerState = final.PlayerState || (final.PlayerState = {}));
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(_position, _velocity, _tricotcolor, _name, _number, _precision, _pace, _team) {
            var _this = _super.call(this, _position, _velocity, _tricotcolor) || this;
            _this.state = PlayerState.Stop;
            _this.minPace = 0;
            _this.maxPace = 0;
            _this.minPrecision = 0;
            _this.maxPrecision = 0;
            _this.name = _name;
            _this.number = _number;
            _this.precision = _precision;
            _this.pace = _pace;
            _this.team = _team;
            return _this;
        }
        Player.prototype.changeState = function () {
            this.state = PlayerState.Stop;
        };
        Player.prototype.changePace = function (_newPace) {
            this.pace = _newPace;
        };
        Player.prototype.changePrecision = function (_newPrecision) {
            this.precision = _newPrecision;
        };
        Player.prototype.setVelocity = function (vel) {
            this.velocity = vel;
        };
        Player.prototype.draw = function () {
            _super.prototype.draw.call(this);
        };
        Player.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
        };
        Player.prototype.checkClick = function (_x, _y) {
            var eventData = new final.Vector(_x, _y);
            var difference = final.Vector.getDifference(this.position, eventData);
            var length = difference.length();
            if (length < 20) {
                console.log("click is true");
                return true;
            }
            else {
                console.log("click is false");
                return false;
            }
        };
        Player.prototype.getActualBallPosition = function () {
            return new final.Vector(final.getBall().position.X + final.Ball.radius / 2, final.getBall().position.Y + final.Ball.radius / 2);
        };
        Player.prototype.update = function () {
            var checkForRadius = final.Vector.getDifference(this.getActualBallPosition(), this.position);
            var dist = Math.abs(checkForRadius.length());
            var detectionRadius = 150;
            var arriveRadius = 10;
            switch (this.state) {
                case PlayerState.Stop:
                    this.setVelocity(new final.Vector(0, 0));
                    if (dist < detectionRadius) {
                        this.state = PlayerState.ToBall;
                    }
                    break;
                case PlayerState.ToBall:
                    checkForRadius = checkForRadius.normalize();
                    checkForRadius.scale(this.pace);
                    this.setVelocity(checkForRadius);
                    if (dist <= arriveRadius) {
                        this.changeStateToGotBall();
                        console.log("!playerState was changed to GotBall!");
                    }
                    else if (dist > detectionRadius) {
                        this.state = PlayerState.Stop;
                    }
                    break;
                case PlayerState.GotBall:
                    console.log("!playerState is in GotBall!");
                    break;
            }
        };
        Player.prototype.changeStateToGotBall = function () {
            final.pauseGame();
            this.setVelocity(new final.Vector(0, 0));
            final.getBall().setVelocity(new final.Vector(0, 0));
            var precision = this.precision;
            var ballPosition = this.getActualBallPosition();
            this.state = PlayerState.GotBall;
            var self = this;
            final.canvas.addEventListener("click", function tempListener(_event) {
                if (self.state == PlayerState.GotBall) {
                    var rect = final.canvas.getBoundingClientRect();
                    var x = _event.clientX - rect.left;
                    var y = _event.clientY - rect.top;
                    var xoffset = x - ballPosition.X;
                    var yoffset = y - ballPosition.Y;
                    var angle = Math.atan2(xoffset, yoffset);
                    var precisionResult = Math.random() * precision;
                    var direction = Math.random() >= 0.5;
                    var randomOffset = (direction ? -precisionResult : precisionResult) / 100;
                    angle += randomOffset;
                    var xSpeed = Math.sin(angle) * 100;
                    var ySpeed = Math.cos(angle) * 100;
                    var velocity = new final.Vector(xSpeed, ySpeed);
                    final.getBall().setVelocity(velocity);
                    final.resumeGame();
                    setTimeout(function () {
                        console.log("!timeout was set!");
                        self.changeState();
                    }, 170);
                }
                window.removeEventListener("click", tempListener);
            });
            var posession = document.getElementById("posession");
            posession.innerHTML = "on the ball: " + this.name;
            this.state = PlayerState.GotBall;
        };
        return Player;
    }(final.Participant));
    final.Player = Player;
})(final || (final = {}));
//# sourceMappingURL=player.js.map