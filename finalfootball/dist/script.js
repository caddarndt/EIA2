var final;
(function (final) {
    window.addEventListener("load", handleload);
    var score1 = 0;
    var score2 = 0;
    var width = 850;
    var height = 450;
    var canvasWidth = width;
    var canvasHeight = height;
    var firstShot = true;
    var minSpeed = 10;
    var maxSpeed = 15;
    var minPrecision = 20;
    var maxPrecision = 40;
    var participants = [];
    var playerMove = [];
    var ballArray = [];
    function getBall() {
        return ballArray[0];
    }
    final.getBall = getBall;
    function pauseGame() {
        console.log("game was paused");
        final.gameStatus = true;
    }
    final.pauseGame = pauseGame;
    function resumeGame() {
        final.gameStatus = false;
        window.addEventListener("click", firstBallMove);
        console.log("game was resumed");
    }
    final.resumeGame = resumeGame;
    function formStatusV() {
        var form = (document.querySelector("#FormBox"));
        form.style.visibility = "visible";
        pauseGame();
    }
    final.formStatusV = formStatusV;
    function resetGame() {
        firstShot = true;
        participants = [];
        ballArray = [];
        createBall();
        final.createParticipants(participants, getBall(), width, height, getTeamColor1(), getTeamColor2(), minSpeed, maxSpeed, minPrecision, maxPrecision);
        update();
    }
    function handleload() {
        console.log("start");
        window.addEventListener("click", firstBallMove);
        var teamColor1 = document.querySelector("#color1");
        var teamColor2 = document.querySelector("#color2");
        teamColor1.addEventListener("change", changeTeamColor1);
        teamColor2.addEventListener("change", changeTeamColor2);
        var paceSliderMin = document.querySelector("#PaceSliderMin");
        var paceSliderMax = document.querySelector("#PaceSliderMax");
        var precisionSliderMin = document.querySelector("#PrecisionSliderMin");
        var precisionSliderMax = document.querySelector("#PrecisionSliderMax");
        paceSliderMin.addEventListener("change", changeMinPace);
        paceSliderMax.addEventListener("change", changeMaxPace);
        precisionSliderMin.addEventListener("change", changeMinPrecision);
        precisionSliderMax.addEventListener("change", changeMaxPrecision);
        final.canvas = document.querySelector("canvas");
        document.addEventListener('keypress', onSpacebar);
        final.canvas.id = "CanvasID";
        final.canvas.width = canvasWidth;
        final.canvas.height = canvasHeight;
        final.crc2 = final.canvas.getContext("2d");
        var score1 = 0;
        var score2 = 0;
        var score = document.getElementById("score");
        score.innerHTML = "score: " + score1 + " | " + score2;
        participants = [];
        drawBackground();
        drawField();
        createBall();
        final.createParticipants(participants, getBall(), width, height, getTeamColor1(), getTeamColor2(), minSpeed, maxSpeed, minPrecision, maxPrecision);
        console.log("creating ball");
        resumeGame();
        window.setInterval(update, 20);
        initialize();
    }
    function update() {
        if (final.gameStatus == false) {
            drawBackground();
            drawField();
            for (var _i = 0, participants_1 = participants; _i < participants_1.length; _i++) {
                var player = participants_1[_i];
                player.update();
                player.draw();
                player.move(1 / 40);
            }
            ballArray[0].draw();
            ballArray[0].update();
            ballArray[0].move(1 / 40);
            if (ballArray[0].position.X < width * 0.125 && ballArray[0].position.X < width * 0.13 && ballArray[0].position.Y > height * 0.35 && ballArray[0].position.Y < height * 0.65) {
                resetGame();
                score2++;
                var score = document.getElementById("score");
                score.innerHTML = "current score: " + score1 + " | " + score2;
            }
            if (ballArray[0].position.X > width * 0.870 && ballArray[0].position.X < width * 0.875 && ballArray[0].position.Y > height * 0.35 && ballArray[0].position.Y < height * 0.65) {
                resetGame();
                score1++;
                var score = document.getElementById("score");
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
    function moveBall(_newDir) {
        ballArray[0].setVelocity(_newDir);
    }
    final.moveBall = moveBall;
    function firstBallMove(_evt) {
        if (firstShot) {
            var dir = final.Vector.getDifference(new final.Vector(_evt.x, _evt.y), getBall().position);
            dir = dir.normalize();
            dir.scale(50);
            moveBall(dir);
            window.removeEventListener("click", firstBallMove);
            firstShot = false;
        }
    }
    function createBall() {
        var ballPosition = new final.Vector(width * 0.5, height * 0.5);
        var ballVelocity = new final.Vector(0, 0);
        var color = "red";
        var ball = new final.Ball(ballPosition, ballVelocity, color);
        ball.draw();
        ballArray.push(ball);
    }
    function drawBackground() {
        final.crc2.beginPath();
        final.crc2.moveTo(0, 0);
        final.crc2.translate(0, 0);
        final.crc2.rect(0, 0, width, height);
        final.crc2.lineWidth = 3;
        final.crc2.fillStyle = "#44e841";
        final.crc2.fill();
        final.crc2.stroke();
        final.crc2.closePath();
    }
    function drawField() {
        final.crc2.strokeStyle = "#ffffff";
        final.crc2.beginPath();
        final.crc2.strokeRect(35, 35, 780, 385);
        final.crc2.closePath();
        final.crc2.lineWidth = 3;
        final.crc2.beginPath();
        final.crc2.lineTo(425, 420);
        final.crc2.lineTo(425, 35);
        final.crc2.closePath();
        final.crc2.lineWidth = 3;
        final.crc2.stroke();
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
        final.crc2.beginPath();
        final.crc2.fillRect(10, 200, 25, 50);
        final.crc2.beginPath();
        final.crc2.fillRect(840, 200, -25, 50);
    }
    function initialize() {
        final.canvas.addEventListener("mousedown", function (evt) {
            var x = evt.clientX;
            var y = evt.clientY;
            var playerClicked = null;
            for (var _i = 0, participants_2 = participants; _i < participants_2.length; _i++) {
                var player = participants_2[_i];
                if (player instanceof final.Player) {
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
    function getTeamColor1() {
        var teamColor1 = document.getElementById("color1");
        return teamColor1.value;
    }
    function onSpacebar(event) {
        if (event.key == " ") {
            resetGame();
        }
    }
    function changeTeamColor1() {
        var teamColor1 = document.getElementById("color1");
        var color = teamColor1.value;
        for (var _i = 0, participants_3 = participants; _i < participants_3.length; _i++) {
            var player = participants_3[_i];
            if (player instanceof final.Player) {
                if (player.team == 1) {
                    player.tricotcolor = color;
                }
            }
        }
    }
    function getTeamColor2() {
        var teamColor2 = document.getElementById("color2");
        return teamColor2.value;
    }
    function changeTeamColor2() {
        var teamColor2 = document.getElementById("color2");
        var color = teamColor2.value;
        for (var _i = 0, participants_4 = participants; _i < participants_4.length; _i++) {
            var player = participants_4[_i];
            if (player instanceof final.Player) {
                if (player.team == 2) {
                    player.tricotcolor = color;
                }
            }
        }
    }
    function changeMaxPrecision() {
        var element = document.getElementById("PrecisionSliderMax");
        maxPrecision = Number(element.value);
        resetGame();
    }
    function changeMinPrecision() {
        var element = document.getElementById("PrecisionSliderMin");
        minPrecision = Math.min(Number(element.value), maxPrecision);
        element.value = minPrecision + "";
        resetGame();
    }
    function changeMaxPace() {
        var element = document.getElementById("PaceSliderMax");
        maxSpeed = Number(element.value);
        console.log(maxSpeed);
        resetGame();
    }
    function changeMinPace() {
        var element = document.getElementById("PaceSliderMin");
        minSpeed = Math.min(Number(element.value), maxSpeed);
        element.value = minSpeed + "";
        resetGame();
    }
})(final || (final = {}));
//# sourceMappingURL=script.js.map