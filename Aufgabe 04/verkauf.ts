namespace Aufgabe4 {
    
export interface Products {
    name: string;
    price: number;
}
    
export let tree: Products[] = [ {name: "Nordmanntanne,", price: 75}, {name: "Blaufichte,", price: 60}, {name: "Rotfichte,", price: 80}, {name: "Kiefer,", price: 45}, {name: "Edeltanne,", price: 50}];
export let ornament: Products[] = [{name: "Kugeln w‰hlen,", price: 0}, {name: "gold,", price: 3}, {name: "silber,", price: 3}, {name: "rot,", price: 5}, {name: "blau,", price: 5}, {name: "violett,", price: 5}];
export let lametta: Products[] = [{name: "Lametta w‰hlen,", price: 0}, {name: "gold,", price: 2.99}, {name: "silber,", price: 2.99}, {name: "rot,", price: 2.99}, {name: "blau,", price: 2.99}, {name: "violett,", price: 2.99}];
export let candles: Products[] = [{name: "Kerzen w‰hlen,", price: 0}, {name: "weiﬂ,", price: 5}, {name: "rot,", price: 5}, {name: "gold,", price: 6}, {name: "silber,", price: 6}];
export let treestands: Products[] = [{name: "keinen,", price: 0}, {name: "Holz rustikal,", price: 15}, {name: "Metall silber,", price: 10}, {name: "Keramik,", price: 18}];
export let delivery: Products[] = [ {name: "DHL", price: 25}, {name: "Hermes", price: 20}, {name: "UPS", price: 40}];
 
}