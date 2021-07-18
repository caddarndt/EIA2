namespace final {

    /*export class Ball {
        public x: number
        public y: number 
        public speed: number
        
        private targetX:number
        private targetY:number
        private moving: boolean
            
        
        update(): void {
            if(this.moving) {
                var xoffset = this.x - this.targetX;
                var yoffset = this.y - this.targetY;
        
                var ratio = xoffset/ yoffset;
                var angle = Math.atan2(xoffset, yoffset);
                var xSpeed = Math.sin(angle) * this.speed;
                var ySpeed =  Math.cos(angle) * this.speed;
                this.x -= xSpeed;
                this.y -= ySpeed;
        
        
                if(Math.abs(xoffset)  < this.speed && Math.abs(yoffset) < this.speed){
                    this.moving = false
                }
            }
        }
    
        moveTo(x:number, y:number) {
            this.targetX = x;
            this.targetY = y;
            this.moving = true;
        }
    }*/

    export class Ball extends Movable {
        static radius : number = 10;
        public color: string;
        private targetX:number
        private targetY:number
        private moving: boolean
        public speed: number
        public drag: number = 0.75;

        constructor(_position: Vector, _velocity: Vector, _color: string) {
            super(_position, _velocity);

            this.color = _color;
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.X, this.velocity.Y);
            
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        setVelocity(vel: Vector): void {
            this.velocity = vel;
        }

        draw(): void {
            crc2.save();
            crc2.fillStyle = "#383838";
            crc2.beginPath();
            crc2.arc(this.position.X, this.position.Y, Ball.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
            crc2.restore();
        }

        update(): void {
            var length = Math.max(0,this.velocity.length() - this.drag);
            if(length != 0){

                this.velocity = this.velocity.normalize();
                this.velocity.scale(length);
            }
        }
    

    }
}
