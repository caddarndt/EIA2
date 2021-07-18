namespace final {

    export enum PlayerState {
        ToBall,
        GotBall,
        ShootBall,
        Stop
    }

    export class Player extends Participant {

        public state: PlayerState = PlayerState.Stop;

        public name: string;
        public number: number;
        public precision: number;
        public pace: number;
        public team: number;

        public minPace: number = 0;
        public maxPace: number = 0;
        public minPrecision: number = 0;
        public maxPrecision: number = 0;

        constructor(_position: Vector, _velocity: Vector, _tricotcolor: string, _name: string, _number: number, _precision: number, _pace: number, _team: number) {
            super(_position, _velocity, _tricotcolor);
            this.name = _name;
            this.number = _number;
            this.precision = _precision;
            this.pace = _pace;
            this.team = _team;
        }

        changeState(): void {
            this.state = PlayerState.Stop;
        }

        changePace(_newPace: number): void {
            this.pace = _newPace;
        }

        changePrecision(_newPrecision: number): void {
            this.precision = _newPrecision;
        }

        setVelocity(vel: Vector): void {
            this.velocity = vel;
        }

        draw(): void {
            super.draw();
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
        }

        checkClick(_x: number, _y: number): boolean {

            let eventData: Vector = new Vector(_x, _y);

            let difference: Vector = Vector.getDifference(this.position, eventData);
            
            let length: number = difference.length();

            if (length < 20) {
                console.log("click is true");
                return true;
            }

            else {
                console.log("click is false");
                return false;
            }
        }

        getActualBallPosition() : Vector{ 
            return new Vector(getBall().position.X + Ball.radius/ 2, getBall().position.Y + Ball.radius/ 2);
        } 



        update(): void {

            let checkForRadius: Vector = Vector.getDifference(this.getActualBallPosition(), this.position);
            const dist: number = Math.abs(checkForRadius.length());

            const detectionRadius: number = 150;
            const arriveRadius: number = 10;

            switch (this.state) {

                case PlayerState.Stop:
                    this.setVelocity(new Vector(0, 0));
                    if (dist < detectionRadius) {
                        this.state = PlayerState.ToBall;
                    }
    
                    break;
    
                case PlayerState.ToBall:
                    checkForRadius = checkForRadius.normalize();
                    // console.log("Speed: " + this.pace);
                    // console.log("Precision: " +this.precision);
                    checkForRadius.scale(this.pace);
                    this.setVelocity(checkForRadius);

                    if (dist <= arriveRadius) {
                        this.changeStateToGotBall();
                        console.log("!playerState was changed to GotBall!");
                    }
                    else if (dist > detectionRadius) {
                        this.state = PlayerState.Stop;
                    }

                    break;

                case PlayerState.GotBall:
                    console.log("!playerState is in GotBall!");
                    break;
            }
        }

        private changeStateToGotBall(): void {
            pauseGame();

            this.setVelocity(new Vector(0, 0));
            getBall().setVelocity(new Vector(0, 0));
            var precision = this.precision;
            var ballPosition = this.getActualBallPosition();
            this.state = PlayerState.GotBall;
            let self: this = this;

             canvas.addEventListener("click", function tempListener(_event: MouseEvent): void {
                if(self.state == PlayerState.GotBall){

                let rect = canvas.getBoundingClientRect();
                let x = _event.clientX - rect.left;
                let y = _event.clientY - rect.top;

                var xoffset = x- ballPosition.X ;
                var yoffset = y- ballPosition.Y;

                var angle = Math.atan2(xoffset,yoffset);

                var precisionResult = Math.random() *  precision;
                var direction = Math.random() >= 0.5;
                var randomOffset = (direction? -precisionResult : precisionResult) /100;

                angle += randomOffset;
                
                var xSpeed = Math.sin(angle) *  100;
                var ySpeed =  Math.cos(angle) * 100 ;
                var velocity = new Vector(xSpeed, ySpeed);
                getBall().setVelocity(velocity);

                resumeGame();
               
        
                setTimeout(() => {
                    console.log("!timeout was set!");
                    self.changeState();
                },         170);
            }
               window.removeEventListener("click", tempListener);
            });

            let posession: HTMLElement = document.getElementById("posession")!;
            posession.innerHTML = "on the ball: " + this.name;

            this.state = PlayerState.GotBall;
        }
    }

}