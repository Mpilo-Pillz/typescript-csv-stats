"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
/* Create an object that satisfies the 'DataReader' interface */
// const csvFileReader = new CsvFileReader('football.csv');
/* Create an instance of Match Reader and pass in something satisfting
* the 'DataReader' interface */
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Huddersfield');
// const summary = new Summary(
//     new WinsAnalysis('Tottenham'),
//     new HtmlReport()
// );
// const summary = new Summary(new WinsAnalysis('West Ham'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
