console.log("this is classes");

class Department {
    name : string;
    constructor(n:string){
        this.name = n
    }

    describe(this:Department){
        console.log("Dapratment", this.name);
    }
}

const accounting = new Department("Accounting")
accounting.describe()

const accountingCopy = {
    name:"Dummy",
    describe : accounting.describe
}

accountingCopy.describe()


//public private and access modifiers

class Department2 {
    name : string
    // employees: string[];
    private employees: string[];
    constructor(n:string){
        this.name = n
        this.employees = []
    }

    describe(this:Department2){
        console.log("Dapratment", this.name);
        for(let i:number=0;i<this.employees.length;i++){
            console.log("employeee", this.employees[i]);

        }
    }

    
    addEmployees(emp:string){
        this.employees.push(emp);
    }
}

const data = new Department2("Teacher")
data.describe()
data.addEmployees("Gaarvit")
data.describe()
data.addEmployees("Radhika")
data.describe()

