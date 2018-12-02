namespace Aufgabe6 {
    
export interface Product {
    name: string;
    price: number;
}
    
export let data: HomoVar
        = {
            "tree": [
                { name: "-", price: 0},
                { name: "Nordmanntanne", price: 50},
                { name: "Blaufichte", price: 40},
                { name: "Rotfichte", price: 65},
                { name: "Edeltanne", price: 80}
            ],
         
            "christmasBall": [
                { name: "-", price: 0},
                { name: "Rot", price: 2},
                { name: "Gold", price: 2},
                { name: "Silber", price: 4}, 
                { name: "Blau", price: 4}  
             ],
            
            "tinsel": [
                { name: "-", price: 0},
                { name: "Rot", price: 3},
                { name: "Gold", price: 3},
                { name: "Silber", price: 5}, 
                { name: "Blau", price: 5}
             ],
            
             "candle": [
                { name: "-", price: 0},
                { name: "Rot", price: 5},
                { name: "Weiﬂ", price: 5},
                { name: "Elektronisch", price: 8}
                    ],
            
            "stand": [
                { name: "-", price: 0},
                { name: "Holz rustikal", price: 10},
                { name: "Metall silber", price: 15},
                { name: "Keramik", price: 20}
                    ],
            
            "delivery": [
                { name: "DHL", price: 15},
                { name: "Hermes", price: 12},
                { name: "UPS", price: 18}
                ]
                
        };

      export interface HomoVar {
        [key: string]: Product[];
    }
    
}