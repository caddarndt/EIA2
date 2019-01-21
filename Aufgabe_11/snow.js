var A11Canvas;
(function (A11Canvas) {
    class Snow {
        draw() {
            A11Canvas.crc2.beginPath();
            A11Canvas.crc2.arc(this.xd, this.yd, 3, 0, 2 * Math.PI, false);
            A11Canvas.crc2.fillStyle = "#F5FEFF";
            A11Canvas.crc2.fill();
            A11Canvas.crc2.lineWidth = .2;
            A11Canvas.crc2.strokeStyle = "#D2EEF2";
            A11Canvas.crc2.stroke();
        }
        move() {
            this.yD = 2;
            this.xD = Math.random() * 4 - 2;
            this.xd += this.xD;
            this.yd += this.yD;
            if (this.yd > 1100) {
                this.yd = 0;
            }
            this.draw();
        }
    }
    A11Canvas.Snow = Snow;
})(A11Canvas || (A11Canvas = {}));
//# sourceMappingURL=snow.js.map