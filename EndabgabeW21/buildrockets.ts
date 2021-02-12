namespace finalCanvas {

        
    //* Hauptfunktion *//
        
    function main(): void {
        document.addEventListener("DOMContentLoaded", createShop);
        document.addEventListener("DOMContentLoaded", changeEventListener);
    }
        
    function changeEventListener(_event: Event): void {
            let fieldset: HTMLElement = document.getElementById("fieldset");
            fieldset.addEventListener("change", handleChange);
    }
      
    main();
        
    }   
        