var Aufgabe2;
(function (Aufgabe2) {
    /*
    Aufgabe: Aufgabe 2
    Name: Catherina Arndt
    Matrikel: 259418
    Datum: 20.10.2018
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    Er wurde nicht kopiert und auch nicht diktiert.
    */
    /* Interface Karten */
    function uno() {
        let names = {
            red: "#ff0c0c",
            yellow: "#fbff23",
            green: "#4c0cff",
            blue: "#26f70e",
            zero: "0",
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8",
            nine: "9",
            take2: "Nimm 2",
            reverse: "Reverse",
            missturn: "Aussetzen",
            choosec: "Farbwahl",
            take4andc: "Nimm 4 und Farbwahl",
        };
        /* Arrays f�r die verschiedenen Karten */
        let colorsarray = [names.red, names.yellow, names.green, names.blue];
        let namesarray = [names.zero, names.one, names.two, names.three, names.four, names.five, names.six, names.seven, names.eight, names.nine];
        let specialarray = [names.take2, names.reverse, names.missturn];
        let blackcarray = [names.choosec, names.take4andc];
        /* Hauptfunktion */
        let p;
        let a = prompt("Mit wie vielen Karten willst du spielen?");
        p = Number(a);
        for (let i = 0; i < p; i++) {
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    buildNormalCard(i);
                    break;
                case 1:
                    buildSpecialCard(i);
                    break;
                case 2:
                    buildBlackCard(i);
                    break;
            }
        }
        /* Funktionen zum Bau der Karten */
        function buildNormalCard(i) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + i);
            document.getElementById("a" + i).innerHTML += namesarray[Math.floor(Math.random() * namesarray.length)];
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = colorsarray[Math.floor(Math.random() * colorsarray.length)];
            s.width = 90 + "px";
            s.height = 140 + "px";
            s.bottom = 40 + "px";
            s.left = (i + 0.5) * 100 + "px";
            s.borderRadius = 5 + "px";
            s.color = "black";
        }
        function buildSpecialCard(i) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + i);
            document.getElementById("a" + i).innerHTML += specialarray[Math.floor(Math.random() * specialarray.length)];
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = colorsarray[Math.floor(Math.random() * colorsarray.length)];
            s.width = 90 + "px";
            s.height = 140 + "px";
            s.bottom = 40 + "px";
            s.left = (i + 0.5) * 100 + "px";
            s.borderRadius = 5 + "px";
            s.color = "black";
        }
        function buildBlackCard(i) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + i);
            document.getElementById("a" + i).innerHTML += blackcarray[Math.floor(Math.random() * blackcarray.length)];
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#000000";
            s.width = 90 + "px";
            s.height = 140 + "px";
            s.bottom = 40 + "px";
            s.left = (i + 0.5) * 100 + "px";
            s.borderRadius = 5 + "px";
            s.color = "white";
        }
        function Ablagestapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablagestapel");
            document.getElementById("Ablagestapel").innerHTML += "Ablagestapel";
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "white";
            s.width = 90 + "px";
            s.height = 140 + "px";
            s.left = 50 + "px";
            s.top = 20 + "px";
            s.borderRadius = 5 + "px";
            s.color = "black";
        }
        function Aufnahmestapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Aufnahmestapel");
            document.getElementById("Aufnahmestapel").innerHTML += "Aufnahme- stapel";
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "black";
            s.width = 90 + "px";
            s.height = 140 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
            s.borderRadius = 5 + "px";
            s.color = "white";
        }
        Ablagestapel();
        Aufnahmestapel();
    }
    document.addEventListener('DOMContentLoaded', uno);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map