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
var final;
(function (final) {
    window.addEventListener("load", init);
    var fps = 60;
    var imgData;
    var ball;
    //let referee: Referees;
    // called on entering page 
    function init(_event) {
        ball = new Ball();
        ball.x = 425;
        ball.y = 225;
        ball.speed = 3;
        /*referee: new Referees();
        referee.x = 420;
        referee.y = 400;
        referee.speed = 2.5;*/
        var canvas = document.getElementsByTagName("canvas")[0];
        final.crc2 = canvas.getContext("2d");
        imgData = final.crc2.getImageData(0, 0, 850, 450);
        update();
        function update() {
            final.crc2.putImageData(imgData, 0, 0);
            window.setTimeout(update, 1000 / fps);
            ball.update();
            //referee.update();
            draw();
        }
        function draw() {
            final.crc2.fillStyle = "#44e841";
            final.crc2.fillRect(0, 0, final.crc2.canvas.width, final.crc2.canvas.height);
            drawField();
            drawGoalLeft();
            drawGoalRight();
            drawBall();
            //drawReferee();
            //drawReferee2();
        }
        function drawField() {
            final.crc2.strokeStyle = "#ffffff";
            // outer rectangle
            final.crc2.beginPath();
            final.crc2.strokeRect(35, 35, 780, 385);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            // center line
            final.crc2.beginPath();
            final.crc2.lineTo(425, 420);
            final.crc2.lineTo(425, 35);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            // inner circle 
            final.crc2.beginPath();
            final.crc2.arc(425, 225, 50, 0, 2 * Math.PI);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.beginPath();
            final.crc2.arc(425, 225, 2, 0, 2 * Math.PI);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            // penalty box left
            final.crc2.beginPath();
            final.crc2.strokeRect(35, 160, 65, 130);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.beginPath();
            final.crc2.arc(130, 225, 2, 0, 2 * Math.PI);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.beginPath();
            final.crc2.strokeRect(35, 100, 140, 250);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.beginPath();
            final.crc2.bezierCurveTo(175, 175, 225, 225, 175, 275);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            // penalty box right
            final.crc2.beginPath();
            final.crc2.strokeRect(815, 160, -65, 130);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.beginPath();
            final.crc2.arc(710, 225, 2, 0, 2 * Math.PI);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.beginPath();
            final.crc2.strokeRect(815, 100, -140, 250);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.beginPath();
            final.crc2.bezierCurveTo(675, 175, 625, 225, 675, 275);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
        }
        // left goal
        function drawGoalLeft() {
            final.crc2.fillStyle = "#ffffff";
            final.crc2.beginPath();
            final.crc2.fillRect(10, 200, 25, 50);
        }
        // right goal
        function drawGoalRight() {
            final.crc2.fillStyle = "#ffffff";
            final.crc2.beginPath();
            final.crc2.fillRect(840, 200, -25, 50);
        }
        // ball
        function drawBall() {
            final.crc2.fillStyle = "#383838";
            final.crc2.beginPath();
            final.crc2.arc(ball.x, ball.y, 10, 0, 2 * Math.PI);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.fill();
        }
        var actors = [];
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
            var rect = canvas.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            return { x: x, y: y };
        }
        canvas.addEventListener("mousedown", function (e) {
            var pos = getMousePosition(canvas, e);
            ball.moveTo(pos.x, pos.y);
            //referee.moveTo(420, pos.y);
        });
    }
})(final || (final = {}));
