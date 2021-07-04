namespace final {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let fps: number = 25;
    let imgData: ImageData;


    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        crc2.fillStyle = "#44e841";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        drawField();
        drawGoalLeft();
        drawGoalRight();
        //drawBall();

        imgData = crc2.getImageData(0, 0, 850, 450);
        
        update();

        
        function drawField(): void {
            crc2.strokeStyle = "#ffffff";

            // outer rectangle
            crc2.beginPath();
            crc2.lineTo(35,415);
            crc2.lineTo(815,415);
            crc2.lineTo(815,35);
            crc2.lineTo(35,35);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            // middle line
            crc2.beginPath();
            crc2.lineTo(425,415);
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
            crc2.lineTo(35,160);
            crc2.lineTo(100,160);
            crc2.lineTo(100,290);
            crc2.lineTo(35,290);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            crc2.beginPath();
            crc2.arc(130, 225, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            crc2.beginPath();
            crc2.lineTo(35,100);
            crc2.lineTo(175,100);
            crc2.lineTo(175,350);
            crc2.lineTo(35,350);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            crc2.beginPath();
            crc2.bezierCurveTo(175, 175, 225, 225, 175, 275);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();


            // penalty box right
            crc2.beginPath();
            crc2.lineTo(815,160);
            crc2.lineTo(740,160);
            crc2.lineTo(740,290);
            crc2.lineTo(815,290);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            crc2.beginPath();
            crc2.arc(710, 225, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            crc2.beginPath();
            crc2.lineTo(815,100);
            crc2.lineTo(675,100);
            crc2.lineTo(675,350);
            crc2.lineTo(815,350);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();

            crc2.beginPath();
            crc2.bezierCurveTo(675, 175, 625, 225, 675, 275);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke(); 
        }

        function drawGoalLeft(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.lineTo(10,200);
            crc2.lineTo(35,200);
            crc2.lineTo(35,250);
            crc2.lineTo(10,250);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
        }

        function drawGoalRight(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.lineTo(840,200);
            crc2.lineTo(815,200);
            crc2.lineTo(815,250);
            crc2.lineTo(840,250);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
        }

        function drawBall(): void {
            crc2.fillStyle = "#383838";
            crc2.beginPath();
            crc2.arc(425, 225, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
        }     

    }

    //move the ball to click position 

    var theBall = document.querySelector("#ball");
    var container = document.querySelector("#ballContainer");
    
    if(container) { 
        
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

    

    
    function update(): void {
        crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);

    }

 
}

