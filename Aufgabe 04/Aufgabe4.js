var Aufgabe4;
(function (Aufgabe4) {
    /*
    Aufgabe: Aufgabe 4
    Name: Catherina Arndt
    Matrikel: 259418
    Datum: 16.11.2018
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    Er wurde nicht kopiert und auch nicht diktiert.
    */
    document.addEventListener("DOMContentLoaded", createProducts);
    document.addEventListener("DOMContentLoaded", changeListener);
    function changeListener(_event) {
        let fieldset = document.getElementById("konfigurator");
        fieldset.addEventListener("change", handleChange);
    }
    /* Variablen f�r Eingaben */
    let treePrice = 0;
    let ornamentsNumber = 0;
    let ornamentsPrice = 0;
    let lamettaNumber = 0;
    let lamettaPrice = 0;
    let candleNumber = 0;
    let candlePrice = 0;
    let standPrice = 0;
    let deliveryPrice = 0;
    let name = "";
    let adress = "";
    /* Hauptfunktion */
    function createProducts() {
        document.getElementById("button").addEventListener("click", checkOrder);
        let node = document.getElementById("konfigurator");
        let HTML;
        /* Baumauswahl */
        HTML += "<fieldset>";
        HTML += "<legend>Baumart</legend>";
        HTML += "<select name='Select' id='tree'>";
        for (let arrayNumber = 0; arrayNumber < Aufgabe4.trees.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + Aufgabe4.trees[arrayNumber].name + " " + Aufgabe4.trees[arrayNumber].price + " Euro'>" + Aufgabe4.trees[arrayNumber].name + " " + Aufgabe4.trees[arrayNumber].price + " Euro</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        /* Weihnachtskugeln */
        HTML += "<fieldset>";
        HTML += "<legend>Weihnachtskugeln</legend>";
        HTML += "<select name='Select' id='ornaments'>";
        for (let arrayNumber = 0; arrayNumber < Aufgabe4.ornament.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + Aufgabe4.ornament[arrayNumber].name + " " + Aufgabe4.ornament[arrayNumber].price + " Euro'>" + Aufgabe4.ornament[arrayNumber].name + " " + Aufgabe4.ornament[arrayNumber].price + " Euro</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='ornamentsNumber'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        /* Kerzen */
        HTML += "<fieldset>";
        HTML += "<legend>Kerzen</legend>";
        HTML += "<select name='Select' id='candles'>";
        for (let arrayNumber = 0; arrayNumber < Aufgabe4.candles.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + Aufgabe4.candles[arrayNumber].name + " " + Aufgabe4.candles[arrayNumber].price + " Euro'>" + Aufgabe4.candles[arrayNumber].name + " " + Aufgabe4.candles[arrayNumber].price + " Euro</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='candlesNumber'>";
        for (let amountNumber = 0; amountNumber < 5; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        /* Lametta */
        HTML += "<fieldset>";
        HTML += "<legend>Lametta</legend>";
        HTML += "<select name='Select' id='lametta'>";
        for (let arrayNumber = 0; arrayNumber < Aufgabe4.lametta.length; arrayNumber++) {
            HTML += "<option value='" + arrayNumber + Aufgabe4.lametta[arrayNumber].name + " " + Aufgabe4.lametta[arrayNumber].price + " Euro'>" + Aufgabe4.lametta[arrayNumber].name + " " + Aufgabe4.lametta[arrayNumber].price + " Euro</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='lamettaNumber'>";
        for (let amountNumber = 0; amountNumber < 10; amountNumber++) {
            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        /* Baumst�nder */
        HTML += "<fieldset>";
        HTML += "<legend>Baumst�nder</legend>";
        for (let arrayNumber = 0; arrayNumber < Aufgabe4.treestands.length; arrayNumber++) {
            HTML += "<input type='radio' name='Radiogroup' value='" + arrayNumber + Aufgabe4.treestands[arrayNumber].name + " " + Aufgabe4.treestands[arrayNumber].price + " Euro'  id='stand" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + Aufgabe4.treestands[arrayNumber].name + " " + Aufgabe4.treestands[arrayNumber].price + " Euro</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";
        /* Lieferoptionen */
        HTML += "<fieldset>";
        HTML += "<legend>Lieferung</legend>";
        for (let arrayNumber = 0; arrayNumber < Aufgabe4.delivery.length; arrayNumber++) {
            HTML += "<input type='radio' name='Radiogroup1' value='" + arrayNumber + Aufgabe4.delivery[arrayNumber].name + " " + Aufgabe4.delivery[arrayNumber].price + " Euro'  id='deliveryoption" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + Aufgabe4.delivery[arrayNumber].name + " " + Aufgabe4.delivery[arrayNumber].price + " Euro</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";
        /* Lieferinformationen */
        HTML += "<fieldset>";
        HTML += "<legend>Lieferinformationen</legend>";
        HTML += "<input id='name' type='text' name='name' placeholder='Name'/>";
        HTML += "<br><br>";
        HTML += "<textarea id='adress' name='Area' cols='30' rows='2' placeholder='Adresse eingeben' >";
        HTML += "</textarea>";
        HTML += "<br><br>";
        HTML += "</fieldset>";
        node.innerHTML += HTML;
    }
    /* Handle Change */
    function handleChange(_event) {
        let target = _event.target;
        if (target.id == "Baum") {
            let node = document.getElementById("treetype");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            treePrice = Aufgabe4.trees[priceIndex].price;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Kugeln") {
            let node = document.getElementById("ornaments");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            ornamentsPrice = Aufgabe4.ornament[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountOrnaments") {
            let node = document.getElementById("ornamentsnumber");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            ornamentsNumber = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "candles") {
            let node = document.getElementById("candles");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            candlePrice = Aufgabe4.candles[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountCandles") {
            let node = document.getElementById("candlesnumber");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            candleNumber = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "Lametta") {
            let node = document.getElementById("lametta");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            lamettaPrice = Aufgabe4.lametta[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "amountLametta") {
            let node = document.getElementById("lamettaNumber");
            let value = target.value;
            let _number = parseInt(value.substr(1, 2));
            lamettaNumber = _number;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.name == "Radiogroup") {
            let node = document.getElementById("stand");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            standPrice = Aufgabe4.treestands[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.name == "Radiogroup1") {
            let node = document.getElementById("delivery");
            let value = target.value;
            let _price = parseInt(value.substr(0, 1));
            deliveryPrice = Aufgabe4.delivery[_price].price;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "adress") {
            let node = document.getElementById("adress");
            adress = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        if (target.id == "name") {
            let node = document.getElementById("name");
            name = target.value;
            let HTML;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }
        /* Gesamtpreis */
        let node = document.getElementById("totalprice");
        let HTML;
        HTML = "";
        HTML += "<a>";
        HTML += (treePrice + (ornamentsPrice * ornamentsNumber) + (candlePrice * candleNumber) + (lamettaPrice * lamettaNumber) + standPrice + deliveryPrice);
        HTML += " Euro";
        HTML += "</a>";
        node.innerHTML = HTML;
    }
    /* �berpr�fung der Bestellung */
    function checkOrder(_event) {
        if (name == "" || adress == "" || treePrice == 0 || standPrice == 0 || ornamentsPrice == 0 || lamettaPrice == 0 || candlePrice == 0 || deliveryPrice == 0 || ornamentsNumber == 0 || lamettaNumber == 0 || candleNumber == 0) {
            document.getElementById("order").innerHTML = "Bitte f�llen Sie die Felder aus";
        }
        else {
            document.getElementById("order").innerHTML = "Bestellung m�glich";
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Aufgabe4.js.map