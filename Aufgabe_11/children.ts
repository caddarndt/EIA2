namespace A11Canvas {
    
    
      export class Child extends Draw {
        xD: number;
        yD: number;
        state: boolean;

        constructor() {
            super();
            this. xd = Math.random() * 100 + 100;
            this. yd = Math.random() * 100 + 400;
            
        }

        move(): void {
            if (this.state == true)
                this.moveDown();

            else {
                this.moveUp();
            }
        }

        moveDown(): void {
            this.xD = 5;
            this.yD = -3;

            this. xd += this.xD;
            this. yd += this.yD;

            if (this. xd > 500) {
                this.state = false;
            }
        }

        moveUp(): void {

            this.xD = -6;
            this.yD = 3;

            this. xd += this.xD;
            this. yd += this.yD;
            if (this.yd < 100)
            
            {
                this.xd = 50; //
                this.yd = Math.floor(Math.random() * (530 - 500)) + 500; // Damit die Kinder nicht in den Himmel fliegen
                }
            if (this. xd < 100) {
                this.state = true;
            }
            this.draw();
        }

        draw(): void {
            crc2.strokeStyle = "black";
            crc2.fillStyle="black";
            crc2.lineWidth = 2;

            
            crc2.moveTo(this.xd, this.yd);
            crc2.beginPath();
            crc2.arc(this.xd - 10, this.yd, 5, 0, 2 * Math.PI);
            crc2.lineTo(this.xd - 10, this.yd + 15);
            crc2.moveTo(this.xd - 10, this.yd + 15);
            crc2.lineTo(this.xd - 20, this.yd + 20);
            crc2.moveTo(this.xd - 10, this.yd + 5);
            crc2.lineTo(this.xd - 15, this.yd + 10);
            crc2.closePath();
            
            crc2.stroke();
            crc2.fill();
            
           
         
            crc2.lineWidth = 5;
            
            crc2.beginPath();
            crc2.lineTo(this.xd - 0, this.yd + 15);
            crc2.lineTo(this.xd - 30, this.yd + 25);
            crc2.lineTo(this.xd - 30, this.yd + 15);
            crc2.stroke();
        }
    }
}