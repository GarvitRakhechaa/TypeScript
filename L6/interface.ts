console.log("this is  interfaces ");
interface Person {
    name:string;
    age:number;
    greet(text:string): void
}



let user1 : Person;

user1 = {
    name: "Garvit",
    age: 21,
    greet(text) : void {
        console.log((`${text}, ${this.name}`));   
    }
}

console.log(user1);
user1.greet("hello")

