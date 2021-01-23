import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n').map((row: string): string[] => {
    return row.split(',')
})

let manCityWins = 0;

for (let match of matches) {
    if(match[1] === 'Man City' && match[5] === 'H') {
        manCityWins++;
    } else if (match[2] === 'Man City' && match[5] === 'A') {
        manCityWins++;
    }
}

console.log(`Man City won ${manCityWins} games`);


