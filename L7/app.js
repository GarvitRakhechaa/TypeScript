"use strict";
console.log("Type Guards");
function add3(a, b) {
    //add typeGuard
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add3(30, 30));
console.log(add3("30", 30));
const employee1 = {
    name: "Garvit",
    privilages: ["create-server"],
    startDate: new Date()
};
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    console.log(`Name: ${emp.name}`);
    // console.log(`Name: ${emp.privilages}`);
    //Type Guard
    if ("privilages" in emp) {
        console.log(`Name: ${emp.privilages}`);
    }
    if ("startDate" in emp) {
        console.log(`Name: ${emp.startDate}`);
    }
}
printEmployeeInformation(employee1);
// Type guard in class
class Car {
    drive() {
        console.log("Driving a car...");
    }
}
class Truck {
    drive() {
        console.log("Driving a car...");
    }
    loadCargo(amount) {
        console.log("Loading cargo...", amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(500);
    }
    // or
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(500);
    }
}
useVehicle(v1);
useVehicle(v2);
//Type Casting
