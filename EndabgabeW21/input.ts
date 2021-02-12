namespace finalCanvas {
    
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
                ],
             
                "christmasBall": [
                    { name: "-", price: 0},
                    { name: "Rot", price: 2},
                    { name: "Gold", price: 2},
                    { name: "Silber", price: 4}, 
                 ],
                
                "tinsel": [
                    { name: "-", price: 0},
                    { name: "Rot", price: 3},
                    { name: "Gold", price: 3},
                    { name: "Silber", price: 5}, 
                 ],
            };
    
          export interface HomoVar {
            [key: string]: Product[];
        }
        
    }