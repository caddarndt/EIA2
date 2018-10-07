/*
Aufgabe: Aufgabe 0
Name: Catherina Arndt
Matrikel: 259418
Datum: 07.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

    function hallo() {
        var a: string;
        var a = prompt("Wie ist dein Name?");
        var node: any = document.getElementById("content");

        node.innerHTML = "Hallo ";
        node.innerHTML += a;
        node.innerHTML += "! Wie geht es dir?";
        console.log("Hallo", a, "!" );
    }

    document.addEventListener('DOMContentLoaded', hallo);

