var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Fireworks;
(function (Fireworks) {
    window.addEventListener("load", handleLoad);
    // let url:string = "http://localhost:5001/";
    var url = "https://eiaserver2021.herokuapp.com/";
    var fireworks = [];
    var rocketArray = [];
    //Funktionen:
    function handleLoad(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var save, canvas;
            return __generator(this, function (_a) {
                console.log("Start");
                // für datenbank und server:
                findRockets();
                save = document.querySelector("button#save");
                save.addEventListener("click", saveRocket);
                canvas = document.querySelector("canvas");
                if (!canvas)
                    return [2 /*return*/];
                Fireworks.crc2 = canvas.getContext("2d");
                canvas.addEventListener("click", createFirework);
                window.setInterval(update, 20);
                return [2 /*return*/];
            });
        });
    }
    // Funktionen für Fromular 
    function saveRocket(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, query, response, responseText, _i, formData_1, entry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("saverocket");
                        formData = new FormData(document.forms[0]);
                        query = new URLSearchParams(formData);
                        return [4 /*yield*/, fetch(url + "?" + query.toString())];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        responseText = _a.sent();
                        alert(responseText);
                        for (_i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
                            entry = formData_1[_i];
                            console.log(entry);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function findRockets() {
        return __awaiter(this, void 0, void 0, function () {
            var response, responseText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url + "?" + "command=retrieve")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        responseText = _a.sent();
                        console.log(responseText);
                        createButtons(responseText);
                        return [2 /*return*/];
                }
            });
        });
    }
    function createButtons(_allSavedRockets) {
        var rockets = _allSavedRockets;
        rockets = JSON.parse(rockets);
        console.log(rockets);
        var rocketButtonDiv = document.querySelector("div#RocketButtons");
        for (var i = 0; i < rockets.length; i++) {
            var currentRocketInstruction = rockets[i].color; //as unknown as RocketInstruction)
            console.log(currentRocketInstruction);
        }
    }
    function createFirework(_event) {
        console.log("Create firework");
        var mouseX = _event.offsetX;
        var mouseY = _event.offsetY;
        var particleAmount = 15;
        var offset = (Math.PI * 2) / particleAmount;
        for (var i = 0; i < particleAmount; i++) {
            var firework = new HeartParticle(2, "blue", mouseX, mouseY, offset, i);
            fireworks.push(firework);
            console.log(fireworks);
        }
    }
    function update() {
        console.log("Update");
        Fireworks.crc2.fillStyle = "rgba(0, 0, 0, 0.09)";
        Fireworks.crc2.fillRect(0, 0, Fireworks.crc2.canvas.width, Fireworks.crc2.canvas.height);
        for (var _i = 0, fireworks_1 = fireworks; _i < fireworks_1.length; _i++) {
            var firework = fireworks_1[_i];
            firework.move(1 / 50);
            firework.draw();
        }
        deleteExpandables();
    }
    function deleteExpandables() {
        for (var i = fireworks.length - 1; i >= 0; i--) {
            if (fireworks[i].expendable)
                fireworks.splice(i, 1);
        }
    }
})(Fireworks || (Fireworks = {}));
