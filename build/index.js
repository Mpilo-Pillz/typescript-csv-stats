"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVFileReasder_1 = require("./CSVFileReasder");
var reader = new CSVFileReasder_1.CsvFileReader('football.csv');
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
;
var manCityWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man City' && match[5] === MatchResult.HomeWin) {
        manCityWins++;
    }
    else if (match[2] === 'Man City' && match[5] === MatchResult.AwayWin) {
        manCityWins++;
    }
}
console.log("Man City won " + manCityWins + " games");
