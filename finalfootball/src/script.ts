namespace final {

    window.addEventListener("load", handleload);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let gameStatus: boolean;

    //variables for keeping score
    let score1: number = 0;
    let score2: number = 0;

    //canvas size
    let width = 850;
    let height = 450;
    let canvasWidth: number = width;
    let canvasHeight: number = height;

    //variables determining speed and precision
    let firstShot : boolean=true;
    let minSpeed: number = 10;
    let maxSpeed : number = 15;
    let minPrecision: number = 20;
    let maxPrecision: number = 40;

    //arrays to keep players and move ball
    let participants: Participant[] = [];
    let playerMove: Player[] = []; 
    let ballArray: Ball[] = [];


    //functions to determine game state
    export function getBall(): Ball {
        return ballArray[0];
    }

    export function pauseGame(): void {
        console.log("game was paused");
        gameStatus = true;
    }

    export function resumeGame(): void {
        gameStatus = false;

        window.addEventListener("click", firstBallMove);
        console.log("game was resumed");
    }

    export function formStatusV(): void {
        let form : HTMLElement =  (document.querySelector("#FormBox"));
        form.style.visibility = "visible";

        pauseGame();
    }

    function resetGame(): void {
        firstShot = true;
        participants = [];
        ballArray = [];
        createBall();
        createParticipants(participants, getBall(), width, height, getTeamColor1(), getTeamColor2(), minSpeed, maxSpeed, minPrecision, maxPrecision );
        update();
    }

    //handle input from forms
    function handleload(): void {
        console.log("start");
        window.addEventListener("click", firstBallMove);
       
        let teamColor1: HTMLElement = <HTMLElement> document.querySelector("#color1");
        let teamColor2: HTMLElement = <HTMLElement> document.querySelector("#color2");
        teamColor1.addEventListener("change", changeTeamColor1);
        teamColor2.addEventListener("change", changeTeamColor2);

        let paceSliderMin: HTMLElement = <HTMLElement> document.querySelector("#PaceSliderMin");
        let paceSliderMax: HTMLElement = <HTMLElement> document.querySelector("#PaceSliderMax");
        let precisionSliderMin: HTMLElement = <HTMLElement> document.querySelector("#PrecisionSliderMin");
        let precisionSliderMax: HTMLElement = <HTMLElement> document.querySelector("#PrecisionSliderMax");
        paceSliderMin.addEventListener("change", changeMinPace);
        paceSliderMax.addEventListener("change", changeMaxPace);
        precisionSliderMin.addEventListener("change", changeMinPrecision);
        precisionSliderMax.addEventListener("change", changeMaxPrecision);

        canvas = document.querySelector("canvas")!;

        document.addEventListener('keypress',onSpacebar );
        canvas.id = "CanvasID";
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        crc2 = canvas.getContext("2d")!;

        let score1: number = 0;
        let score2: number = 0;

        let score: HTMLElement = document.getElementById("score")!;
        score.innerHTML = "score: " + score1 + " | " + score2;

        participants = [];

        drawBackground();
        drawField();
        createBall();
        createParticipants(participants, getBall(), width, height, getTeamColor1(), getTeamColor2(),  minSpeed, maxSpeed, minPrecision, maxPrecision);
        console.log("creating ball");


        resumeGame();

        window.setInterval(update, 20);

        initialize();
    }

    function update(): void {

        if (gameStatus == false) {
            drawBackground();
            drawField(); 

            for (let player of participants) {

                player.update();
                player.draw();
                player.move(1 / 40);

            }

            ballArray[0].draw();
            ballArray[0].update();
            ballArray[0].move(1 / 40);

            //goal scored on left side
            if (ballArray[0].position.X < width * 0.125 && ballArray[0].position.X < width * 0.13 && ballArray[0].position.Y > height * 0.35 && ballArray[0].position.Y < height * 0.65) {
                resetGame();

                score2++;

                let score: HTMLElement = document.getElementById("score")!;
                score.innerHTML = "current score: " + score1 + " | " + score2;
            }

            
            //goal scored on right side
            if (ballArray[0].position.X > width * 0.870 && ballArray[0].position.X < width * 0.875 && ballArray[0].position.Y > height * 0.35 && ballArray[0].position.Y < height * 0.65) {
                resetGame();

                score1++;

                let score: HTMLElement = document.getElementById("score")!;
                score.innerHTML = "current score: " + score1 + " | " + score2;
            }

           
            if (ballArray[0].position.X > width * 0.9) {
                resetGame();
            }

            if (ballArray[0].position.X < width * 0.1) {
                resetGame();
            }

            if (ballArray[0].position.Y > height * 0.9) {
                resetGame();
            }

            if (ballArray[0].position.Y < height * 0.1) {
                resetGame();
            }
        }

        else {
            return;
        }
    }

    export function moveBall(_newDir: Vector): void {
    
        ballArray[0].setVelocity(_newDir);
    }

    function firstBallMove(_evt: MouseEvent): void {
        if(firstShot){
            let dir: Vector = Vector.getDifference(new Vector(_evt.x, _evt.y), getBall().position);
            dir = dir.normalize();
            dir.scale(50);
            moveBall(dir);

            window.removeEventListener("click", firstBallMove);
            firstShot = false;
        }
    }


    function createBall(): void {

        let ballPosition: Vector = new Vector(width * 0.5, height * 0.5);
        let ballVelocity: Vector = new Vector(0, 0);
        let color: string = "red";

        let ball: Ball = new Ball(ballPosition, ballVelocity, color);

        ball.draw();

        ballArray.push(ball);

    }

    function drawBackground(): void {
        
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.translate(0, 0);
        crc2.rect(0, 0, width, height);
        crc2.lineWidth = 3;
        crc2.fillStyle = "#44e841";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
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
        
        //left goal
        crc2.beginPath();
        crc2.fillRect(10,200,25,50);

        //right goal
        crc2.beginPath();
        crc2.fillRect(840,200,-25,50);


    }

    
    function initialize(): void {

        canvas.addEventListener("mousedown", function(evt: MouseEvent): void {

            let x: number = evt.clientX;
            let y: number = evt.clientY;

            let playerClicked: Player | null = null;
            for (let player of participants) {

                if(player instanceof  Player){
                if (player.checkClick(x, y) == true) {
                    playerClicked = player;
                }
            }
            }

            if (playerClicked) {
                formStatusV();
            }
            else {
                return;
            }
        });
    }

    function getTeamColor1() :  string
    {
        let teamColor1 : HTMLInputElement =  <HTMLInputElement>document.getElementById("color1");

        return  teamColor1.value;
    }

    function onSpacebar(event: KeyboardEvent) : void
    {
        if(event.key == " "){
           resetGame();
        }
    }

    function changeTeamColor1() : void
    {
        let teamColor1 : HTMLInputElement =  <HTMLInputElement>document.getElementById("color1");
        var color =  teamColor1.value;

        for (let player of participants) {

            if(player instanceof  Player){
                if(player.team == 1)
                {
                    player.tricotcolor = color;
                }
            }
        }
    }

    function getTeamColor2() :  string
    {
        let teamColor2 : HTMLInputElement =  <HTMLInputElement>document.getElementById("color2");

        return  teamColor2.value;
    }

    function changeTeamColor2() : void
    {
        let teamColor2 : HTMLInputElement =  <HTMLInputElement>document.getElementById("color2");

        var color =  teamColor2.value;

        for (let player of participants) {

            if(player instanceof  Player){
                if(player.team == 2)
                {
                    player.tricotcolor = color;
                }
            }
        }
    }

    function changeMaxPrecision() : void
    {
        let element : HTMLInputElement =  <HTMLInputElement>document.getElementById("PrecisionSliderMax");

        maxPrecision =   Number(element.value);

        resetGame();
    }

    function changeMinPrecision() : void
    {
        let element : HTMLInputElement =  <HTMLInputElement>document.getElementById("PrecisionSliderMin");

        minPrecision =   Math.min(  Number(element.value ), maxPrecision);

        element.value = minPrecision + "";
        resetGame();
    }

    function changeMaxPace() : void
    {
        let element : HTMLInputElement =  <HTMLInputElement>document.getElementById("PaceSliderMax");

        maxSpeed =   Number(element.value);
        console.log(maxSpeed);
        resetGame();
    }

    function changeMinPace() : void
    {
        let element : HTMLInputElement =  <HTMLInputElement>document.getElementById("PaceSliderMin");

        minSpeed = Math.min(  Number(element.value ), maxSpeed);
        element.value = minSpeed + "";
        resetGame();
    }
}