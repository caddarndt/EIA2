namespace A11Canvas {
 
    export class Snow {
        xd: number;
        yd: number;
        xD: number;
        yD: number;


 draw(): void {

            crc2.beginPath();
            crc2.arc(this.xd, this.yd, 3, 0, 2 * Math.PI, false);

            crc2.fillStyle = "#F5FEFF";
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#D2EEF2";
            crc2.stroke();


        }

        move(): void {

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

}
