namespace Aufgabe5 {

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

    
//* Variablen für die Auswahl *//    

let treePrice: number = 0;
let ballPrice: number = 0;
let candlePrice: number = 0;
let tinselPrice: number = 0;
let standPrice: number = 0;
let deliveryPrice: number = 0;
let name: string = "";
let adress: string = "";


    
//* Hauptfunktion, Aufbau des Inhalts vom Fieldset *//   
    
    function writeHTML(): void {
        let node: HTMLElement = document.getElementById("fieldset");
        let childNodeHTML: string;
        
        childNodeHTML += "</select>";
        childNodeHTML = "<h3>Baumart</h3>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (let i: number = 0; i < tree.length; i++) {
            childNodeHTML += "<option value='" + i + tree[i].name + "'>" + tree[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Weihnachtskugeln</h3>";
        childNodeHTML += "<select name='Select' id='christmasBalls'>";
        for (let i: number = 0; i < christmasBall.length; i++) {
            childNodeHTML += "<option value='" + i + christmasBall[i].name + "'>" + christmasBall[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (let i: number = 0; i < candle.length; i++) {
            childNodeHTML += "<option value='" + i + candle[i].name + "'>" + candle[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name='Select' id='tinsels'>";
        for (let i: number = 0; i < tinsel.length; i++) {
            childNodeHTML += "<option value='" + i + tinsel[i].name + "'>" + tinsel[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Baumstaender</h3>";
        childNodeHTML += "<select name='Select' id='stands'>";
        for (let i: number = 0; i < stand.length; i++) {
            childNodeHTML += "<option value='" + i + stand[i].name + "'>" + stand[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferoption</h3>";
        childNodeHTML += "<select name='Select' id='deliveries'>";
        for (let i: number = 0; i < delivery.length; i++) {
            childNodeHTML += "<option value='" + i + delivery[i].name + "'>" + delivery[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferinformationen</h3>";
        childNodeHTML += "<input id='names' type='text' name='Text' placeholder='Name' required/>";
        childNodeHTML += "<input id='adresses' type='text' name='Text' placeholder='Adresse' required/>";
        childNodeHTML += "<br>";
  
        node.innerHTML += childNodeHTML;
    }
 
    
    function init(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", checkInputs);
    }

  
    
//* Handle Change *//    
    
    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.id == "trees") {
            let node: HTMLElement = document.getElementById("tree");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            treePrice = tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(treePrice);
        }
        
        if (target.id == "christmasBalls") {
            let node: HTMLElement = document.getElementById("ball");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            ballPrice = christmasBall[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(ballPrice);
        }
        
        if (target.id == "candles") {
            let node: HTMLElement = document.getElementById("candle");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            candlePrice = candle[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(candlePrice);
        }
        
        if (target.id == "tinsels") {
            let node: HTMLElement = document.getElementById("tinsel");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            tinselPrice = tinsel[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(tinselPrice);
        }
        
        if (target.id == "stands") {
            let node: HTMLElement = document.getElementById("stand");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            standPrice = stand[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(standPrice);
        }
        
        if (target.id == "deliveries") {
            let node: HTMLElement = document.getElementById("delivery");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            deliveryPrice = delivery[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(deliveryPrice);
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
        
        let HTML: string;
        let node: HTMLElement = document.getElementById("price");
        HTML = " ";
        HTML += (treePrice + ballPrice + candlePrice + tinselPrice + standPrice + deliveryPrice);
        HTML += " Euro";
        node.innerHTML = HTML;
        }


//* Bestellung prüfen *//    
    
    function checkInputs(): void {
        console.log("Error");
        if (treePrice == 0 || ballPrice == 0 || candlePrice == 0 || tinselPrice == 0 || standPrice == 0 || deliveryPrice == 0 || name == "" || adress == "")
         document.getElementById("check").innerHTML = "Füllen Sie die Felder aus!"; 
        else {
            document.getElementById("check").innerHTML = "Bestellung möglich";
        }
    }
}
    
