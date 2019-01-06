var A9Canvas;
(function (A9Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        randomTrees();
        drawChild();
        drawSledChild();
        drawChild2();
        drawSledChild2();
        for (let i = 0; i < 100; i++) {
            let a = Math.floor(Math.random() * crc2.canvas.width);
            let b = Math.floor(Math.random() * crc2.canvas.height);
            drawSnow(a, b);
        }
    }
    function drawSky() {
        crc2.fillStyle = "#aadeff";
        crc2.beginPath();
        crc2.moveTo(0, 530);
        crc2.bezierCurveTo(180, 450, 180, 310, 360, 330);
        crc2.lineTo(320, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
    function drawSun() {
        console.log("sun");
        crc2.fillStyle = "#fff83a";
        crc2.beginPath();
        crc2.arc(30, 30, 60, 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawCloud() {
        crc2.beginPath();
        crc2.moveTo(150, 100);
        crc2.arc(130, 100, 20, 0, 3 * Math.PI);
        crc2.arc(120, 100, 20, 0, 3 * Math.PI);
        crc2.arc(110, 90, 20, 0, 3 * Math.PI);
        crc2.arc(100, 85, 20, 0, 3 * Math.PI);
        crc2.fillStyle = "#E0F2F7";
        crc2.fill();
    }
    function drawCloud2() {
        crc2.beginPath();
        crc2.moveTo(135, 250);
        crc2.arc(135, 250, 20, 0, 2 * Math.PI);
        crc2.arc(150, 240, 20, 0, 2 * Math.PI);
        crc2.arc(150, 260, 20, 0, 2 * Math.PI);
        crc2.moveTo(165, 250);
        crc2.arc(165, 250, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E0F2F7";
        crc2.fill();
    }
    function drawCloud3() {
        crc2.beginPath();
        crc2.moveTo(250, 80);
        crc2.arc(250, 80, 20, 0, 2 * Math.PI);
        crc2.arc(265, 70, 20, 0, 2 * Math.PI);
        crc2.arc(265, 90, 20, 0, 2 * Math.PI);
        crc2.moveTo(280, 80);
        crc2.arc(280, 80, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E0F2F7";
        crc2.fill();
    }
    function drawSnow(_a, _b) {
        crc2.beginPath();
        crc2.arc(_a, _b, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function randomTrees() {
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            crc2.beginPath();
            crc2.moveTo(0, 600);
            crc2.bezierCurveTo(180, 450, 180, 310, 360, 330);
            if (crc2.isPointInPath(x, y)) {
                drawTrees(x, y);
            }
            else {
                i--;
            }
        }
    }
    function drawTrees(_x, _y) {
        console.log("Trees", _x, _y);
        crc2.fillStyle = "#9d4e15";
        crc2.strokeStyle = "#9d4e15";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y + 7.5);
        crc2.lineTo(_x - 5, _y + 7.5);
        crc2.lineTo(_x - 5, _y - 12.5);
        crc2.lineTo(_x + 5, _y - 12.5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#008000";
        crc2.strokeStyle = "#004d00";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x - 30, _y - 10);
        crc2.lineTo(_x, _y - 55);
        crc2.lineTo(_x + 30, _y - 10);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#008000";
        crc2.strokeStyle = "#004d00";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x - 27, _y - 27.5);
        crc2.lineTo(_x, _y - 75);
        crc2.lineTo(_x + 27, _y - 27.5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#008000";
        crc2.strokeStyle = "#004d00";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x - 24, _y - 42);
        crc2.lineTo(_x, _y - 95);
        crc2.lineTo(_x + 24, _y - 42);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawChild() {
        crc2.moveTo(260, 450);
        crc2.beginPath();
        crc2.arc(300, 370, 5, 0, 2 * Math.PI);
        crc2.lineWidth = 3;
        crc2.moveTo(300, 395);
        crc2.lineTo(300, 372);
        crc2.moveTo(300, 382);
        crc2.lineTo(290, 382);
        crc2.moveTo(300, 395);
        crc2.lineTo(290, 400);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }
    function drawSledChild() {
        crc2.strokeStyle = "#9d4e15";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(310, 395);
        crc2.lineTo(280, 405);
        crc2.moveTo(290, 400);
        crc2.lineTo(290, 409);
        crc2.moveTo(302, 398);
        crc2.lineTo(302, 406);
        crc2.moveTo(313, 402);
        crc2.lineTo(270, 415);
        crc2.stroke();
    }
    function drawChild2() {
        crc2.beginPath();
        crc2.arc(120, 550, 5, 0, 2 * Math.PI);
        crc2.lineWidth = 3;
        crc2.moveTo(120, 580);
        crc2.lineTo(120, 554);
        crc2.moveTo(105, 580);
        crc2.lineTo(120, 562);
        crc2.moveTo(114, 595);
        crc2.lineTo(120, 567);
        crc2.moveTo(124, 595);
        crc2.lineTo(120, 567);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }
    function drawSledChild2() {
        crc2.strokeStyle = "#9d4e15";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(110, 585);
        crc2.lineTo(80, 595);
        crc2.moveTo(90, 590);
        crc2.lineTo(90, 599);
        crc2.moveTo(102, 588);
        crc2.lineTo(102, 596);
        crc2.moveTo(113, 592);
        crc2.lineTo(70, 605);
        crc2.stroke();
    }
})(A9Canvas || (A9Canvas = {}));
//# sourceMappingURL=Aufgabe9.js.map