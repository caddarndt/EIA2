namespace Aufgabe4 {
    
export interface Product {
    name: string;
    price: number;
}
    
    export let trees: Product[] = [{ name: "", price: 0 }, { name: "Nordmanntanne (50 Euro)", price: 50 }, { name: "Blaufichte (40 Euro)", price: 40 }, { name: "Rotfichte (65 Euro)", price: 65 }, { name: "Edeltanne (80 Euro)", price: 80 } ];
    export let christmasBall: Product[] = [{ name: "", price: 0 }, { name: "Rot 10x (10 Euro)", price: 10 }, { name: "Gold 10x (12 Euro)", price: 12 }, { name: "Silber 10x (12 Euro)", price: 12 }, { name: "Blau 10x (8 Euro)", price: 8 }, { name: "Violett 10x (10 Euro)", price: 10 }];
    export let tinsel: Product[] = [{ name: "", price: 0 }, { name: "Gold (3 Euro)", price: 3 }, { name: "Silber (3 Euro)", price: 3 }, { name: "Rot 50cm (2 Euro)", price: 2 }, { name: "Blau 50cm (4 Euro)", price: 4 }, { name: "Violett 50cm (3 Euro)", price: 3 }];
    export let stand: Product[] = [{ name: "", price: 0 }, { name: "Holz rustikal (20 Euro)", price: 20 }, { name: "Metall silber (20 Euro)", price: 20 }, { name: "Keramik (29 Euro)", price: 29 }];
    export let delivery: Product[] = [{ name: "", price: 0 }, { name: "UPS (18 Euro)", price: 18 }, { name: "DHL (15 Euro)", price: 15 }, { name: "Hermes (12 Euro)", price: 12 }];
    export let candle: Product[] = [{ name: "", price: 0 }, { name: "Rot (7 Euro)", price: 7 }, { name: "Weiﬂ (10 Euro)", price: 10 }, { name: "Elektrisch (15 Euro)", price: 15 }];
}