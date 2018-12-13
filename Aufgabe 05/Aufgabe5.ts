namespace Aufgabe5 {

/*
Aufgabe: Aufgabe 5
Name: Catherina Arndt
Matrikel: 259418
Datum: 22.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/   
    
//* Hauptfunktion *//
    
function main(): void {
    document.addEventListener("DOMContentLoaded", createShop);
    document.addEventListener("DOMContentLoaded", changeEventListener);
    setupAsyncForm();
}
    
function changeEventListener(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
}

    
//* Variablen f�r die Erzeugung der Inhalte *//   
    
let priceTree: number = 0;
    
let priceBalls: number = 0;
let priceBalls2: number = 0;
let priceBalls3: number = 0;
let priceBalls4: number = 0;
    
let priceTinsel: number = 0;
let priceTinsel2: number = 0;
let priceTinsel3: number = 0;
let priceTinsel4: number = 0;
    
let priceCandle: number = 0;
let priceCandle2: number = 0;
let priceCandle3: number = 0;
    
let priceStand: number = 0;
let priceDelivery: number = 0;
    
let ballsNumber: number = 0;
let ballsNumber2: number = 0;
let ballsNumber3: number = 0;
let ballsNumber4: number = 0;
    
let tinselNumber: number = 0;
let tinselNumber2: number = 0;
let tinselNumber3: number = 0;
let tinselNumber4: number = 0;
    
let candlesNumber: number = 0;
let candlesNumber2: number = 0;
let candlesNumber3: number = 0;
    
let name: string = "";
let adress: string = "";


//* Erzeugung der Inhalte *//    
    
function createShop(): void {
             
        let node: HTMLElement = document.getElementById("fieldset");
        document.getElementById("check").addEventListener("click", checkInputs);
        let childNodeHTML: string;
        
        childNodeHTML = "<h3>Baumart</h3>";
        childNodeHTML += "<select name=Select id=trees>";
        for (let i: number = 0; i < (data["tree"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["tree"][i].name) + " " + (data["tree"][i].price) + " Euro>" + (data["tree"][i].name) + " " + (data["tree"][i].price) + " Euro</option>";
        } 
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
    
        childNodeHTML += "<h3>Kugeln</h3>";
        childNodeHTML += "<select name=Select id=kugeln>";
        for (let i: number = 0; i < (data["christmasBall"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro>" + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
  
        childNodeHTML += "<select name=Select id=ballsNum>";
        for (let i: number = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
    
        childNodeHTML += "<select name=Select id=kugeln2>";
        for (let i: number = 0; i < (data["christmasBall"].length); i++) {
        childNodeHTML += "<option value=" + i + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro>" + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        
        childNodeHTML += "<select name=Select id=ballsNum2>";
        for (let i: number = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
    
        childNodeHTML += "<select name=Select id=kugeln3>";
        for (let i: number = 0; i < (data["christmasBall"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro>" + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        
        childNodeHTML += "<select name=Select id=ballsNum3>";
        for (let i: number = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
    
        childNodeHTML += "<select name=Select id=kugeln4>";
        for (let i: number = 0; i < (data["christmasBall"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro>" + (data["christmasBall"][i].name) + " " + (data["christmasBall"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        
        childNodeHTML += "<select name=Select id=ballsNum4>";
        for (let i: number = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";


        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name=Select id=lam>";
        for (let i: number = 0; i < (data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro>" + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<select name=Select id=lamNum>";
        for (let i: number = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        
        childNodeHTML += "<select name=Select id=lam2>";
        for (let i: number = 0; i < (data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro>" + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<select name=Select id=lamNum2>";
        for (let i: number = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
    
        childNodeHTML += "<select name=Select id=lam3>";
        for (let i: number = 0; i < (data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro>" + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<select name=Select id=lamNum3>";
        for (let i: number = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
    
        childNodeHTML += "<select name=Select id=lam4>";
        for (let i: number = 0; i < (data["tinsel"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro>" + (data["tinsel"][i].name) + " " + (data["tinsel"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<select name=Select id=lamNum4>";
        for (let i: number = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";


        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name=Select id=candles1>";
        for (let i: number = 0; i < (data["candle"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro>" + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<select name=Select id=candlenum>";
        for (let i: number = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
    
        childNodeHTML += "<select name=Select id=candles2>";
        for (let i: number = 0; i < (data["candle"].length); i++) {

            childNodeHTML += "<option value=" + i + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro>" + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

   
        childNodeHTML += "<select name=Select id=candlenum2>";
        for (let i: number = 0; i < 100; i++) {

            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
    
        childNodeHTML += "<select name=Select id=candles3>";
        for (let i: number = 0; i < (data["candle"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro>" + (data["candle"][i].name) + " " + (data["candle"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<select name=Select id=candlenum3>";
        for (let i: number = 0; i < 100; i++) {
            childNodeHTML += "<option value=*" + i + ">" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
    
        childNodeHTML += "<h3>Baumstaender</h3>";
        childNodeHTML += "<select name='Select' id='stands'>";
        for (let i: number = 0; i < (data["stand"].length); i++) {
            childNodeHTML += "<option value=" + i + (data["stand"][i].name) + " " + (data["stand"][i].price) + " Euro>" + (data["stand"][i].name) + " " + (data["stand"][i].price) + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Lieferoption</h3>";
        for (let i: number = 0; i < (data["delivery"].length); i++) {
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
    
    function handleChange(_event: Event): void {
 
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
     
        if (target.id == "trees") {
            let node: HTMLElement = document.getElementById("tree");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceTree = (data["tree"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
       
        if (target.id == "kugeln") {
            let node: HTMLElement = document.getElementById("ball");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceBalls = (data["christmasBall"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1) + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "kugeln2") {
            let node: HTMLElement = document.getElementById("ball2");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceBalls2 = (data["christmasBall"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1) + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "kugeln3") {
            let node: HTMLElement = document.getElementById("ball3");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceBalls3 = (data["christmasBall"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1) + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "kugeln4") {
            let node: HTMLElement = document.getElementById("ball4");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceBalls3 = (data["christmasBall"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1) + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "ballsNum") {
            let node: HTMLElement = document.getElementById("ballNum");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            ballsNumber = numIndex;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "ballsNum2") {
            let node: HTMLElement = document.getElementById("ballNum2");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            ballsNumber2 = numIndex;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "ballsNum3") {
            let node: HTMLElement = document.getElementById("ballNum3");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            ballsNumber3 = numIndex;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "ballsNum4") {
            let node: HTMLElement = document.getElementById("ballNum4");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            ballsNumber3 = numIndex;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value + " ";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
      
        if (target.id == "lam") {
            let node: HTMLElement = document.getElementById("tinsels");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceTinsel = (data["tinsel"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        
        if (target.id == "lam2") {
            let node: HTMLElement = document.getElementById("tinsel2");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceTinsel2 = (data["tinsel"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "lam3") {
            let node: HTMLElement = document.getElementById("tinsel3");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceTinsel3 = (data["tinsel"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "lam4") {
            let node: HTMLElement = document.getElementById("tinsel4");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceTinsel3 = (data["tinsel"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "lamNum") {
            let node: HTMLElement = document.getElementById("tinselNum");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            tinselNumber = numIndex;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "lamNum2") {
            let node: HTMLElement = document.getElementById("tinselNum2");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            tinselNumber2 = numIndex;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "lamNum3") {
            let node: HTMLElement = document.getElementById("tinselNum3");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            tinselNumber3 = numIndex;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "lamNum4") {
            let node: HTMLElement = document.getElementById("tinselNum4");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            tinselNumber3 = numIndex;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "candles1") {
            let node: HTMLElement = document.getElementById("candle1");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceCandle = (data["candle"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "candles2") {
            let node: HTMLElement = document.getElementById("candle2");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceCandle2 = (data["candle"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "candles3") {
            let node: HTMLElement = document.getElementById("candle3");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceCandle3 = (data["candle"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "candlenum") {
            let node: HTMLElement = document.getElementById("candleNum");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            candlesNumber = numIndex;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "candlenum2") {
            let node: HTMLElement = document.getElementById("candleNum2");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            candlesNumber2 = numIndex;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "candlenum3") {
            let node: HTMLElement = document.getElementById("candleNum3");
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            candlesNumber3 = numIndex;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.name == "Radiogroup") {
            let node: HTMLElement = document.getElementById("delivery");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceDelivery = (data["delivery"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "stands") {
            let node: HTMLElement = document.getElementById("stand");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceStand = (data["stand"][priceIndex].price);
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "names") {
            let node: HTMLElement = document.getElementById("name");
            name = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "adresses") {
            let node: HTMLElement = document.getElementById("adress");
            adress = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
       
        let node: HTMLElement = document.getElementById("price");   
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += (priceTree + (priceBalls * ballsNumber) + (priceBalls2 * ballsNumber2) + (priceBalls3 * ballsNumber3) + (priceBalls4 * ballsNumber4) + (priceTinsel * tinselNumber) + (priceTinsel2 * tinselNumber2) + (priceTinsel3 * tinselNumber3) + (priceTinsel4 * tinselNumber4) + (priceCandle * candlesNumber) + (priceCandle2 * candlesNumber2) + (priceCandle3 * candlesNumber3) + priceStand + priceDelivery);
            childNodeHTML += " Euro";
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
    
    function checkInputs(): void {
        console.log("Error");
        if (priceBalls == 0 || priceTinsel == 0 || priceCandle == 0 || priceStand == 0 || priceDelivery == 0 || name == "" || adress == "")
         document.getElementById("check").innerHTML = "F�llen Sie die Felder aus!"; 
        else {
            document.getElementById("check").innerHTML = "Bestellung m�glich";
        }
    }    
    
    
    function setupAsyncForm(): void {
        let button: Element = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    
       function handleClickOnAsync(_event: Event): void {
        //let submitcart: HTMLElement = document.getElementById("submit");
        let name: string = (<HTMLInputElement>document.querySelector("#cart")).innerText;
        sendRequestWithCustomData(name);
        alert(name);
    }
    
    function sendRequestWithCustomData(_color: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", "https://eia-cata.herokuapp.com/" + "?article=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            alert("response: " + xhr.response);
        }
    }


  
main();
    
}   
    
    

    
