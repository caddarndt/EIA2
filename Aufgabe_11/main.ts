namespace A11Canvas {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let objects: Draw[] = [];

    let imagedata: ImageData;


    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        drawSky();
        drawSun();
        drawTrees();
        drawSnow();
        drawClouds();
        drawChild();

        imagedata = crc2.getImageData(0, 0, canvas.width, canvas.height);

        update();



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




        function drawSun(): void {
            crc2.fillStyle = "#fff83a";
            crc2.beginPath();
            crc2.arc(30, 30, 60, 0, 2 * Math.PI);
            crc2.fill();
        }

        function drawClouds(): void {
            var gradient = crc2.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "#ECE9E6");
            gradient.addColorStop(0.5, "#FFFFFF");


            crc2.beginPath();
            crc2.moveTo(200, 50);
            crc2.arc(195, 50, 12, 0, 2 * Math.PI);
            crc2.arc(210, 50, 12, 0, 2 * Math.PI);
            crc2.arc(187, 50, 12, 0, 2 * Math.PI);
            crc2.arc(200, 45, 12, 0, 2 * Math.PI);
            crc2.fillStyle = gradient
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(100, 150);
            crc2.arc(97, 150, 12, 0, 2 * Math.PI);
            crc2.arc(105, 150, 12, 0, 2 * Math.PI);
            crc2.arc(83, 150, 12, 0, 2 * Math.PI);
            crc2.arc(105, 145, 12, 0, 2 * Math.PI);
            crc2.arc(95, 145, 12, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(140, 160);
            crc2.arc(137, 160, 16, 0, 2 * Math.PI);
            crc2.arc(145, 160, 16, 0, 2 * Math.PI);
            crc2.arc(130, 160, 16, 0, 2 * Math.PI);
            crc2.arc(145, 155, 16, 0, 2 * Math.PI);
            crc2.arc(125, 165, 16, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.closePath();



            crc2.beginPath();
            crc2.moveTo(300, 70);
            crc2.arc(295, 70, 9, 0, 2 * Math.PI);
            crc2.arc(305, 70, 20, 0, 2 * Math.PI);
            crc2.arc(290, 70, 15, 0, 2 * Math.PI);
            crc2.arc(310, 80, 18, 0, 2 * Math.PI);
            crc2.arc(300, 75, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.closePath();

        }

        function update(): void {
            crc2.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / 30);

            for (let i: number = 0; i < objects.length; i++) {
                let object: Draw = objects[i];
                object.draw();
                object.move();
            }
        }
        function drawTrees(): void {
            for (let i: number = 0; i < 10; i++) {
                let tree: Tree = new Tree();
                objects.push(tree);
            }
        }

        function drawSnow(): void {
            for (let i: number = 0; i < 50; i++) {

                let snowflake: Snow = new Snow();
                objects.push(snowflake);
            }
        }



        function drawChild(): void {
            for (let i: number = 0; i < 10; i++) {

                let child: Child = new Child();
                objects.push(child);
            }
        }

    }
}