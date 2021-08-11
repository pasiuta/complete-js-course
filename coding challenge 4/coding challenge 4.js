let calcAverage = (first, second, third) => (first+second+third)/3;
let averageDolphins= calcAverage(55,54,41);
let averageKoalas= calcAverage(23,34,27);
const checkWinner =function(averageDolphins,averageKoalas) {

    if (averageDolphins >= 2 * averageKoalas) {
        console.log(`Koalas win ${averageDolphins} vs ${averageKoalas}`);
    }
    else if(averageKoalas >= 2 * averageDolphins) {
            console.log(`Dolphins win ${averageKoalas} vs ${averageDolphins}`);
        }
    else{
        console.log('No team wins');
    }
}
checkWinner(averageDolphins,averageKoalas);
checkWinner(600,245);
