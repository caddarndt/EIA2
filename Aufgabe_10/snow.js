var A10Canvas;
(function (A10Canvas) {
    class Snow {
        draw() {
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.arc(this.xPos, this.yPos, 3, 0, 2 * Math.PI, false);
            A10Canvas.crc2.fillStyle = "#F5FEFF";
            A10Canvas.crc2.fill();
            A10Canvas.crc2.lineWidth = .2;
            A10Canvas.crc2.strokeStyle = "#D2EEF2";
            A10Canvas.crc2.stroke();
        }
        move() {
            this.yDir = 2;
            this.xDir = Math.random() * 4 - 2;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.yPos > 1100) {
                this.yPos = 0;
            }
            this.draw();
        }
    }
    A10Canvas.Snow = Snow;
})(A10Canvas || (A10Canvas = {}));
//# sourceMappingURL=snow.js.map