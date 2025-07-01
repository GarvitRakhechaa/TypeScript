console.log("Type Guards");

type combineable1 = string | number
type numeric = number | boolean
type Universal = combineable1 & numeric

function add3(a: combineable1, b: combineable1){
    //add typeGuard
    if (typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString()
    }
    return a + b
}

console.log(add3(30, 30));
console.log(add3("30", 30));

type Admin = {
    name: string
    privilages : string[]
}



//2
// type Admin = {
//     name: string
//     provilages : string[]
// }

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee
type unknownEmployee = Admin | Employee

const employee1 : ElevatedEmployee = {
    name: "Garvit",
    privilages: ["create-server"],
    startDate: new Date()
}

function printEmployeeInformation (emp:unknownEmployee){
    console.log(`Name: ${emp.name}`);
    console.log(`Name: ${emp.name}`);
    // console.log(`Name: ${emp.privilages}`);
    
    //Type Guard
    if("privilages" in emp){
        console.log(`Name: ${emp.privilages}`);
    }

    if("startDate" in emp){
        console.log(`Name: ${emp.startDate}`);
    }
}

printEmployeeInformation(employee1)


// Type guard in class

class Car {
    drive(){
        console.log("Driving a car...");    
    }
}

class Truck {
    drive(){
            console.log("Driving a car...");    
    }
    loadCargo(amount: number){
        console.log("Loading cargo...", amount);
        
    }
}

type vehicle = Car | Truck
const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: vehicle){
    vehicle.drive()
    if("loadCargo" in vehicle){
        vehicle.loadCargo(500)
    }

    // or
    if(vehicle instanceof Truck){
        vehicle.loadCargo(500)

    }
}

useVehicle(v1)
useVehicle(v2)

//Type Casting


