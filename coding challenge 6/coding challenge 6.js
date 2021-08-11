const MarkProperties= {
   fullName:'Mark Miller',
    mass:78,
    height:1.69,
    calcBMIMark:function (){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};
const JohnProperties= {
    fullName:'John Smith',
    mass:92,
    height:1.95,
    calcBMIJohn:function (){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    }
};
if(MarkProperties.calcBMIMark()  > JohnProperties.calcBMIJohn()){
    console.log(`Mark BMI (${MarkProperties.calcBMIMark()}) is higher than John (${JohnProperties.calcBMIJohn()})`)
}
else{
    console.log(`John BMI (${JohnProperties.calcBMIJohn()}) is higher than Mark (${MarkProperties.calcBMIMark()})`)
}

