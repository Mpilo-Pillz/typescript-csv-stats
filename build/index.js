"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
// Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of Match Reader and pass in something satisfting
// the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manCityWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man City' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manCityWins++;
    }
    else if (match[2] === 'Man City' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manCityWins++;
    }
}
console.log("Man City won " + manCityWins + " games");
