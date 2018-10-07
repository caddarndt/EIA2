/*
Aufgabe: Aufgabe 0
Name: Catherina Arndt
Matrikel: 259418
Datum: 07.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A0;
(function (A0) {
    function hallo() {
        var a;
        var a = prompt("Wie ist dein Name?");
        var node = document.getElementById("content");
        node.innerHTML = "Hallo ";
        node.innerHTML += a;
        node.innerHTML += "! Wie geht es dir?";
        console.log("Hallo", a, "!");
    }
    document.addEventListener('DOMContentLoaded', hallo);
})(A0 || (A0 = {}));
//# sourceMappingURL=Aufgabe0.js.map