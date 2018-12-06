"use strict";
const Http = require("http"); //Import eines Modul als HTTP Objekt
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); //Consolelog wird ausgegeben mit nachricht "Starting server"
    let port = process.env.PORT; //Stellt den PORT als number ein zum Heroku server  
    if (port == undefined)
        port = 8100; //soll er die nummer 8100 haben (verbindet Heroku mit EIA2)
    let server = Http.createServer(); //variable server wird als typ Http.Server und wird als Http.creatserver funktion gleichgesetzt
    server.addListener("request", handleRequest); //F�gt einen Listener hinzu der dem h�ndler bescheid gibt wenn handleRequest getriggert wurde
    server.addListener("listening", handleListen); //solange der K�ufer auf die funktion zugreift, sieht der H�ndler das.
    server.listen(port); //schaut zu was f�r ein Port verwendet wird. (8100)
    function handleListen() {
        console.log("Listening"); //Consolelog "Listening" wird ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log(_request.url);
        console.log("request");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //setzt in den HTML header "content-type" und text/html; charset=utf-8
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Access-Control-Allow-Origin wird auch in den Header gesetzt, damit die antwort des Codes mit dem Nutzer geteilt wird.
        // _response.write(_request.url);          //gibt bei _response.write eine angefragte URL aus             
        console.log(_request.url);
        let url = Url.parse(_request.url, true).query;
        console.log(url);
        for (let key in url) {
            console.log(url[key]);
            console.log(key);
            _response.write(key + " = " + url[key] + "<br>");
        }
        _response.end(); //beendet die schleife der _response
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server6.js.map