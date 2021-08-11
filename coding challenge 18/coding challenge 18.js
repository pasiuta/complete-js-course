 const dogs = [
        { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
        { weight: 8, curFood: 200, owners: ['Matilda'] },
        { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
        { weight: 32, curFood: 340, owners: ['Michael'] }
    ];
 dogs.forEach(function (dogs){
     dogs.recommendedFood=dogs.weight ** 0.75 * 28;
 });
//console.log(dogs)
 const dogSarah=dogs.find(dog=>dog.owners.includes('Sarah'))
 //console.log(dogSarah)
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? 'much': 'little'}`)
 const OwnersEatTooMuch=dogs.filter(dog=>dog.curFood > dog.recommendedFood)
     .map(dog=>dog.owners);
console.log(OwnersEatTooMuch );
const OwnersEatTooLittle=dogs.filter(dog=>dog.curFood<dog.recommendedFood)
    .map(dog=>dog.owners);
console.log(OwnersEatTooLittle);
console.log(`${OwnersEatTooMuch.join(' and ')}'s dogs eat too much`);
 console.log(`${OwnersEatTooLittle.join(' and ')}'s dogs eat too little`)
 console.log(dogs.some(dog =>dog.curFood===dog.recommendedFood));
 const checkEatingOkay = dog=>
     dog.curFood>dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
 console.log(dogs.some(checkEatingOkay));

 console.log(dogs.filter(checkEatingOkay));
 const dogsSorted=dogs.slice().sort((a,b)=>a.recommendedFood -b.recommendedFood)
 console.log(dogsSorted);
