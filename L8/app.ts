//generics intro


const fruits :Array<string>= ["Apple", "Mango"]
fruits.push("hello")
// fruits.push(5)


type Person2 = {
    name: string
    age:number
}

const Boy: Person2 = {
    name:"Garvit",
    age: 20
}

const newArray : Array<Person2> = [{name:"Rahul", age:20}]


function merge<T, U>(objA:T, objB:U){  
    return {...objA, ...objB}
}

const res2 = merge({name:"Garvit"}, {role:"software-Engineer"})
console.log(res2);

//generic constraints

function createObject<T extends string , U extends number, V extends boolean >(key:T, value:U, isActive:V ):{key:T,value:U, isActive:V}{
    return {key,value,isActive}
}


const obj1 = createObject("age", 25, true)
console.log(obj1);

//generic interfaces
interface Box<T> {
    value: T
}

const numberBox: Box<number> = { value: 200 };
const stringBox: Box<string> = { value: "Dummy" }
const objectBox : Box<object> = {value : {name:"Patel"}}
console.log(numberBox);
console.log(stringBox);
console.log(objectBox);


// Generic Default 

interface User3<T = string> {
    data2: T,
    status: number
}

// type Person2 = {
//     name: string;
//     age: number;
// }

const response :User3 = { // by default string le liya on data
    data2:"Success",
    status:200
}

const jsonResponse : User3<Object> = {data2:{key:"value"},status:300}


// const response :User = {data:"success",status:200}
// const response: User = { data2: "Success", status: 200 }

// 4. Generics with class

class Container<T> {
    private content: T;
    constructor(content: T) {
        this.content = content
    }
    getContent() : T {
        return this.content;
    }
}

const stringContainer = new Container<string>("Hello");
// console.log(stringContainer.getContent());

const numberContainer = new Container<number>(100);
// console.log(numberContainer.getContent());



// Generic with Array

function getFirst<T> (arr : T[]) : T {
    return arr[0];
}

const firstNumber = getFirst([1,2,3,4]);
const firstString = getFirst(["a","b","c"]);
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

function getProperty<T extends object, K extends keyof T>(obj : T , key : K) : T[K] {
    return obj[key]
}

const person3 = {name:"Patel", age:21};
// const person2 = {fullname:"Patel", salary:21};
const name1 = getProperty(person3, "name");
// const age = getProperty(person2, "age");
console.log(name1);




















