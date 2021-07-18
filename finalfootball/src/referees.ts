namespace final {


    export class Referee extends Participant {
        private ball : Ball;
        private direction: boolean;

        constructor(_position: Vector, _velocity: Vector, _tricotcolor: string, _ball : Ball, _direction: boolean)
        {
            super(_position, _velocity, _tricotcolor);
            this.ball = _ball;
            this.direction = _direction;

        }
    
        draw(): void {
            super.draw();
        }

        update(): void {
            if(this.direction)
            {
                this.position.X = this.ball.position.X + Participant.radius;
            }
            else
            {
                this.position.Y = this.ball.position.Y + Participant.radius;
            }

        }
    }
    
}