    /*class Ball {
    public x : number;
    public y:  number;
    public speed: number;
    
    private targetX:number;
    private targetY:number;
    private moving: boolean;
        
    
    update(): void {

        if(this.moving) {
            var xoffset = this.x - this.targetX;
            var yoffset = this.y - this.targetY;
        
            var ratio = xoffset/ yoffset;
            var angle = Math.atan2(xoffset, yoffset);
            var xSpeed = Math.sin(angle) * this.speed;
            var ySpeed = Math.cos(angle) * this.speed;
            this.x -= xSpeed;
            this.y -= ySpeed;
        
        
            if(Math.abs(xoffset) < this.speed && Math.abs(yoffset) < this.speed){
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
    
    /*class Referees {
        public x : number = 425;
        public y:  number;
        public speed: number;
        
        private targetX:number;
        private targetY:number;
        private moving: boolean;
            
        
        update(): void {
    
            if(this.moving) {
                var xoffset = this.x - this.targetX;
                var yoffset = this.y - this.targetY;
            
                var ratio = xoffset/ yoffset;
                var angle = Math.atan2(xoffset, yoffset);
                var xSpeed = Math.sin(angle) * this.speed;
                var ySpeed = Math.cos(angle) * this.speed;
                this.x -= xSpeed;
                this.y -= ySpeed;
            
            
                if(Math.abs(xoffset) < this.speed && Math.abs(yoffset) < this.speed){
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


namespace final {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let fps: number = 60;
    let imgData: ImageData;
    let ball: Ball;

    //let referee: Referees;


    // called on entering page 
    function init(_event: Event): void {
        ball = new Ball();
        ball.x = 425;
        ball.y = 225;
        ball.speed = 3;

        /*referee: new Referees();
        referee.x = 420;
        referee.y = 400;
        referee.speed = 2.5;*/


        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        imgData = crc2.getImageData(0, 0, 850, 450);

        update();

        function update(): void {
            crc2.putImageData(imgData, 0, 0);
            window.setTimeout(update, 1000 / fps);
    
            ball.update();
            //referee.update();
            draw();
        }

        function draw() {
            crc2.fillStyle = "#44e841";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    
            drawField();
            drawGoalLeft();
            drawGoalRight();
            drawBall();
            //drawReferee();
            //drawReferee2();
        }
        
        function drawField(): void {
            crc2.strokeStyle = "#ffffff";

            // outer rectangle
            crc2.beginPath();
            crc2.strokeRect(35,35,780,385);
            crc2.closePath();
            crc2.lineWidth = 3;

            // center line
            crc2.beginPath();
            crc2.lineTo(425,420);
            crc2.lineTo(425,35);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            // inner circle 
            crc2.beginPath();
            crc2.arc(425, 225, 50, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            crc2.beginPath();
            crc2.arc(425, 225, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            // penalty box left
            crc2.beginPath();
            crc2.strokeRect(35,160,65,130);
            crc2.closePath();
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.arc(130, 225, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeRect(35,100,140,250);
            crc2.closePath();
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.bezierCurveTo(175, 175, 225, 225, 175, 275);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            // penalty box right
            crc2.beginPath();
            crc2.strokeRect(815,160,-65,130);
            crc2.closePath();
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.arc(710, 225, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeRect(815,100,-140,250);
            crc2.closePath();
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.bezierCurveTo(675, 175, 625, 225, 675, 275);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke(); 
        }

        // left goal
        function drawGoalLeft(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.fillRect(10,200,25,50);
        }

        // right goal
        function drawGoalRight(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.fillRect(840,200,-25,50);
        }

        // ball
        function drawBall(): void {
            crc2.fillStyle = "#383838";
            crc2.beginPath();
            crc2.arc(ball.x, ball.y, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
        } 

        let actors: [] = [];

        // referee
        /*function drawReferee(): void {

            let referees: number = 2;
            let actorslength = actors.length;
            let name ="";

            for (let i = 0; i < referees; i++) {

                crc2.fillStyle = "#d8ff3d";
                crc2.beginPath();
                crc2.arc(425, 435, 12, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.lineWidth = 3;
                crc2.stroke();
                crc2.fill();
                name += "referee1";
                actors.push("referee1");

                if (i > 1) {


                }

            }
           
        }*/

        /*function drawReferee2(): void {
            crc2.fillStyle = "#d8ff3d";
            crc2.beginPath();
            crc2.arc(425, 15, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
        }*/
         
        
        // find click position 
        function getMousePosition(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            return {x: x, y: y};
        }
    
          
        canvas.addEventListener("mousedown", function(e) {
            var pos = getMousePosition(canvas, e);
            ball.moveTo(pos.x,pos.y);
            //referee.moveTo(420, pos.y);
        });

    }

}