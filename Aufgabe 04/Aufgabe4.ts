namespace Aufgabe4 {

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

    
    function changeListener(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("konfigurator");
        fieldset.addEventListener("change", handleChange);
    }


/* Variablen für Eingaben */
    
let treePrice: number = 0;

let ornamentsNumber: number = 0;
let ornamentsPrice: number = 0;
    
let lamettaNumber: number = 0;
let lamettaPrice: number = 0;
    
let candleNumber: number = 0;
let candlePrice: number = 0;
    
let standPrice: number = 0;
    
let deliveryPrice: number = 0;

let name: string = "";
let adress: string = "";


/* Hauptfunktion */
    
    function createProducts(): void {

        document.getElementById("button").addEventListener("click", checkOrder);
        let node: HTMLElement = document.getElementById("konfigurator");

        let HTML: string;


/* Baumauswahl */
        
        HTML += "<fieldset>";
        HTML += "<legend>Baumart</legend>";
        HTML += "<select name='Select' id='tree'>";
        for (let arrayNumber: number = 0; arrayNumber < trees.length; arrayNumber++) {

            HTML += "<option value='" + arrayNumber + trees[arrayNumber].name + " " + trees[arrayNumber].price + " €'>" + trees[arrayNumber].name + " " + trees[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";


/* Weihnachtskugeln */
        
        HTML += "<fieldset>";
        HTML += "<legend>Weihnachtskugeln</legend>";
        HTML += "<select name='Select' id='balls'>";
        for (let arrayNumber: number = 0; arrayNumber < ornament.length; arrayNumber++) {

            HTML += "<option value='" + arrayNumber + ornament[arrayNumber].name + " " + ornament[arrayNumber].price + " €'>" + ornament[arrayNumber].name + " " + ornament[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountBalls'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";


/* Kerzen */
        
        HTML += "<fieldset>";
        HTML += "<legend>Kerzen</legend>";
        HTML += "<select name='Select' id='candles'>";
        for (let arrayNumber: number = 0; arrayNumber < candles.length; arrayNumber++) {

            HTML += "<option value='" + arrayNumber + candles[arrayNumber].name + " " + candles[arrayNumber].price + " €'>" + candles[arrayNumber].name + " " + candles[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountCandles'>";
        for (let amountNumber: number = 0; amountNumber < 5; amountNumber++) {

            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";
        
       
/* Lametta */
        
        HTML += "<fieldset>";
        HTML += "<legend>Lametta</legend>";
        HTML += "<select name='Select' id='Lametta'>";
        for (let arrayNumber: number = 0; arrayNumber < lametta.length; arrayNumber++) {

            HTML += "<option value='" + arrayNumber + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €'>" + lametta[arrayNumber].name + " " + lametta[arrayNumber].price + " €</option>";
        }
        HTML += "</select>";
        HTML += "<br><br>";
        HTML += "<select name='Select' id='amountLametta'>";
        for (let amountNumber: number = 0; amountNumber < 10; amountNumber++) {

            HTML += "<option value='*" + amountNumber + "'>" + amountNumber + "</option>";
        }
        HTML += "</select>";
        HTML += "</fieldset>";
        HTML += "<br>";


/* Baumständer */
        
        HTML += "<fieldset>";
        HTML += "<legend>Baumständer</legend>";
        for (let arrayNumber: number = 0; arrayNumber < treestands.length; arrayNumber++) {
            HTML += "<input type='radio' name='Radiogroup' value='" + arrayNumber + treestands[arrayNumber].name + " " + treestands[arrayNumber].price + " €'  id='stand" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + treestands[arrayNumber].name + " " + treestands[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";


/* Lieferoptionen */
        
        HTML += "<fieldset>";
        HTML += "<legend>Lieferung</legend>";
        for (let arrayNumber: number = 0; arrayNumber < delivery.length; arrayNumber++) {
            HTML += "<input type='radio' name='Radiogroup1' value='" + arrayNumber + delivery[arrayNumber].name + " " + delivery[arrayNumber].price + " €'  id='deliveryoption" + arrayNumber + "' />";
            HTML += "<label for='check" + arrayNumber + "'>" + delivery[arrayNumber].name + " " + delivery[arrayNumber].price + " €</label>";
        }
        HTML += "</fieldset>";
        HTML += "<br>";


/* Lieferinformationen */
        
        HTML += "<fieldset>";
        HTML += "<legend>Lieferinformationen</legend>";
        HTML += "<input id='name' type='text' name='name' placeholder='Name'/>";
        HTML += "<br><br>";
        HTML += "<textarea id='adress' name='Area' cols='30' rows='4' placeholder='Please enter your adress' >";
        HTML += "</textarea>";
        HTML += "<br><br>";
        HTML += "</fieldset>";

        node.innerHTML += HTML;
    }


/* Handle Change */
     
    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.id == "Baum") {
            let node: HTMLElement = document.getElementById("treetype");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            treePrice = trees[priceIndex].price;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Kugeln") {
            let node: HTMLElement = document.getElementById("ornaments");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            ornamentsPrice = ornament[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountOrnaments") {
            let node: HTMLElement = document.getElementById("ornamentsnumber");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            ornamentsNumber = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "candles") {
            let node: HTMLElement = document.getElementById("candles");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            candlePrice = candles[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountCandles") {
            let node: HTMLElement = document.getElementById("candlesnumber");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            candleNumber = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "Lametta") {
            let node: HTMLElement = document.getElementById("lametta");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            lamettaPrice = lametta[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "amountLametta") {
            let node: HTMLElement = document.getElementById("lamettaNumber");
            let value: string = target.value;
            let _number: number = parseInt(value.substr(1, 2));
            lamettaNumber = _number;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.name == "Radiogroup") {
            let node: HTMLElement = document.getElementById("stand");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            standPrice = treestands[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.name == "Radiogroup1") {
            let node: HTMLElement = document.getElementById("delivery");
            let value: string = target.value;
            let _price: number = parseInt(value.substr(0, 1));
            deliveryPrice = delivery[_price].price;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + value.substr(1);
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "adress") {
            let node: HTMLElement = document.getElementById("adress");
            adress = target.value;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }

        if (target.id == "name") {
            let node: HTMLElement = document.getElementById("name");
            name = target.value;
            let HTML: string;
            HTML = "";
            HTML += "<a>";
            HTML += " " + target.value;
            HTML += "</a>";
            node.innerHTML = HTML;
        }


/* Gesamtpreis */
        
        let node: HTMLElement = document.getElementById("totalprice");
        let HTML: string;
        HTML = "";
        HTML += "<a>";
        HTML += (treePrice + (ornamentsPrice * ornamentsNumber) + (candlePrice * candleNumber) + (lamettaPrice * lamettaNumber) + standPrice + deliveryPrice);
        HTML += " €";
        HTML += "</a>";
        node.innerHTML = HTML;
    }


/* Überprüfung der Bestellung */
    
    function checkOrder(_event: Event): void {
        if (name == "" || adress == "" || treePrice == 0 || standPrice == 0 || ornamentsPrice == 0 || lamettaPrice == 0 || candlePrice == 0 || deliveryPrice == 0 || ornamentsNumber == 0 || lamettaNumber == 0 || candleNumber == 0) {
            document.getElementById("order").innerHTML = "Bitte füllen Sie die Felder aus";
        }
        else {
            document.getElementById("order").innerHTML = "Bestellung möglich";
        }
    }
    
}
