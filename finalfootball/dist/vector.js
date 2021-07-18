var final;
(function (final) {
    function toRadians(_deg) {
        return _deg / 180 * Math.PI;
    }
    final.toRadians = toRadians;
    function randInterval(_a, _b) {
        return Math.random() * (_b - _a) + _a;
    }
    final.randInterval = randInterval;
    var Vector = (function () {
        function Vector(_X, _Y) {
            this.X = _X;
            this.Y = _Y;
        }
        Vector.getDifference = function (_v1, _v2) {
            var difference = new Vector(_v1.X - _v2.X, _v1.Y - _v2.Y);
            return difference;
        };
        Vector.dot = function (_a, _b) {
            return _a.X * _b.X + _a.Y * _b.Y;
        };
        Vector.prototype.scale = function (_factor) {
            this.X *= _factor;
            this.Y *= _factor;
        };
        Vector.prototype.add = function (_added) {
            this.X += _added.X;
            this.Y += _added.Y;
        };
        Vector.prototype.length = function () {
            var normal = Math.sqrt(this.X * this.X + this.Y * this.Y);
            return normal;
        };
        Vector.prototype.normalize = function () {
            var length = this.length();
            return new Vector(this.X / length, this.Y / length);
        };
        return Vector;
    }());
    final.Vector = Vector;
})(final || (final = {}));
//# sourceMappingURL=vector.js.map