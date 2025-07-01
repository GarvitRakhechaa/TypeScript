//Object Array , Tuple , Enum
console.log("learning objects");
const person :{
    firstName: string,
    age:number,
    xyz: {
        person: string
    },
    skills: string[]  // string type ka array
}={
    firstName: "Patel",
    age: 31,
    xyz: {
        person:"garvit"
    },
    skills: ["html", "css", "Javascript"]
}


// array 
let favouriteLanguage : string[] = ["garvit"]
favouriteLanguage[1] = "god"
// favouriteLanguage[2] = 2 

let AllTypes : any[] = ["garvit", 4, true,[], {} ] //avoid this in ts



//Tuple

const people : {
    name: string,
    age:number,
    skills: string[],
    product: [number, string ] // this is tuple
} = {
    name : "Garvit",
    age: 21,
    skills: ["react"],
    product: [10, "macbook"]
}
people.product[1] = "garvit"

//enum

enum Role {ADMIN, AUTHOR, READ_ONLY}
const peopl2: {
    name: string,
    age:number,
    skills: string[],
    product: [number, string ],
    role: Role
} ={
    name: "Sakshi",
    age: 20,
    skills: ["html", "css"],
    product: [10,"notebook"],
    role: Role.ADMIN
}

if(peopl2.role === Role.AUTHOR){
    console.log("Author");
}
else if(peopl2.role === Role.ADMIN){
    console.log("ADMIN");
}else{
    console.log("READ_ONLY");
}

console.log(person);
console.log(people);

