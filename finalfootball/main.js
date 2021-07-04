var final;
(function (final) {
    window.addEventListener("load", init);
    var fps = 25;
    var imgData;
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        final.crc2 = canvas.getContext("2d");
        final.crc2.fillStyle = "#44e841";
        final.crc2.fillRect(0, 0, final.crc2.canvas.width, final.crc2.canvas.height);
        drawField();
        drawGoalLeft();
        drawGoalRight();
        //drawBall();
        imgData = final.crc2.getImageData(0, 0, 850, 450);
        update();
        function drawField() {
            final.crc2.strokeStyle = "#ffffff";
            // outer rectangle
            final.crc2.beginPath();
            final.crc2.lineTo(35, 415);
            final.crc2.lineTo(815, 415);
            final.crc2.lineTo(815, 35);
            final.crc2.lineTo(35, 35);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            // middle line
            final.crc2.beginPath();
            final.crc2.lineTo(425, 415);
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
            final.crc2.lineTo(35, 160);
            final.crc2.lineTo(100, 160);
            final.crc2.lineTo(100, 290);
            final.crc2.lineTo(35, 290);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.beginPath();
            final.crc2.arc(130, 225, 2, 0, 2 * Math.PI);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.beginPath();
            final.crc2.lineTo(35, 100);
            final.crc2.lineTo(175, 100);
            final.crc2.lineTo(175, 350);
            final.crc2.lineTo(35, 350);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.beginPath();
            final.crc2.bezierCurveTo(175, 175, 225, 225, 175, 275);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            // penalty box right
            final.crc2.beginPath();
            final.crc2.lineTo(815, 160);
            final.crc2.lineTo(740, 160);
            final.crc2.lineTo(740, 290);
            final.crc2.lineTo(815, 290);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.beginPath();
            final.crc2.arc(710, 225, 2, 0, 2 * Math.PI);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.beginPath();
            final.crc2.lineTo(815, 100);
            final.crc2.lineTo(675, 100);
            final.crc2.lineTo(675, 350);
            final.crc2.lineTo(815, 350);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.beginPath();
            final.crc2.bezierCurveTo(675, 175, 625, 225, 675, 275);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
        }
        function drawGoalLeft() {
            final.crc2.fillStyle = "#ffffff";
            final.crc2.beginPath();
            final.crc2.lineTo(10, 200);
            final.crc2.lineTo(35, 200);
            final.crc2.lineTo(35, 250);
            final.crc2.lineTo(10, 250);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.fill();
        }
        function drawGoalRight() {
            final.crc2.fillStyle = "#ffffff";
            final.crc2.beginPath();
            final.crc2.lineTo(840, 200);
            final.crc2.lineTo(815, 200);
            final.crc2.lineTo(815, 250);
            final.crc2.lineTo(840, 250);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.fill();
        }
        function drawBall() {
            final.crc2.fillStyle = "#383838";
            final.crc2.beginPath();
            final.crc2.arc(425, 225, 15, 0, 2 * Math.PI);
            final.crc2.closePath();
            final.crc2.lineWidth = 3;
            final.crc2.stroke();
            final.crc2.fill();
        }
    }
    //move the ball to click position 
    var theBall = document.querySelector("#ball");
    var container = document.querySelector("#ballContainer");
    if (container) {
        container.addEventListener("click", getClickPosition, false);
    }
    function getClickPosition(e) {
        var parentPosition = getPosition(container);
        var xPosition = e.clientX - parentPosition.x - (theBall.clientWidth / 2);
        var yPosition = e.clientY - parentPosition.y - (theBall.clientHeight / 2);
        this.theBall.style.left = xPosition + "px";
        this.theBall.style.top = yPosition + "px";
    }
    // Helper function to get an element's exact position
    function getPosition(el) {
        var xPos = 0;
        var yPos = 0;
        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                var yScroll = el.scrollTop || document.documentElement.scrollTop;
                xPos += (el.offsetLeft - xScroll + el.clientLeft);
                yPos += (el.offsetTop - yScroll + el.clientTop);
            }
            else {
                // for all other non-BODY elements
                xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPos += (el.offsetTop - el.scrollTop + el.clientTop);
            }
            el = el.offsetParent;
        }
        return {
            x: xPos,
            y: yPos
        };
    }
    function update() {
        final.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);
    }
})(final || (final = {}));
