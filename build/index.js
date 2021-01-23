"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n').map(function (row) {
    return row.split(',');
});
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
;
var manCityWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man City' && match[5] === MatchResult.HomeWin) {
        manCityWins++;
    }
    else if (match[2] === 'Man City' && match[5] === MatchResult.AwayWin) {
        manCityWins++;
    }
}
console.log("Man City won " + manCityWins + " games");
