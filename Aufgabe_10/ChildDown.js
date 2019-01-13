var A10Canvas;
(function (A10Canvas) {
    class ChildDown {
        draw() {
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.arc(this.xPos + 25, this.yPos - 50, 10, 0, 2 * Math.PI, false);
            A10Canvas.crc2.fillStyle = "#FFD8BE";
            A10Canvas.crc2.fill();
            A10Canvas.crc2.lineWidth = .2;
            A10Canvas.crc2.strokeStyle = "#A57658";
            A10Canvas.crc2.stroke();
            A10Canvas.crc2.fillStyle = this.color;
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.xPos + 10, this.yPos - 15);
            A10Canvas.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            A10Canvas.crc2.lineTo(this.xPos + 25, this.yPos - 40);
            A10Canvas.crc2.fill();
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.xPos, this.yPos);
            A10Canvas.crc2.lineTo(this.xPos + 55, this.yPos);
            A10Canvas.crc2.lineWidth = 4;
            A10Canvas.crc2.strokeStyle = "#683737";
            A10Canvas.crc2.stroke();
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.xPos, this.yPos - 15);
            A10Canvas.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            A10Canvas.crc2.lineWidth = 4;
            A10Canvas.crc2.strokeStyle = "#683737";
            A10Canvas.crc2.stroke();
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.xPos + 10, this.yPos);
            A10Canvas.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            A10Canvas.crc2.lineWidth = 4;
            A10Canvas.crc2.strokeStyle = "#683737";
            A10Canvas.crc2.stroke();
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(this.xPos + 45, this.yPos);
            A10Canvas.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            A10Canvas.crc2.lineWidth = 4;
            A10Canvas.crc2.strokeStyle = "#683737";
            A10Canvas.crc2.stroke();
        }
        move() {
            this.yDir = 2;
            this.xDir = -5;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos > 350) {
                this.xPos = -60;
                this.yPos = Math.random() * 250 + 400;
            }
        }
        getRandomColor() {
            var r = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var g = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var b = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            return "#" + r + g + b;
        }
    }
    A10Canvas.ChildDown = ChildDown;
})(A10Canvas || (A10Canvas = {}));
//# sourceMappingURL=ChildDown.js.map