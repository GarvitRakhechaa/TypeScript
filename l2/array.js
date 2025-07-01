"use strict";
//Object Array , Tuple , Enum
console.log("learning objects");
const person = {
    firstName: "Patel",
    age: 31,
    xyz: {
        person: "garvit"
    },
    skills: ["html", "css", "Javascript"]
};
// array 
let favouriteLanguage = ["garvit"];
favouriteLanguage[1] = "god";
// favouriteLanguage[2] = 2 
let AllTypes = ["garvit", 4, true, [], {}]; //avoid this in ts
//Tuple
const people = {
    name: "Garvit",
    age: 21,
    skills: ["react"],
    product: [10, "macbook"]
};
people.product[1] = "garvit";
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
const peopl2 = {
    name: "Sakshi",
    age: 20,
    skills: ["html", "css"],
    product: [10, "notebook"],
    role: Role.ADMIN
};
if (peopl2.role === Role.AUTHOR) {
    console.log("Author");
}
else if (peopl2.role === Role.ADMIN) {
    console.log("ADMIN");
}
else {
    console.log("READ_ONLY");
}
console.log(person);
console.log(people);
