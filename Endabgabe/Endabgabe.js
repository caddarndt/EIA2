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
    let response = [];
    let responseComputer = [];
    /*var last: string = hand[hand.length - 1];
    var lastC: string = computer[computer.length - 1];
    var lastCard: string = pile[pile.length - 1]; */
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
            /* let currentDeck: number = computer.length; */
            let possibleCards = [];
            /*let random: number = Math.floor(Math.random() * possibleCards.length) + 1; */
            alert("Der Gegner ist am Zug!");
            checkIfPlayableC(computer);
            for (let i = 0; i < computer.length; i++) {
                if (responseComputer[i] == "true") {
                    possibleCards.push(computer[i]);
                }
            }
            console.log(possibleCards);
            if (possibleCards.length > 0) {
                let card = possibleCards[possibleCards.length - 1];
                pile.push(card);
                computer.push.apply(computer, possibleCards);
                discardC();
                createComputerCards(computer);
                discardC2();
                createPile(pile);
                console.log(possibleCards);
            }
            if (possibleCards.length == 0) {
                if (deck.length > 0) {
                    takeC();
                }
                else
                    pileToDeck();
            }
        }
        /* Ablagestapel zu Deck */
        function pileToDeck() {
            if (deck.length == 0) {
                deck.push.apply(deck, pile);
            }
            console.log(deck);
            console.log(pile);
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
        function takeC(n = 1) {
            if (deck.length > 0) {
                for (let i = 0; i < n; i++) {
                    let maxNumber = deck.length;
                    let randomNum = getRandom(maxNumber);
                    let card = deck.splice(randomNum, 1)[0];
                    computer.push(card);
                    turnPlayer();
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
            checkIfPlayable(hand);
            checkIfPlayableC(computer);
        }
        function space(_event) {
            var keyCode = _event.keyCode;
            if (keyCode == 32) {
                takeEvent();
            }
        }
        /* Ist Karte m�glich */
        function checkIfPlayable(currentDeck) {
            let lastCard = pile.slice(-1)[0];
            for (let i = 0; i < currentDeck.length; i++) {
                if (currentDeck[i].substr(0, 1) == lastCard.substr(0, 1) ||
                    currentDeck[i].substr(1) == lastCard.substr(1) || currentDeck[i].substr(0, 1) == "s") {
                    response[i] = "true";
                }
                else
                    response[i] = "false";
            }
            console.log(response);
            return response;
        }
        function checkIfPlayableC(currentDeck) {
            let lastCard = pile.slice(-1)[0];
            for (let i = 0; i < currentDeck.length - 1; i++) {
                if (currentDeck[i].substr(0, 1) == lastCard.substr(0, 1) ||
                    currentDeck[i].substr(1) == lastCard.substr(1) || currentDeck[i].substr(0, 1) == "s") {
                    responseComputer[i] = "true";
                }
                else
                    responseComputer[i] = "false";
            }
            console.log(responseComputer);
            return responseComputer;
        }
        /*Karte ablegen */
        function put() {
            document.getElementById("handkarten").addEventListener("click", putEvent);
        }
        put();
        function putEvent(_event) {
            console.log(_event);
            let handCard = document.getElementById("handkarten");
            let domCard = _event.target;
            let index;
            let domAttribute = domCard.getAttribute("id");
            domAttribute = domAttribute.substr(1);
            index = parseInt(domAttribute);
            if (domCard != handCard && response[index] == "true") {
                let card = hand.splice(index, 1)[0];
                pile.push(card);
                discard();
                createCards(hand);
                discard2();
                createPile(pile);
                put();
                checkIfPlayable(hand);
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
        /* Zug beenden */
        function endTurn() {
            let button = document.getElementById("end");
            button.addEventListener("click", clickEnd);
        }
        endTurn();
        function clickEnd() {
            turnComputer();
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
        function discardC() {
            let node = document.getElementById("computerkarten");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            let div = document.createElement("div");
            div.setAttribute("id", "computerkarten");
            document.getElementsByTagName("body")[0].appendChild(div);
        }
        function discardC2() {
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