var A11Canvas;
(function (A11Canvas) {
    class Tree extends A11Canvas.Draw {
        constructor() {
            super();
            this.xd = 60 + Math.random() * 450;
            this.yd = 300 + Math.random() * 190;
            this.color = "#799F0C";
        }
        draw() {
            A11Canvas.crc2.fillStyle = this.color;
            A11Canvas.crc2.beginPath();
            A11Canvas.crc2.moveTo(this.xd, this.yd);
            A11Canvas.crc2.lineTo(this.xd + 15, this.yd + 60);
            A11Canvas.crc2.lineTo(this.xd - 15, this.yd + 60);
            A11Canvas.crc2.closePath();
            A11Canvas.crc2.stroke();
            A11Canvas.crc2.strokeStyle = "#49311C";
            A11Canvas.crc2.fillStyle = this.color;
            A11Canvas.crc2.fill();
            A11Canvas.crc2.moveTo(this.xd, this.yd + 45);
            A11Canvas.crc2.beginPath();
            A11Canvas.crc2.lineTo(this.xd, this.yd + 60);
            A11Canvas.crc2.lineTo(this.xd, this.yd + 75);
            A11Canvas.crc2.closePath();
            A11Canvas.crc2.stroke();
        }
    }
    A11Canvas.Tree = Tree;
})(A11Canvas || (A11Canvas = {}));
//# sourceMappingURL=trees.js.map