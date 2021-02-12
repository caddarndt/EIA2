var finalCanvas;
(function (finalCanvas) {
    //* Hauptfunktion *//
    function main() {
        document.addEventListener("DOMContentLoaded", createShop);
        document.addEventListener("DOMContentLoaded", changeEventListener);
    }
    function changeEventListener(_event) {
        var fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    //* Variablen f�r die Erzeugung der Inhalte *//   
    var priceTree = 0;
    var priceBalls = 0;
    var priceBalls2 = 0;
    var priceBalls3 = 0;
    var priceBalls4 = 0;
    var priceTinsel = 0;
    var priceTinsel2 = 0;
    var priceTinsel3 = 0;
    var priceTinsel4 = 0;
    var priceCandle = 0;
    var priceCandle2 = 0;
    var priceCandle3 = 0;
    var priceStand = 0;
    var priceDelivery = 0;
    var ballsNumber = 0;
    var ballsNumber2 = 0;
    var ballsNumber3 = 0;
    var ballsNumber4 = 0;
    var tinselNumber = 0;
    var tinselNumber2 = 0;
    var tinselNumber3 = 0;
    var tinselNumber4 = 0;
    var candlesNumber = 0;
    var candlesNumber2 = 0;
    var candlesNumber3 = 0;
    var name = "";
    var adress = "";
    //* Erzeugung der Inhalte *//    
    function createShop() {
        var node = document.getElementById("fieldset");
        document.getElementById("check").addEventListener("click", checkInputs);
        var childNodeHTML;
        childNodeHTML = "<h3>Baumart</h3>";
        childNodeHTML += "<select name=Select id=trees>";
        for (var i = 0; i < (data["tree"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["tree"][i].name) + " " + (data["tree"][i].price) + " Euro>" + (data["tree"][i].name) + " " + (data["tree"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Kugeln</h3>";
        childNodeHTML += "<select name=Select id=kugeln>";
        for (var i = 0; i < (data["christmasBall"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro>" + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=ballsNum>";
        for (var i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=kugeln2>";
        for (var i = 0; i < (data["christmasBall"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro>" + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=ballsNum2>";
        for (var i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=kugeln3>";
        for (var i = 0; i < (data["christmasBall"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro>" + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=ballsNum3>";
        for (var i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=kugeln4>";
        for (var i = 0; i < (data["christmasBall"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro>" + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=ballsNum4>";
        for (var i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name=Select id=lam>";
        for (var i = 0; i < (data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro>" + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lamNum>";
        for (var i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lam2>";
        for (var i = 0; i < (data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro>" + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lamNum2>";
        for (var i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lam3>";
        for (var i = 0; i < (data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro>" + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lamNum3>";
        for (var i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lam4>";
        for (var i = 0; i < (data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro>" + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lamNum4>";
        for (var i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name=Select id=candles1>";
        for (var i = 0; i < (data["candle"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro>" + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=candlenum>";
        for (var i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=candles2>";
        for (var i = 0; i < (data["candle"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro>" + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=candlenum2>";
        for (var i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=candles3>";
        for (var i = 0; i < (data["candle"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro>" + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=candlenum3>";
        for (var i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Baumstaender</h3>";
        childNodeHTML += "<select name='Select' id='stands'>";
        for (var i = 0; i < (data["stand"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["stand"][i].name) + " " + (data["stand"][i].price) + " Euro>" + (data["stand"][i].name) + " " + (data["stand"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferoption</h3>";
        for (var i = 0; i < (data["delivery"].length); i++) {
            childNodeHTML += "<input type=radio name=Radiogroup value=" + i + (data["delivery"][i].name) + " " + (data["delivery"][i].price) + " Euro  id=radio" + i + " />";
            childNodeHTML += "<label" + i + ">" + (data["delivery"][i].name) + " " + (data["delivery"][i].price) + " Euro</label>";
        }
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferinformationen</h3>";
        childNodeHTML += "<input id='names' type='text' name='Text' placeholder='Name' required/>";
        childNodeHTML += "<input id='adresses' type='text' name='Text' placeholder='Adresse' required/>";
        childNodeHTML += "<br>";
        node.innerHTML += childNodeHTML;
    }
    //* Handle Change *//   
    function handleChange(_event) {
        var target = _event.target;
        if (target.id == "trees") {
            var node_1 = document.getElementById("tree");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceTree = (data["tree"][priceIndex].price);
            var childNodeHTML_1;
            childNodeHTML_1 = "";
            childNodeHTML_1 += "<a>";
            childNodeHTML_1 += " " + value.substr(1);
            childNodeHTML_1 += "</a>";
            node_1.innerHTML = childNodeHTML_1;
        }
        if (target.id == "kugeln") {
            var node_2 = document.getElementById("ball");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceBalls = (data["christmasBall"][priceIndex].price);
            var childNodeHTML_2;
            childNodeHTML_2 = "";
            childNodeHTML_2 += "<a>";
            childNodeHTML_2 += " " + value.substr(1) + " ";
            childNodeHTML_2 += "</a>";
            node_2.innerHTML = childNodeHTML_2;
        }
        if (target.id == "kugeln2") {
            var node_3 = document.getElementById("ball2");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceBalls2 = (data["christmasBall"][priceIndex].price);
            var childNodeHTML_3;
            childNodeHTML_3 = "";
            childNodeHTML_3 += "<a>";
            childNodeHTML_3 += " " + value.substr(1) + " ";
            childNodeHTML_3 += "</a>";
            node_3.innerHTML = childNodeHTML_3;
        }
        if (target.id == "kugeln3") {
            var node_4 = document.getElementById("ball3");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceBalls3 = (data["christmasBall"][priceIndex].price);
            var childNodeHTML_4;
            childNodeHTML_4 = "";
            childNodeHTML_4 += "<a>";
            childNodeHTML_4 += " " + value.substr(1) + " ";
            childNodeHTML_4 += "</a>";
            node_4.innerHTML = childNodeHTML_4;
        }
        if (target.id == "kugeln4") {
            var node_5 = document.getElementById("ball4");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceBalls3 = (data["christmasBall"][priceIndex].price);
            var childNodeHTML_5;
            childNodeHTML_5 = "";
            childNodeHTML_5 += "<a>";
            childNodeHTML_5 += " " + value.substr(1) + " ";
            childNodeHTML_5 += "</a>";
            node_5.innerHTML = childNodeHTML_5;
        }
        if (target.id == "ballsNum") {
            var node_6 = document.getElementById("ballNum");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            ballsNumber = numIndex;
            var childNodeHTML_6;
            childNodeHTML_6 = "";
            childNodeHTML_6 += "<a>";
            childNodeHTML_6 += " " + target.value + " ";
            childNodeHTML_6 += "</a>";
            node_6.innerHTML = childNodeHTML_6;
        }
        if (target.id == "ballsNum2") {
            var node_7 = document.getElementById("ballNum2");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            ballsNumber2 = numIndex;
            var childNodeHTML_7;
            childNodeHTML_7 = "";
            childNodeHTML_7 += "<a>";
            childNodeHTML_7 += " " + target.value + " ";
            childNodeHTML_7 += "</a>";
            node_7.innerHTML = childNodeHTML_7;
        }
        if (target.id == "ballsNum3") {
            var node_8 = document.getElementById("ballNum3");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            ballsNumber3 = numIndex;
            var childNodeHTML_8;
            childNodeHTML_8 = "";
            childNodeHTML_8 += "<a>";
            childNodeHTML_8 += " " + target.value + " ";
            childNodeHTML_8 += "</a>";
            node_8.innerHTML = childNodeHTML_8;
        }
        if (target.id == "ballsNum4") {
            var node_9 = document.getElementById("ballNum4");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            ballsNumber3 = numIndex;
            var childNodeHTML_9;
            childNodeHTML_9 = "";
            childNodeHTML_9 += "<a>";
            childNodeHTML_9 += " " + target.value + " ";
            childNodeHTML_9 += "</a>";
            node_9.innerHTML = childNodeHTML_9;
        }
        if (target.id == "lam") {
            var node_10 = document.getElementById("tinsels");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceTinsel = (data["tinsel"][priceIndex].price);
            var childNodeHTML_10;
            childNodeHTML_10 = "";
            childNodeHTML_10 += "<a>";
            childNodeHTML_10 += " " + value.substr(1);
            childNodeHTML_10 += "</a>";
            node_10.innerHTML = childNodeHTML_10;
        }
        if (target.id == "lam2") {
            var node_11 = document.getElementById("tinsel2");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceTinsel2 = (data["tinsel"][priceIndex].price);
            var childNodeHTML_11;
            childNodeHTML_11 = "";
            childNodeHTML_11 += "<a>";
            childNodeHTML_11 += " " + value.substr(1);
            childNodeHTML_11 += "</a>";
            node_11.innerHTML = childNodeHTML_11;
        }
        if (target.id == "lam3") {
            var node_12 = document.getElementById("tinsel3");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceTinsel3 = (data["tinsel"][priceIndex].price);
            var childNodeHTML_12;
            childNodeHTML_12 = "";
            childNodeHTML_12 += "<a>";
            childNodeHTML_12 += " " + value.substr(1);
            childNodeHTML_12 += "</a>";
            node_12.innerHTML = childNodeHTML_12;
        }
        if (target.id == "lam4") {
            var node_13 = document.getElementById("tinsel4");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceTinsel3 = (data["tinsel"][priceIndex].price);
            var childNodeHTML_13;
            childNodeHTML_13 = "";
            childNodeHTML_13 += "<a>";
            childNodeHTML_13 += " " + value.substr(1);
            childNodeHTML_13 += "</a>";
            node_13.innerHTML = childNodeHTML_13;
        }
        if (target.id == "lamNum") {
            var node_14 = document.getElementById("tinselNum");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            tinselNumber = numIndex;
            var childNodeHTML_14;
            childNodeHTML_14 = "";
            childNodeHTML_14 += "<a>";
            childNodeHTML_14 += " " + target.value;
            childNodeHTML_14 += "</a>";
            node_14.innerHTML = childNodeHTML_14;
        }
        if (target.id == "lamNum2") {
            var node_15 = document.getElementById("tinselNum2");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            tinselNumber2 = numIndex;
            var childNodeHTML_15;
            childNodeHTML_15 = "";
            childNodeHTML_15 += "<a>";
            childNodeHTML_15 += " " + target.value;
            childNodeHTML_15 += "</a>";
            node_15.innerHTML = childNodeHTML_15;
        }
        if (target.id == "lamNum3") {
            var node_16 = document.getElementById("tinselNum3");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            tinselNumber3 = numIndex;
            var childNodeHTML_16;
            childNodeHTML_16 = "";
            childNodeHTML_16 += "<a>";
            childNodeHTML_16 += " " + target.value;
            childNodeHTML_16 += "</a>";
            node_16.innerHTML = childNodeHTML_16;
        }
        if (target.id == "lamNum4") {
            var node_17 = document.getElementById("tinselNum4");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            tinselNumber3 = numIndex;
            var childNodeHTML_17;
            childNodeHTML_17 = "";
            childNodeHTML_17 += "<a>";
            childNodeHTML_17 += " " + target.value;
            childNodeHTML_17 += "</a>";
            node_17.innerHTML = childNodeHTML_17;
        }
        if (target.id == "candles1") {
            var node_18 = document.getElementById("candle1");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceCandle = (data["candle"][priceIndex].price);
            var childNodeHTML_18;
            childNodeHTML_18 = "";
            childNodeHTML_18 += "<a>";
            childNodeHTML_18 += " " + value.substr(1);
            childNodeHTML_18 += "</a>";
            node_18.innerHTML = childNodeHTML_18;
        }
        if (target.id == "candles2") {
            var node_19 = document.getElementById("candle2");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceCandle2 = (data["candle"][priceIndex].price);
            var childNodeHTML_19;
            childNodeHTML_19 = "";
            childNodeHTML_19 += "<a>";
            childNodeHTML_19 += " " + value.substr(1);
            childNodeHTML_19 += "</a>";
            node_19.innerHTML = childNodeHTML_19;
        }
        if (target.id == "candles3") {
            var node_20 = document.getElementById("candle3");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceCandle3 = (data["candle"][priceIndex].price);
            var childNodeHTML_20;
            childNodeHTML_20 = "";
            childNodeHTML_20 += "<a>";
            childNodeHTML_20 += " " + value.substr(1);
            childNodeHTML_20 += "</a>";
            node_20.innerHTML = childNodeHTML_20;
        }
        if (target.id == "candlenum") {
            var node_21 = document.getElementById("candleNum");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            candlesNumber = numIndex;
            var childNodeHTML_21;
            childNodeHTML_21 = "";
            childNodeHTML_21 += "<a>";
            childNodeHTML_21 += " " + target.value;
            childNodeHTML_21 += "</a>";
            node_21.innerHTML = childNodeHTML_21;
        }
        if (target.id == "candlenum2") {
            var node_22 = document.getElementById("candleNum2");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            candlesNumber2 = numIndex;
            var childNodeHTML_22;
            childNodeHTML_22 = "";
            childNodeHTML_22 += "<a>";
            childNodeHTML_22 += " " + target.value;
            childNodeHTML_22 += "</a>";
            node_22.innerHTML = childNodeHTML_22;
        }
        if (target.id == "candlenum3") {
            var node_23 = document.getElementById("candleNum3");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            candlesNumber3 = numIndex;
            var childNodeHTML_23;
            childNodeHTML_23 = "";
            childNodeHTML_23 += "<a>";
            childNodeHTML_23 += " " + target.value;
            childNodeHTML_23 += "</a>";
            node_23.innerHTML = childNodeHTML_23;
        }
        if (target.name == "Radiogroup") {
            var node_24 = document.getElementById("delivery");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceDelivery = (data["delivery"][priceIndex].price);
            var childNodeHTML_24;
            childNodeHTML_24 = "";
            childNodeHTML_24 += "<a>";
            childNodeHTML_24 += " " + value.substr(1);
            childNodeHTML_24 += "</a>";
            node_24.innerHTML = childNodeHTML_24;
        }
        if (target.id == "stands") {
            var node_25 = document.getElementById("stand");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceStand = (data["stand"][priceIndex].price);
            var childNodeHTML_25;
            childNodeHTML_25 = "";
            childNodeHTML_25 += "<a>";
            childNodeHTML_25 += " " + value.substr(1);
            childNodeHTML_25 += "</a>";
            node_25.innerHTML = childNodeHTML_25;
        }
        if (target.id == "names") {
            var node_26 = document.getElementById("name");
            name = target.value;
            var childNodeHTML_26;
            childNodeHTML_26 = "";
            childNodeHTML_26 += "<a>";
            childNodeHTML_26 += " " + target.value;
            childNodeHTML_26 += "</a>";
            node_26.innerHTML = childNodeHTML_26;
        }
        if (target.id == "adresses") {
            var node_27 = document.getElementById("adress");
            adress = target.value;
            var childNodeHTML_27;
            childNodeHTML_27 = "";
            childNodeHTML_27 += "<a>";
            childNodeHTML_27 += " " + target.value;
            childNodeHTML_27 += "</a>";
            node_27.innerHTML = childNodeHTML_27;
        }
        var node = document.getElementById("price");
        var childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (priceTree + (priceBalls * ballsNumber) + (priceBalls2 * ballsNumber2) + (priceBalls3 * ballsNumber3) + (priceBalls4 * ballsNumber4) + (priceTinsel * tinselNumber) + (priceTinsel2 * tinselNumber2) + (priceTinsel3 * tinselNumber3) + (priceTinsel4 * tinselNumber4) + (priceCandle * candlesNumber) + (priceCandle2 * candlesNumber2) + (priceCandle3 * candlesNumber3) + priceStand + priceDelivery);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    function checkInputs() {
        console.log("Error");
        if (priceBalls == 0 || priceTinsel == 0 || priceCandle == 0 || priceStand == 0 || priceDelivery == 0 || name == "" || adress == "")
            document.getElementById("check").innerHTML = "F�llen Sie die Felder aus!";
        else {
            document.getElementById("check").innerHTML = "Bestellung m�glich";
        }
    }
    main();
})(finalCanvas || (finalCanvas = {}));
