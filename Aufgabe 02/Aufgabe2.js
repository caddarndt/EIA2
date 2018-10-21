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
    let colorsarray = [names.red, names.yellow, names.green, names.blue];
    let randc = colorsarray[Math.floor(Math.random() * colorsarray.length)];
    let namesarray = [names.zero, names.one, names.two, names.three, names.four, names.five, names.six, names.seven, names.eight, names.nine];
    let randn = namesarray[Math.floor(Math.random() * namesarray.length)];
    let specialarray = [names.take2, names.reverse, names.missturn];
    let rands = specialarray[Math.floor(Math.random() * specialarray.length)];
    let blackcarray = [names.choosec, names.take4andc];
    let randb = blackcarray[Math.floor(Math.random() * blackcarray.length)];
    function uno() {
        let p;
        let a = prompt("Mit wie vielen Karten willst du spielen?");
        p = Number(a);
        for (let i = 0; i >= 5; i++) {
            switch (Math.floor(Math.random() * 3) + 1) {
                case 1:
                    buildNormalCard(randc, randn, p);
                case 2:
                    buildSpecialCard(randc, rands, p);
                case 3:
            }
        }
    }
    function buildNormalCard(randc, randn, p) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + p);
        document.getElementById("a" + p).innerHTML += randn;
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = randc;
        s.width = 60 + "px";
        s.height = 120 + "px";
        s.bottom = 40 + "px";
        s.borderRadius = 5 + "px";
        s.color = "white";
    }
    function buildSpecialCard(randc, rands, p) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + p);
        document.getElementById("a" + p).innerHTML += rands;
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = randc;
        s.width = 60 + "px";
        s.height = 120 + "px";
        s.bottom = 40 + "px";
        s.borderRadius = 5 + "px";
        s.color = "white";
    }
    function buildBlackCard(randb, p) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + p);
        document.getElementById("a" + p).innerHTML += randb;
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = "#000000";
        s.width = 60 + "px";
        s.height = 120 + "px";
        s.bottom = 40 + "px";
        s.borderRadius = 5 + "px";
        s.color = "white";
    }
    function Stapel(_n) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = "#f0f0f0";
        s.width = 50 + "px";
        s.height = 130 + "px";
        s.left = (_n + 0.5) * 20 + "px";
        s.top = (_n + 0.5) * 10 + "px";
        s.borderRadius = 5 + "px";
    }
    function Ablage() {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "Ablage");
        document.getElementById("Ablage").innerHTML += "Ablage";
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = "white";
        s.width = 70 + "px";
        s.height = 150 + "px";
        s.right = 50 + "px";
        s.top = 20 + "px";
    }
    for (let i = 0; i < 3; i++) {
        Stapel(i);
    }
    Ablage();
    document.addEventListener('DOMContentLoaded', uno);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map