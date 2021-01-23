import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult'

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of Match Reader and pass in something satisfting
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();




let manCityWins = 0;

for (let match of matchReader.matches) {
    if(match[1] === 'Man City' && match[5] === MatchResult.HomeWin) {
        manCityWins++;
    } else if (match[2] === 'Man City' && match[5] === MatchResult.AwayWin) {
        manCityWins++;
    }
}

console.log(`Man City won ${manCityWins} games`);


