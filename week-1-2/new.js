const dog = {
    name: "doggie",
    legCount: 4,
    speaks: "bhow bhow"
};

console.log("animal", dog["name"], dog["speaks"]);

// class - give a reusable structure
class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
}

let cat = new Animal("cat", 4, "meow meow");