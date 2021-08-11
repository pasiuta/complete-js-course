const firstTeam='Dolphins';
const secondTeam='Koalas';
const DolphinsAverage=(96+108+89) / 3;
const KoalasAverage=(88+91+110) / 3;
if(DolphinsAverage > KoalasAverage && (DolphinsAverage || KoalasAverage) > 100){
    console.log(firstTeam + ' winners');
}
else if (DolphinsAverage < KoalasAverage && (DolphinsAverage || KoalasAverage) > 100){
    console.log(secondTeam + 'winners');
}
else if(DolphinsAverage === KoalasAverage && DolphinsAverage >= 100 && KoalasAverage >=100)
    console.log('Both winners');  
else{
    console.log('nobody won');
}