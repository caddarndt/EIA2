var A11Canvas;
(function (A11Canvas) {
    class Child extends A11Canvas.Draw {
        constructor() {
            super();
            this.xd = Math.random() * 100 + 100;
            this.yd = Math.random() * 100 + 400;
        }
        move() {
            if (this.state == true)
                this.moveDown();
            else {
                this.moveUp();
            }
        }
        moveDown() {
            this.xD = 5;
            this.yD = -3;
            this.xd += this.xD;
            this.yd += this.yD;
            if (this.xd > 500) {
                this.state = false;
            }
        }
        moveUp() {
            this.xD = -6;
            this.yD = 3;
            this.xd += this.xD;
            this.yd += this.yD;
            if (this.yd < 100) {
                this.xd = 50; //
                this.yd = Math.floor(Math.random() * (530 - 500)) + 500; // Damit die Kinder nicht in den Himmel fliegen
            }
            if (this.xd < 100) {
                this.state = true;
            }
            this.draw();
        }
        draw() {
            A11Canvas.crc2.strokeStyle = "black";
            A11Canvas.crc2.fillStyle = "black";
            A11Canvas.crc2.lineWidth = 2;
            A11Canvas.crc2.moveTo(this.xd, this.yd);
            A11Canvas.crc2.beginPath();
            A11Canvas.crc2.arc(this.xd - 10, this.yd, 5, 0, 2 * Math.PI);
            A11Canvas.crc2.lineTo(this.xd - 10, this.yd + 15);
            A11Canvas.crc2.moveTo(this.xd - 10, this.yd + 15);
            A11Canvas.crc2.lineTo(this.xd - 20, this.yd + 20);
            A11Canvas.crc2.moveTo(this.xd - 10, this.yd + 5);
            A11Canvas.crc2.lineTo(this.xd - 15, this.yd + 10);
            A11Canvas.crc2.closePath();
            A11Canvas.crc2.stroke();
            A11Canvas.crc2.fill();
            A11Canvas.crc2.lineWidth = 5;
            A11Canvas.crc2.beginPath();
            A11Canvas.crc2.lineTo(this.xd - 0, this.yd + 15);
            A11Canvas.crc2.lineTo(this.xd - 30, this.yd + 25);
            A11Canvas.crc2.lineTo(this.xd - 30, this.yd + 15);
            A11Canvas.crc2.stroke();
        }
    }
    A11Canvas.Child = Child;
})(A11Canvas || (A11Canvas = {}));
//# sourceMappingURL=children.js.map