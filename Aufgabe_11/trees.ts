namespace A11Canvas {


    export class Tree extends Draw {
        color: string;

        constructor() {
            super();
            this.xd = 60 + Math.random() * 450;
            this.yd = 300 + Math.random() * 190;
            this.color = "#799F0C";
        }

        draw(): void {

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.xd, this.yd);
            crc2.lineTo(this.xd + 15, this.yd + 60);
            crc2.lineTo(this.xd - 15, this.yd + 60);
            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "#49311C";
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.moveTo(this.xd, this.yd + 45);
            crc2.beginPath();
            crc2.lineTo(this.xd, this.yd + 60);
            crc2.lineTo(this.xd, this.yd + 75);

            crc2.closePath();
            crc2.stroke();


        }
    }
}