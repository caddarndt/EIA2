"use strict";
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
exports.__esModule = true;
var Http = require("http");
var Url = require("url");
var Mongo = require("mongodb");
var Fireworks;
(function (Fireworks) {
    var rocketInstructions;
    var port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    var databaseUrl = "mongodb+srv://MyMongoDBUser:apfelbaum@eia2maike.6rcm4.mongodb.net/Potions?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    // Functions:
    function startServer(_port) {
        console.log("Server starting on port:" + _port);
        var server = Http.createServer();
        console.log(server);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    function connectToDatabase(_url) {
        return __awaiter(this, void 0, void 0, function () {
            var options, mongoClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = { useNewUrlParser: true, useUnifiedTopology: true };
                        mongoClient = new Mongo.MongoClient(_url, options);
                        return [4 /*yield*/, mongoClient.connect()];
                    case 1:
                        _a.sent();
                        rocketInstructions = mongoClient.db("Fireworks").collection("RocketInstructions");
                        console.log("database connection ", rocketInstructions != undefined);
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleRequest(_request, _response) {
        return __awaiter(this, void 0, void 0, function () {
            var url, command, allRocketInstructions, allRocketInstructionsString, _a, _b, jsonString;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("handle request");
                        _response.setHeader("content-type", "text/html; charset=utf-8");
                        _response.setHeader("Access-Control-Allow-Origin", "*");
                        if (!_request.url) return [3 /*break*/, 3];
                        url = Url.parse(_request.url, true);
                        command = url.query["command"];
                        if (!(command == "retrieve")) return [3 /*break*/, 2];
                        console.log("retrieve rocket instructions");
                        allRocketInstructions = rocketInstructions.find();
                        console.log(allRocketInstructions);
                        _b = (_a = JSON).stringify;
                        return [4 /*yield*/, allRocketInstructions.toArray()];
                    case 1:
                        allRocketInstructionsString = _b.apply(_a, [_c.sent()]);
                        console.log(allRocketInstructionsString);
                        // _response.write("all saved rocket: ");
                        _response.write(allRocketInstructionsString);
                        return [3 /*break*/, 3];
                    case 2:
                        _response.write("This is your rocket: ");
                        jsonString = JSON.stringify(url.query);
                        _response.write(jsonString);
                        console.log("save rocket");
                        storeRocketInstruction(url.query);
                        _c.label = 3;
                    case 3:
                        _response.end();
                        return [2 /*return*/];
                }
            });
        });
    }
    function storeRocketInstruction(_rocketInstruction) {
        console.log("store rocket instruction");
        rocketInstructions.insertOne(_rocketInstruction);
    }
})(Fireworks = exports.Fireworks || (exports.Fireworks = {}));
