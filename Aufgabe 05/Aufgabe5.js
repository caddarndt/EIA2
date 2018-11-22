var Aufgabe5;
(function (Aufgabe5) {
    /*
    Aufgabe: Aufgabe 5
    Name: Catherina Arndt
    Matrikel: 259418
    Datum: 22.11.2018
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    Er wurde nicht kopiert und auch nicht diktiert.
    */
    //* Event Listener *//   
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);
    //* Variablen f�r die Auswahl *//    
    let treePrice = 0;
    let ballPrice = 0;
    let candlePrice = 0;
    let tinselPrice = 0;
    let standPrice = 0;
    let deliveryPrice = 0;
    let name = "";
    let adress = "";
    //* Hauptfunktion, Aufbau des Inhalts vom Fieldset *//   
    function writeHTML() {
        let node = document.getElementById("fieldset");
        let childNodeHTML;
        childNodeHTML += "</select>";
        childNodeHTML = "<h3>Baumart</h3>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (let i = 0; i < Aufgabe5.tree.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.tree[i].name + "'>" + Aufgabe5.tree[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Weihnachtskugeln</h3>";
        childNodeHTML += "<select name='Select' id='christmasBalls'>";
        for (let i = 0; i < Aufgabe5.christmasBall.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.christmasBall[i].name + "'>" + Aufgabe5.christmasBall[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (let i = 0; i < Aufgabe5.candle.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.candle[i].name + "'>" + Aufgabe5.candle[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name='Select' id='tinsels'>";
        for (let i = 0; i < Aufgabe5.tinsel.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.tinsel[i].name + "'>" + Aufgabe5.tinsel[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Baumstaender</h3>";
        childNodeHTML += "<select name='Select' id='stands'>";
        for (let i = 0; i < Aufgabe5.stand.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.stand[i].name + "'>" + Aufgabe5.stand[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferoption</h3>";
        childNodeHTML += "<select name='Select' id='deliveries'>";
        for (let i = 0; i < Aufgabe5.delivery.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.delivery[i].name + "'>" + Aufgabe5.delivery[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferinformationen</h3>";
        childNodeHTML += "<input id='names' type='text' name='Text' placeholder='Name' required/>";
        childNodeHTML += "<input id='adresses' type='text' name='Text' placeholder='Adresse' required/>";
        childNodeHTML += "<br>";
        node.innerHTML += childNodeHTML;
    }
    function init(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", checkInputs);
    }
    //* Handle Change *//    
    function handleChange(_event) {
        let target = _event.target;
        if (target.id == "trees") {
            let node = document.getElementById("tree");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            treePrice = Aufgabe5.tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(treePrice);
        }
        if (target.id == "christmasBalls") {
            let node = document.getElementById("ball");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            ballPrice = Aufgabe5.christmasBall[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(ballPrice);
        }
        if (target.id == "candles") {
            let node = document.getElementById("candle");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            candlePrice = Aufgabe5.candle[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(candlePrice);
        }
        if (target.id == "tinsels") {
            let node = document.getElementById("tinsel");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            tinselPrice = Aufgabe5.tinsel[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(tinselPrice);
        }
        if (target.id == "stands") {
            let node = document.getElementById("stand");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            standPrice = Aufgabe5.stand[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(standPrice);
        }
        if (target.id == "deliveries") {
            let node = document.getElementById("delivery");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            deliveryPrice = Aufgabe5.delivery[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(deliveryPrice);
        }
        if (target.id == "names") {
            let node = document.getElementById("name");
            name = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "adresses") {
            let node = document.getElementById("adress");
            adress = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        let HTML;
        let node = document.getElementById("price");
        HTML = " ";
        HTML += (treePrice + ballPrice + candlePrice + tinselPrice + standPrice + deliveryPrice);
        HTML += " Euro";
        node.innerHTML = HTML;
    }
    //* Bestellung pr�fen *//    
    function checkInputs() {
        console.log("Error");
        if (treePrice == 0 || ballPrice == 0 || candlePrice == 0 || tinselPrice == 0 || standPrice == 0 || deliveryPrice == 0 || name == "" || adress == "")
            document.getElementById("check").innerHTML = "F�llen Sie die Felder aus!";
        else {
            document.getElementById("check").innerHTML = "Bestellung m�glich";
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map