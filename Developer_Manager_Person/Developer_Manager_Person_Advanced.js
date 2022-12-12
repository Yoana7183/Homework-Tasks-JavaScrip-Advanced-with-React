class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`I'm ${this.name}, ${this.age} years old.`);

    }
}

class Developer extends Person {
    constructor(name, age, skills) {
        // call the parent constructor:
        super(name, age)
        this.skills = skills
    }
     greet() {
       super.greet();
       console.log(`My skills are: ${this.skills}`);
    }
}

class Manager extends Person {
    constructor(name, age, developers) {
        
        super(name, age)
        this.developers = developers;
        //console.log(this);
        
    }
    greet() {
        super.greet()
       var devs = '';

        for(let i =0; i < this.developers.length; i++) {
            devs = devs  + this.developers[i].name+",";
        }
   
       console.log(`I manage ${devs}`);
    }
}

let pesho = new Developer('Pesho Petrov', 26, ['JS', 'React', 'Vue'])
let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let gates = new Manager('Bill Gates', 43, [maria,pesho])

pesho.greet()
maria.greet()
gates.greet()

