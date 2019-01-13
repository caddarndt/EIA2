var A10Canvas;
(function (A10Canvas) {
    window.addEventListener("load", init);
    let snowflakes = [];
    let childsDown = [];
    let childsUp = [];
    let fps = 25;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        A10Canvas.crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        randomTrees();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        imgData = A10Canvas.crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateChildDown();
        generateChildUp();
        update();
    }
    function update() {
        A10Canvas.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);
        for (let i = 0; i < snowflakes.length; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < childsDown.length; i++) {
            let childd = childsDown[i];
            childd.move();
            childd.draw();
        }
        for (let i = 0; i < childsUp.length; i++) {
            let childu = childsUp[i];
            childu.move();
            childu.draw();
        }
    }
    function drawSun() {
        A10Canvas.crc2.fillStyle = "#fff83a";
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.arc(30, 30, 60, 0, 2 * Math.PI);
        A10Canvas.crc2.fill();
    }
    function drawSky() {
        A10Canvas.crc2.fillStyle = "#aadeff";
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(0, 530);
        A10Canvas.crc2.bezierCurveTo(180, 450, 180, 310, 360, 330);
        A10Canvas.crc2.lineTo(360, 0);
        A10Canvas.crc2.lineTo(0, 0);
        A10Canvas.crc2.closePath();
        A10Canvas.crc2.lineWidth = 2;
        A10Canvas.crc2.stroke();
        A10Canvas.crc2.fill();
    }
    function drawCloud1() {
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(150, 100);
        A10Canvas.crc2.arc(130, 100, 20, 0, 3 * Math.PI);
        A10Canvas.crc2.arc(120, 100, 20, 0, 3 * Math.PI);
        A10Canvas.crc2.arc(110, 90, 20, 0, 3 * Math.PI);
        A10Canvas.crc2.arc(100, 85, 20, 0, 3 * Math.PI);
        A10Canvas.crc2.fillStyle = "#E0F2F7";
        A10Canvas.crc2.fill();
    }
    function drawCloud2() {
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(135, 250);
        A10Canvas.crc2.arc(135, 250, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.arc(150, 240, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.arc(150, 260, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.moveTo(165, 250);
        A10Canvas.crc2.arc(165, 250, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.fillStyle = "#E0F2F7";
        A10Canvas.crc2.fill();
    }
    function drawCloud3() {
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(250, 80);
        A10Canvas.crc2.arc(250, 80, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.arc(265, 70, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.arc(265, 90, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.moveTo(280, 80);
        A10Canvas.crc2.arc(280, 80, 20, 0, 2 * Math.PI);
        A10Canvas.crc2.fillStyle = "#E0F2F7";
        A10Canvas.crc2.fill();
    }
    function randomTrees() {
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * A10Canvas.crc2.canvas.width;
            let y = Math.random() * A10Canvas.crc2.canvas.height;
            A10Canvas.crc2.beginPath();
            A10Canvas.crc2.moveTo(0, 600);
            A10Canvas.crc2.bezierCurveTo(180, 450, 180, 310, 360, 330);
            if (A10Canvas.crc2.isPointInPath(x, y)) {
                drawTrees(x, y);
            }
            else {
                i--;
            }
        }
    }
    function drawTrees(_x, _y) {
        console.log("Trees", _x, _y);
        A10Canvas.crc2.fillStyle = "#9d4e15";
        A10Canvas.crc2.strokeStyle = "#9d4e15";
        A10Canvas.crc2.lineWidth = 1;
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(_x + 5, _y + 7.5);
        A10Canvas.crc2.lineTo(_x - 5, _y + 7.5);
        A10Canvas.crc2.lineTo(_x - 5, _y - 12.5);
        A10Canvas.crc2.lineTo(_x + 5, _y - 12.5);
        A10Canvas.crc2.closePath();
        A10Canvas.crc2.fill();
        A10Canvas.crc2.stroke();
        A10Canvas.crc2.fillStyle = "#008000";
        A10Canvas.crc2.strokeStyle = "#004d00";
        A10Canvas.crc2.lineWidth = 1;
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(_x - 30, _y - 10);
        A10Canvas.crc2.lineTo(_x, _y - 55);
        A10Canvas.crc2.lineTo(_x + 30, _y - 10);
        A10Canvas.crc2.closePath();
        A10Canvas.crc2.fill();
        A10Canvas.crc2.stroke();
        A10Canvas.crc2.fillStyle = "#008000";
        A10Canvas.crc2.strokeStyle = "#004d00";
        A10Canvas.crc2.lineWidth = 1;
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(_x - 27, _y - 27.5);
        A10Canvas.crc2.lineTo(_x, _y - 75);
        A10Canvas.crc2.lineTo(_x + 27, _y - 27.5);
        A10Canvas.crc2.closePath();
        A10Canvas.crc2.fill();
        A10Canvas.crc2.stroke();
        A10Canvas.crc2.fillStyle = "#008000";
        A10Canvas.crc2.strokeStyle = "#004d00";
        A10Canvas.crc2.lineWidth = 1;
        A10Canvas.crc2.beginPath();
        A10Canvas.crc2.moveTo(_x - 24, _y - 42);
        A10Canvas.crc2.lineTo(_x, _y - 95);
        A10Canvas.crc2.lineTo(_x + 24, _y - 42);
        A10Canvas.crc2.closePath();
        A10Canvas.crc2.fill();
        A10Canvas.crc2.stroke();
    }
    function generateSnow() {
        for (let i = 0; i < 500; i++) {
            let snowflake = new A10Canvas.Snow();
            snowflake.xPos = Math.random() * 700;
            snowflake.yPos = Math.random() * 1100;
            snowflake.draw();
            snowflakes.push(snowflake);
        }
    }
    function generateChildDown() {
        for (let i = 0; i < 5; i++) {
            let childd = new A10Canvas.ChildDown();
            childd.xPos = Math.random() * 100 + 200;
            childd.yPos = Math.random() * 250 + 400;
            childd.color = childd.getRandomColor();
            childd.draw();
            childsDown.push(childd);
        }
    }
    function generateChildUp() {
        for (let i = 0; i < 5; i++) {
            let childu = new A10Canvas.ChildUp();
            childu.xPos = Math.random() * 100 + 200;
            childu.yPos = Math.random() * 100 + 550;
            childu.color = childu.getRandomColor();
            childu.draw();
            childsUp.push(childu);
        }
    }
})(A10Canvas || (A10Canvas = {}));
//# sourceMappingURL=main.js.map