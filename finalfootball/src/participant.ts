namespace final {

    export abstract class Participant extends Movable {

        public tricotcolor: string;
        public static radius : number = 18;
        constructor(_position: Vector, _velocity: Vector, _tricotcolor: string) {
            super(_position, _velocity);

            this.position = _position;
            this.tricotcolor = _tricotcolor;
        }

        update(): void{}

        draw(): void {


            crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.X - Participant.radius, this.position.Y - Participant.radius, Participant.radius, 0, 2 * Math.PI);
            crc2.fillStyle = this.tricotcolor;
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
        }



        
        move(_timeslice: number): void {

            let offset: Vector = new Vector(this.velocity.X, this.velocity.Y);
                
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
}