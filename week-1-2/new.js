const dog = {
    name: "doggie",
    legCount: 4,
    speaks: "bhow bhow"
};

console.log("animal", dog["name"], dog["speaks"]);

// class - give a reusable structure (blueprint)
class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak() {
        console.log(this.name, "says", this.speaks);
    }
}

let cat = new Animal("cat", 4, "meow meow"); // create object
cat.speak(); // method