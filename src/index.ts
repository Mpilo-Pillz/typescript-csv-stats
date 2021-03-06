import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

/* Create an object that satisfies the 'DataReader' interface */
// const csvFileReader = new CsvFileReader('football.csv');

/* Create an instance of Match Reader and pass in something satisfting
* the 'DataReader' interface */
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Huddersfield');
// const summary = new Summary(
//     new WinsAnalysis('Tottenham'),
//     new HtmlReport()
// );
// const summary = new Summary(new WinsAnalysis('West Ham'), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);



