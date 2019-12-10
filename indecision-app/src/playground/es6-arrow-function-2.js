const add = function(a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(55, 1));

const user = {
  name: "beibei",
  cities: ["sto", "bj", "sh"],
  printPlacesLived() {
    //const cityMsg = this.cities.map((city)=>{
    return this.cities.map(city => this.name + "has lived in " + city);
    /*this.cities.forEach((city)=>{
            console.log(this.name + 'has lived in '+city);
        });*/
    return cityMsg;
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 3, 4],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number);
  }
};
console.log(multiplier.multiply());
