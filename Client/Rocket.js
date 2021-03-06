var Fireworks;
(function (Fireworks) {
    var Rocket = /** @class */ (function () {
        function Rocket(_size, _color, _positionX, _positionY, _offset, _i) {
            this.expendable = false;
            this.lifetime = HeartParticle.maxLifetime;
            console.log("rocket constructor");
            this.position = new Vector(0, 0);
            this.position.x = _positionX;
            this.position.y = _positionY;
            this.velocity = new Vector(0, 0);
            this.velocity.x = Math.cos(_offset * _i) * Math.floor(Math.random() * (60 - 50 + 1) + 50);
            this.velocity.y = Math.sin(_offset * _i) * Math.floor(Math.random() * (50 - 40 + 1) + 40);
            this.size = _size;
            this.color = _color;
        }
        Rocket.prototype.move = function (_timeslice) {
            // console.log("particle move");
            var offset = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        };
        Rocket.maxLifetime = 3;
        return Rocket;
    }());
    Fireworks.Rocket = Rocket;
})(Fireworks || (Fireworks = {}));
