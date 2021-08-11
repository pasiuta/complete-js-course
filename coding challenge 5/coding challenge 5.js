const bills =[125,555,44];
const tips =[0.15,0.20];
function calcTip(bills){
if (bills <=300 && bills >=50){
    console.log(bills * tips[0])
}
else{
    console.log(bills*tips[1])
}
}
calcTip(bills[1]);