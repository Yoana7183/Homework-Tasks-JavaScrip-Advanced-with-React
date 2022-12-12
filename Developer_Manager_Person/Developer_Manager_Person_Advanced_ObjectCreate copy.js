const Person = {
    Department: 'Marketing',
    id: 100
};



const Developer = Object.create(Person)
this.Name = ''
this.Age = '';
this.skillset = '';
this.log = '';

const Maria = Object.create(Developer)
this.Name = 'Maria'
this.Age = 23;
this.skillset =  ['JavaScript', 'Angular', 'React', 'Vue'];
this.log = console.log(`Hi, I'm ${this.Name} and I'm ${this.Age} years old 
// I know ${this.skillset}`)

const Petur = Object.create(Developer)
this.Name = 'Petar Petrov';
this.Age = 19;
this.skillset = ['JavaScript', 'Angular', 'React', 'Vue'];
this.log = console.log(`Hi, I'm ${this.Name} and I'm  ${this.Age} years old 
// I know ${this.skillset}`)



const Manager = Object.create(Person)
this.Name = '';
this.Age = '';
this.manage ='';
this.log = '';


const BillGates = Object.create(Manager)
this.Name = 'Bill Gates';
this.Age = 43;
this.manage = [Petur,Maria];
this.log = listDevs();
// I manage ${this.Name}`)

var listDevs = function(dev){
    for(let i =0; i < this.BillGates.manage.length; i++) {
     console.log(this.BillGates.manage[i].Name);

    }
}
// var listDevs = function () {

//     for(let i =0; i < this.Dev.length; i++) {
//       var  devs = Dev  + this.Dev[i].Name+",";
//     console.log(`I managed ${devs}`);
//     }
// };





