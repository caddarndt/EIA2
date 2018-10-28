var Aufgabe2besser;
(function (Aufgabe2besser) {
    /*
    Aufgabe: Aufgabe 2
    Name: Catherina Arndt
    Matrikel: 259418
    Datum: 20.10.2018
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    Er wurde nicht kopiert und auch nicht diktiert.
    */
    function uno() {
        let deck = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "rR", "rR", "rA", "rA", "r+2", "r+2",
            "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "gR", "gR", "gA", "gA", "g+2", "g+2",
            "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "bR", "bR", "bA", "bA", "b+2", "b+2",
            "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "yR", "yR", "yA", "yA", "y+2", "y+2",
            "s+4", "s+4", "s+4", "s+4", "sChoice", "sChoice", "sChoice", "sChoice"];
        let p;
        let Cards = prompt("Mit wie vielen Karten willst du spielen?");
        p = Number(Cards);
        for (let i = 0; i < p; i++) {
            let random = Math.floor(Math.random() * deck.length) + 1;
            let color = deck[random].substr(0, 1);
            if (color == "r") {
                color = "#ff0c0c";
            }
            if (color == "g") {
                color = "#4c0cff";
            }
            if (color == "b") {
                color = "#26f70e";
            }
            if (color == "y") {
                color = "#fbff23";
            }
            if (color == "s") {
                color = "#000000";
            }
            let value = deck[random].substr(1);
            buildCards(color, value, i);
            deck.splice(random, 1);
            function buildCards(_color, _n, _i) {
                let div = document.createElement("div");
                document.body.appendChild(div);
                div.setAttribute("class", "hand");
                document.getElementById("a" + _i).innerHTML += _n;
                let s = div.style;
                s.backgroundColor = _color;
                if (_color == "#000000" || _color == "#26f70e") {
                    s.color = "white";
                }
            }
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
    document.addEventListener("DOMContentLoaded", (uno));
})(Aufgabe2besser || (Aufgabe2besser = {}));
//# sourceMappingURL=Aufgabe21.js.map