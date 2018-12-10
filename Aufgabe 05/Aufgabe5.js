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
    //* Hauptfunktion *//
    function main() {
        document.addEventListener("DOMContentLoaded", createShop);
        document.addEventListener("DOMContentLoaded", changeEventListener);
        setupAsyncForm();
    }
    function changeEventListener(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    //* Variablen f�r die Erzeugung der Inhalte *//   
    let priceTree = 0;
    let priceBalls = 0;
    let priceBalls2 = 0;
    let priceBalls3 = 0;
    let priceBalls4 = 0;
    let priceTinsel = 0;
    let priceTinsel2 = 0;
    let priceTinsel3 = 0;
    let priceTinsel4 = 0;
    let priceCandle = 0;
    let priceCandle2 = 0;
    let priceCandle3 = 0;
    let priceStand = 0;
    let priceDelivery = 0;
    let ballsNumber = 0;
    let ballsNumber2 = 0;
    let ballsNumber3 = 0;
    let ballsNumber4 = 0;
    let tinselNumber = 0;
    let tinselNumber2 = 0;
    let tinselNumber3 = 0;
    let tinselNumber4 = 0;
    let candlesNumber = 0;
    let candlesNumber2 = 0;
    let candlesNumber3 = 0;
    let name = "";
    let adress = "";
    //* Erzeugung der Inhalte *//    
    function createShop() {
        let node = document.getElementById("fieldset");
        document.getElementById("check").addEventListener("click", checkInputs);
        let childNodeHTML;
        childNodeHTML = "<h3>Baumart</h3>";
        childNodeHTML += "<select name=Select id=trees>";
        for (let i = 0; i < (Aufgabe5.data["tree"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["tree"][i].name) + " " + (Aufgabe5.data["tree"][i].price) + " Euro>" + (Aufgabe5.data["tree"][i].name) + " " + (Aufgabe5.data["tree"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Kugeln</h3>";
        childNodeHTML += "<select name=Select id=kugeln>";
        for (let i = 0; i < (Aufgabe5.data["christmasBall"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["christmasBall"][i].name) + " " + (Aufgabe5.data["christmasBall"][i].price) + " Euro>" + (Aufgabe5.data["christmasBall"][i].name) + " " + (Aufgabe5.data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=ballsNum>";
        for (let i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=kugeln2>";
        for (let i = 0; i < (Aufgabe5.data["christmasBall"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["christmasBall"][i].name) + " " + (Aufgabe5.data["christmasBall"][i].price) + " Euro>" + (Aufgabe5.data["christmasBall"][i].name) + " " + (Aufgabe5.data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=ballsNum2>";
        for (let i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=kugeln3>";
        for (let i = 0; i < (Aufgabe5.data["christmasBall"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["christmasBall"][i].name) + " " + (Aufgabe5.data["christmasBall"][i].price) + " Euro>" + (Aufgabe5.data["christmasBall"][i].name) + " " + (Aufgabe5.data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=ballsNum3>";
        for (let i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=kugeln4>";
        for (let i = 0; i < (Aufgabe5.data["christmasBall"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["christmasBall"][i].name) + " " + (Aufgabe5.data["christmasBall"][i].price) + " Euro>" + (Aufgabe5.data["christmasBall"][i].name) + " " + (Aufgabe5.data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=ballsNum4>";
        for (let i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name=Select id=lam>";
        for (let i = 0; i < (Aufgabe5.data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["tinsel"][i].name) + " " + (Aufgabe5.data["tinsel"][i].price) + " Euro>" + (Aufgabe5.data["tinsel"][i].name) + " " + (Aufgabe5.data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lamNum>";
        for (let i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lam2>";
        for (let i = 0; i < (Aufgabe5.data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["tinsel"][i].name) + " " + (Aufgabe5.data["tinsel"][i].price) + " Euro>" + (Aufgabe5.data["tinsel"][i].name) + " " + (Aufgabe5.data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lamNum2>";
        for (let i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lam3>";
        for (let i = 0; i < (Aufgabe5.data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["tinsel"][i].name) + " " + (Aufgabe5.data["tinsel"][i].price) + " Euro>" + (Aufgabe5.data["tinsel"][i].name) + " " + (Aufgabe5.data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lamNum3>";
        for (let i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lam4>";
        for (let i = 0; i < (Aufgabe5.data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["tinsel"][i].name) + " " + (Aufgabe5.data["tinsel"][i].price) + " Euro>" + (Aufgabe5.data["tinsel"][i].name) + " " + (Aufgabe5.data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=lamNum4>";
        for (let i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name=Select id=candles1>";
        for (let i = 0; i < (Aufgabe5.data["candle"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["candle"][i].name) + " " + (Aufgabe5.data["candle"][i].price) + " Euro>" + (Aufgabe5.data["candle"][i].name) + " " + (Aufgabe5.data["candle"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=candlenum>";
        for (let i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=candles2>";
        for (let i = 0; i < (Aufgabe5.data["candle"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["candle"][i].name) + " " + (Aufgabe5.data["candle"][i].price) + " Euro>" + (Aufgabe5.data["candle"][i].name) + " " + (Aufgabe5.data["candle"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=candlenum2>";
        for (let i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=candles3>";
        for (let i = 0; i < (Aufgabe5.data["candle"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["candle"][i].name) + " " + (Aufgabe5.data["candle"][i].price) + " Euro>" + (Aufgabe5.data["candle"][i].name) + " " + (Aufgabe5.data["candle"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name=Select id=candlenum3>";
        for (let i = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Baumstaender</h3>";
        childNodeHTML += "<select name='Select' id='stands'>";
        for (let i = 0; i < (Aufgabe5.data["stand"].length); i++) {
            childNodeHTML += "<option value=" + i + (Aufgabe5.data["stand"][i].name) + " " + (Aufgabe5.data["stand"][i].price) + " Euro>" + (Aufgabe5.data["stand"][i].name) + " " + (Aufgabe5.data["stand"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferoption</h3>";
        for (let i = 0; i < (Aufgabe5.data["delivery"].length); i++) {
            childNodeHTML += "<input type=radio name=Radiogroup value=" + i + (Aufgabe5.data["delivery"][i].name) + " " + (Aufgabe5.data["delivery"][i].price) + " Euro  id=radio" + i + " />";
            childNodeHTML += "<label" + i + ">" + (Aufgabe5.data["delivery"][i].name) + " " + (Aufgabe5.data["delivery"][i].price) + " Euro</label>";
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
        let target = _event.target;
        if (target.id == "trees") {
            let node = document.getElementById("tree");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTree = (Aufgabe5.data["tree"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "kugeln") {
            let node = document.getElementById("ball");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceBalls = (Aufgabe5.data["christmasBall"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1) + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "kugeln2") {
            let node = document.getElementById("ball2");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceBalls2 = (Aufgabe5.data["christmasBall"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1) + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "kugeln3") {
            let node = document.getElementById("ball3");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceBalls3 = (Aufgabe5.data["christmasBall"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1) + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "kugeln4") {
            let node = document.getElementById("ball4");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceBalls3 = (Aufgabe5.data["christmasBall"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1) + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "ballsNum") {
            let node = document.getElementById("ballNum");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            ballsNumber = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "ballsNum2") {
            let node = document.getElementById("ballNum2");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            ballsNumber2 = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "ballsNum3") {
            let node = document.getElementById("ballNum3");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            ballsNumber3 = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "ballsNum4") {
            let node = document.getElementById("ballNum4");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            ballsNumber3 = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "lam") {
            let node = document.getElementById("tinsels");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTinsel = (Aufgabe5.data["tinsel"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "lam2") {
            let node = document.getElementById("tinsel2");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTinsel2 = (Aufgabe5.data["tinsel"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "lam3") {
            let node = document.getElementById("tinsel3");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTinsel3 = (Aufgabe5.data["tinsel"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "lam4") {
            let node = document.getElementById("tinsel4");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTinsel3 = (Aufgabe5.data["tinsel"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "lamNum") {
            let node = document.getElementById("tinselNum");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            tinselNumber = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "lamNum2") {
            let node = document.getElementById("tinselNum2");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            tinselNumber2 = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "lamNum3") {
            let node = document.getElementById("tinselNum3");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            tinselNumber3 = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "lamNum4") {
            let node = document.getElementById("tinselNum4");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            tinselNumber3 = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "candles1") {
            let node = document.getElementById("candle1");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceCandle = (Aufgabe5.data["candle"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "candles2") {
            let node = document.getElementById("candle2");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceCandle2 = (Aufgabe5.data["candle"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "candles3") {
            let node = document.getElementById("candle3");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceCandle3 = (Aufgabe5.data["candle"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "candlenum") {
            let node = document.getElementById("candleNum");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            candlesNumber = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "candlenum2") {
            let node = document.getElementById("candleNum2");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            candlesNumber2 = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "candlenum3") {
            let node = document.getElementById("candleNum3");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            candlesNumber3 = numIndex;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.name == "Radiogroup") {
            let node = document.getElementById("delivery");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceDelivery = (Aufgabe5.data["delivery"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "stands") {
            let node = document.getElementById("stand");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceStand = (Aufgabe5.data["stand"][priceIndex].price);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
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
        let node = document.getElementById("price");
        let childNodeHTML;
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
    function setupAsyncForm() {
        let button = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event) {
        let color = document.querySelector("#cart").value;
        sendRequestWithCustomData(color);
    }
    function sendRequestWithCustomData(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://eia-cata.herokuapp.com/" + "?article=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            alert("response: " + xhr.response);
        }
    }
    main();
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map