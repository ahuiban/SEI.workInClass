
class BasicHost {
    constructor(name, ocupation) {
        this.name = name;
        this.ocupation = ocupation;
    }
    saySpecs() {
        console.log(`My name is ${this.name}. My ocupation is ${this.ocupation}`);
    }
}


let host1 = new BasicHost("Roget", "creator of Roget's Thesaurus.");
console.log(host1)
let host2 = new BasicHost("Andrei", "SE");
console.log(host2)

host1.saySpecs();
host2.saySpecs();