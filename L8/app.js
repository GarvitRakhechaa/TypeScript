"use strict";
//generics intro
const fruits = ["Apple", "Mango"];
fruits.push("hello");
const Boy = {
    name: "Garvit",
    age: 20
};
const newArray = [{ name: "Rahul", age: 20 }];
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const res2 = merge({ name: "Garvit" }, { role: "software-Engineer" });
console.log(res2);
//generic constraints
function createObject(key, value, isActive) {
    return { key, value, isActive };
}
const obj1 = createObject("age", 25, true);
console.log(obj1);
const numberBox = { value: 200 };
const stringBox = { value: "Dummy" };
const objectBox = { value: { name: "Patel" } };
console.log(numberBox);
console.log(stringBox);
console.log(objectBox);
// type Person2 = {
//     name: string;
//     age: number;
// }
const response = {
    data2: "Success",
    status: 200
};
const jsonResponse = { data2: { key: "value" }, status: 300 };
// const response :User = {data:"success",status:200}
// const response: User = { data2: "Success", status: 200 }
// 4. Generics with class
class Container {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
const stringContainer = new Container("Hello");
// console.log(stringContainer.getContent());
const numberContainer = new Container(100);
// console.log(numberContainer.getContent());
// Generic with Array
function getFirst(arr) {
    return arr[0];
}
const firstNumber = getFirst([1, 2, 3, 4]);
const firstString = getFirst(["a", "b", "c"]);
// console.log(firstNumber);
// console.log(firstString);
// Generic with keyof
// const Person = {key:"Mernstack"}
// console.log(Person["key"]);
// function getProperty(obj : object, key : string){
//     return obj[key]
// }
// const res1 = getProperty({}, "name");
// console.log(res1);
function getProperty(obj, key) {
    return obj[key];
}
const person3 = { name: "Patel", age: 21 };
// const person2 = {fullname:"Patel", salary:21};
const name1 = getProperty(person3, "name");
// const age = getProperty(person2, "age");
console.log(name1);
