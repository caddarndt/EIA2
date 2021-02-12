var finalCanvas;
(function (finalCanvas) {
    //Eventlistener
    window.addEventListener("load", init);
    window.addEventListener("click", placeRocket);
    var crc2;
    //init, hintergrund zeichnen
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = '#04162e';
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < 100; i++) {
            var a = Math.floor(Math.random() * crc2.canvas.width);
            var b = Math.floor(Math.random() * crc2.canvas.height);
            drawStars(a, b);
        }
    }
    //deko sterne
    function drawStars(_a, _b) {
        crc2.beginPath();
        crc2.arc(_a, _b, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    //raketen platzieren
    function placeRocket(_event) {
        var x = _event.clientX;
        var y = _event.clientY;
        drawRockets(x, y);
    }
    //raketen zeichnen
    function drawRockets(_x, _y) {
        console.log("Rockets", _x, _y);
        crc2.fillStyle = "#ffffff";
        crc2.strokeStyle = "#9d4e15";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x + 10, _y + 25);
        crc2.lineTo(_x - 10, _y + 25);
        crc2.lineTo(_x - 10, _y - 12.5);
        crc2.lineTo(_x + 10, _y - 12.5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#fc2121";
        crc2.strokeStyle = "#ad0707";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y - 5);
        crc2.lineTo(_x, _y - 35);
        crc2.lineTo(_x + 20, _y - 5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
})(finalCanvas || (finalCanvas = {}));
