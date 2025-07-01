"use strict";
console.log("this is  interfaces ");
let user1;
user1 = {
    name: "Garvit",
    age: 21,
    greet(text) {
        console.log((`${text}, ${this.name}`));
    }
};
console.log(user1);
user1.greet("hello");
