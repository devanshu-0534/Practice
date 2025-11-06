
// Blueprint
// class class_name{
//   constructor(){
//        BLuePrint
//   }
// }

// ceates objects with new keyword
// let name = new class_name(....values....)

class Animal{
    constructor(name, color, legCount, lang){
        this.name = name;
        this.color = color;
        this.legCount = legCount;
        this.lang = lang;
    }
        speak(){
            console.log("Hi there " + this.lang)
        }
}

let cat1 = new Animal("Russian Cat","Grey",4,"Meow");
let cat2 = new Animal("Persian Cat", "white", 4,"Meow Meow")
let cat3 = new Animal("Siberian Cat", "Orange-White", 4,"Meow Meow Meow")

// cat1.speak();
console.log(cat1,cat2,cat3)