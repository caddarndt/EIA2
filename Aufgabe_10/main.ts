namespace A10Canvas {
   window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let snowflakes: Snow[] = [];
    let childsDown: ChildDown[] = [];
    let childsUp: ChildUp[] = [];

    let fps: number = 25;

    let imgData: ImageData;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        drawSky();
        drawSun();
        randomTrees();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        imgData = crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateChildDown();
        generateChildUp();

        update();


    }

    function update(): void {
        crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);



        for (let i: number = 0; i < snowflakes.length; i++) {
            let snowflake: Snow = snowflakes[i];
            snowflake.move();
            snowflake.draw();


        }

        for (let i: number = 0; i < childsDown.length; i++) {
            let childd: ChildDown = childsDown[i];
            childd.move();
            childd.draw();

        }

        for (let i: number = 0; i < childsUp.length; i++) {
            let childu: ChildUp = childsUp[i];
            childu.move();
            childu.draw();
        }

    }

    function drawSun(): void {
        crc2.fillStyle = "#fff83a";
        crc2.beginPath();
        crc2.arc(30, 30, 60, 0, 2 * Math.PI);
        crc2.fill();
    }

    
    function drawSky(): void {
        crc2.fillStyle = "#aadeff";
        crc2.beginPath();
        crc2.moveTo(0, 530);
        crc2.bezierCurveTo(180, 450, 180, 310, 360, 330);
        crc2.lineTo(360, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }

    function drawCloud1(): void {
        crc2.beginPath();
        crc2.moveTo(150, 100);
        crc2.arc(130, 100, 20, 0, 3 * Math.PI);
        crc2.arc(120, 100, 20, 0, 3 * Math.PI);
        crc2.arc(110, 90, 20, 0, 3 * Math.PI);
        crc2.arc(100, 85, 20, 0, 3 * Math.PI);
        crc2.fillStyle = "#E0F2F7";
        crc2.fill();
    }

    function drawCloud2(): void {
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
    
    function drawCloud3(): void {
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

    function randomTrees(): void {
        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

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

    function drawTrees(_x: number, _y: number): void {
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

    function generateSnow(): void {

        for (let i: number = 0; i < 500; i++) {
            let snowflake: Snow = new Snow();
            snowflake.xPos = Math.random() * 700;
            snowflake.yPos = Math.random() * 1100;
            
            snowflake.draw();

            snowflakes.push(snowflake);

        }

    }

    function generateChildDown(): void {

        for (let i: number = 0; i < 5; i++) {
            let childd: ChildDown = new ChildDown();
            childd.xPos = Math.random() * 100 + 200;
            childd.yPos = Math.random() * 250 + 400;
            childd.color = childd.getRandomColor();
            childd.draw();

            childsDown.push(childd);
        }
    }

    function generateChildUp(): void {

        for (let i: number = 0; i < 5; i++) {
            let childu: ChildUp = new ChildUp();
            childu.xPos = Math.random() * 100 + 200;
            childu.yPos = Math.random() * 100 + 550;
            childu.color = childu.getRandomColor();
            childu.draw();

            childsUp.push(childu);
        }
    }

}
