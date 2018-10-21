var Aufgabe2;
(function (Aufgabe2) {
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
        reverse: "Richtungswechsel",
        missturn: "Aussetzen",
        choosec: "Farbwahl",
        take4andc: "Nimm 4 und Farbwahl",
    };
    /* Arrays f�r die verschiedenen Karten, plus random funktion um zuf�lliges Objekt auszuw�hlen */
    let colorsarray = [names.red, names.yellow, names.green, names.blue];
    let randc = colorsarray[Math.floor(Math.random() * colorsarray.length)];
    let namesarray = [names.zero, names.one, names.two, names.three, names.four, names.five, names.six, names.seven, names.eight, names.nine];
    let randn = namesarray[Math.floor(Math.random() * namesarray.length)];
    let specialarray = [names.take2, names.reverse, names.missturn];
    let rands = specialarray[Math.floor(Math.random() * specialarray.length)];
    let blackcarray = [names.choosec, names.take4andc];
    let randb = blackcarray[Math.floor(Math.random() * blackcarray.length)];
    /* Hauptfunktion */
    function uno() {
        let p;
        let a = prompt("Mit wie vielen Karten willst du spielen?");
        p = Number(a);
        for (let i = 0; i < p; i++) {
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    buildNormalCard(randc, randn, i);
                    break;
                case 1:
                    buildSpecialCard(randc, rands, i);
                    break;
                case 2:
                    buildBlackCard(randb, i);
                    break;
            }
        }
    }
    /* Funktionen zum Bau der Karten */
    function buildNormalCard(randc, randn, i) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + i);
        document.getElementById("a" + i).innerHTML += randn;
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = randc;
        s.width = 70 + "px";
        s.height = 120 + "px";
        s.bottom = 40 + "px";
        s.left = (i + 0.5) * 140 + "px";
        s.borderRadius = 5 + "px";
        s.color = "white";
    }
    function buildSpecialCard(randc, rands, i) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + i);
        document.getElementById("a" + i).innerHTML += rands;
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = randc;
        s.width = 70 + "px";
        s.height = 120 + "px";
        s.bottom = 40 + "px";
        s.left = (i + 0.5) * 140 + "px";
        s.borderRadius = 5 + "px";
        s.color = "white";
    }
    function buildBlackCard(randb, i) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + i);
        document.getElementById("a" + i).innerHTML += randb;
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = "#000000";
        s.width = 70 + "px";
        s.height = 120 + "px";
        s.bottom = 40 + "px";
        s.left = (i + 0.5) * 140 + "px";
        s.borderRadius = 5 + "px";
        s.color = "white";
    }
    document.addEventListener('DOMContentLoaded', uno);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map