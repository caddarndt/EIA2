var Endabgabe;
(function (Endabgabe) {
    /*
    Aufgabe: Endabgabe
    Name: Catherina Arndt
    Matrikel: 259418
    Datum: 15.02.2019
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    Er wurde nicht kopiert und auch nicht diktiert.
    */
    let deck = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "rReverse", "rReverse", "rStop", "rStop", "r+2", "r+2",
        "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "gReverse", "gReverse", "gStop", "gStop", "g+2", "g+2",
        "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "bReverse", "bReverse", "bStop", "bStop", "b+2", "b+2",
        "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "yReverse", "yReverse", "yStop", "yStop", "y+2", "y+2",
        "s+4", "s+4", "s+4", "s+4", "sChoice", "sChoice", "sChoice", "sChoice"];
    let hand = [];
    let pile = [];
    let computer = [];
    /* Hauptfunktion */
    function uno() {
        let handCards = 7;
        let computerCards = 7;
        for (let i = 0; i < handCards; i++) {
            let maxNumber = deck.length;
            let randomNum = getRandom(maxNumber);
            let card = deck.splice(randomNum, 1)[0];
            hand.push(card);
            console.log(hand);
        }
        for (let i = 0; i < computerCards; i++) {
            let maxNumber = deck.length;
            let randomNum = getRandom(maxNumber);
            let card = deck.splice(randomNum, 1)[0];
            computer.push(card);
            console.log(computer);
        }
        createCards(hand);
        createComputerCards(computer);
        function createCards(_values) {
            for (let i = 0; i < _values.length; i++) {
                let color = _values[i].substr(0, 1);
                if (color == "r") {
                    color = "red";
                }
                if (color == "g") {
                    color = "green";
                }
                if (color == "b") {
                    color = "blue";
                }
                if (color == "y") {
                    color = "yellow";
                }
                if (color == "s") {
                    color = "black";
                }
                let value = _values[i].substr(1);
                let div = document.createElement("div");
                document.getElementById("handkarten").appendChild(div);
                div.setAttribute("class", "cards");
                div.setAttribute("id", "a" + i);
                document.getElementById("a" + i).innerHTML += value;
                let s = div.style;
                s.backgroundColor = color;
                if (color == "black") {
                    s.color = "white";
                }
            }
        }
        function createComputerCards(_valuesB) {
            for (let i = 0; i < _valuesB.length; i++) {
                let color = "black";
                let valueB = "Uno";
                let div = document.createElement("div");
                document.getElementById("computerkarten").appendChild(div);
                div.setAttribute("class", "enemycards");
                div.setAttribute("id", "c" + i);
                document.getElementById("c" + i).innerHTML += valueB;
                let s = div.style;
                s.backgroundColor = color;
                if (color == "black") {
                    s.color = "white";
                }
            }
        }
        /*Spielstart */
        function start() {
            let maxNumber = deck.length;
            let randomNum = getRandom(maxNumber);
            let card = deck.splice(randomNum, 1)[0];
            pile.push(card);
            createPile(pile);
            console.log(pile);
            switch (Math.floor(Math.random() * 2) + 1) {
                case (1): {
                    turnPlayer();
                    break;
                }
                case (2): {
                    turnComputer();
                    break;
                }
            }
        }
        start();
        /* Spielerphase */
        function turnPlayer() {
            /*let currentDeck: number = hand.length;
            let change: boolean; */
            alert("Du bist am Zug!");
            /* wenn sich die hand.length ver�ndert hat wird turnComputer() ausgef�hrt */
        }
        /* Gegnerphase */
        function turnComputer() {
            /* let currentDeck: number = computer.length
            let change: boolean
            */
            alert("Der Gegner ist am Zug!");
            /*Hier eine �hnliche put funktion, was ist m�glich etc etc*/
            /* wenn sich die computer.length ver�ndert hat wird turnPlayer() ausgef�hrt */
        }
        /* Karte nachziehen */
        function take(_cards) {
            if (deck.length > 0) {
                for (let i = 0; i < _cards; i++) {
                    let maxNumber = deck.length;
                    let randomNum = getRandom(maxNumber);
                    let card = deck.splice(randomNum, 1)[0];
                    hand.push(card);
                }
            }
        }
        function takeListener() {
            document.getElementById("deck").addEventListener("click", takeEvent);
            document.addEventListener("keydown", space);
        }
        takeListener();
        function takeEvent() {
            take(1);
            discard();
            createCards(hand);
            put();
        }
        function space(_event) {
            var keyCode = _event.keyCode;
            if (keyCode == 32) {
                takeEvent();
            }
        }
        /*Karte ablegen */
        function checkIfPlayable(_event, _isPlayable) {
            let domCard = _event.target;
            let lastCard = pile.slice(-1)[0];
            let color = lastCard.substr(0, 1);
            let value = lastCard.substr(1);
            let domColor = domCard.getAttribute("id");
            domColor = domColor.substr(0, 1);
            let domValue = domCard.getAttribute("id");
            domValue = domValue.substr(1);
            console.log(lastCard);
            switch (_isPlayable) {
                case (true):
                    if (color == domColor || value == domValue || color == "s")
                        return true;
                    break;
                case (false):
                    if (color != domColor && color != domColor || value != domValue)
                        return false;
                    break;
            }
        }
        function put() {
            document.getElementById("handkarten").addEventListener("click", putEvent);
        }
        put();
        function putEvent(_event) {
            console.log(_event);
            let handCard = document.getElementById("handkarten");
            let domCard = _event.target;
            if (domCard != handCard && checkIfPlayable(_event, true)) {
                let index;
                let domAttribute = domCard.getAttribute("id");
                domAttribute = domAttribute.substr(1);
                index = parseInt(domAttribute);
                let card = hand.splice(index, 1)[0];
                pile.push(card);
                discard();
                createCards(hand);
                discard2();
                createPile(pile);
                put();
            }
            else
                alert("Diese Karte kannst du nicht spielen!");
        }
        function createPile(_values) {
            for (let i = 0; i < _values.length; i++) {
                let color = _values[i].substr(0, 1);
                if (color == "r") {
                    color = "red";
                }
                if (color == "g") {
                    color = "green";
                }
                if (color == "b") {
                    color = "blue";
                }
                if (color == "y") {
                    color = "yellow";
                }
                if (color == "s") {
                    color = "black";
                }
                let value = _values[i].substr(1);
                let div = document.createElement("div");
                document.getElementById("stack").appendChild(div);
                div.setAttribute("class", "discarded");
                div.setAttribute("id", "b" + i);
                document.getElementById("b" + i).innerHTML += value;
                let s = div.style;
                s.backgroundColor = color;
                s.zIndex = "0" + i;
                if (color == "black") {
                    s.color = "white";
                }
            }
        }
        /* Sortieren */
        function sort() {
            let button = document.getElementById("button");
            button.addEventListener("click", clickSort);
        }
        sort();
        function clickSort() {
            hand.sort();
            discard();
            createCards(hand);
            put();
        }
        /* Random */
        function getRandom(_maxNum) {
            return Math.floor(Math.random() * Math.floor(_maxNum));
        }
        /* Karten entfernen */
        function discard() {
            let node = document.getElementById("handkarten");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            let div = document.createElement("div");
            div.setAttribute("id", "handkarten");
            document.getElementsByTagName("body")[0].appendChild(div);
        }
        function discard2() {
            let node = document.getElementById("stack");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            let div = document.createElement("div");
            div.setAttribute("id", "stack");
            document.getElementsByTagName("body")[0].appendChild(div);
        }
    }
    document.addEventListener("DOMContentLoaded", (uno));
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Endabgabe.js.map