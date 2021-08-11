const Animal = function (options){
    this.name=options.name;
    this.color=options.color;
}
//Animal.prototype.voice=function (){
//console.log('Base voice from',this.name);
//}
console.log(Animal.prototype)
const dog= new Animal({name:'Rex',color:'#fff'})
