//Literal way
let empDetails = {
    name:"Sai Kumar",
    role:"Developer",
    salary:250000,
    skills:["System Design","Microservices","Monolithic Architecture","Event driven","Database Design"],
    address:{
        city:"Guntur",
        zipCode:522201
    }
}
console.log(empDetails);

//using new keyword
let emp2 = new Object ({
    name:"Sai Kumar",
    role:"Developer",
    salary:250000,
    skills:["System Design","Microservices","Monolithic Architecture","Event driven","Database Design"],
    address:{
        city:"Guntur",
        zipCode:522201
    }
})
console.log(emp2);


//CRUD opertaions
console.log("=============CRUD Operations================")
console.log(empDetails.name);
console.log(empDetails.skills[1]);

empDetails.skills.map((x)=>{
    console.log(x);
})
console.log(empDetails.address);
console.log(empDetails.address.city);


Object.seal(empDetails) //Prevents modification , restricts adding new elements 
Object.freeze(empDetails) //we cannot perform CRUD operations
console.log(Object.isFrozen(empDetails));
console.log(Object.isSealed(empDetails));
//TO add
empDetails.email="sai@gmail.com"
empDetails.phone=987654321
console.log(empDetails)
//TO delete
delete empDetails.skills;
delete empDetails.name;
console.log(empDetails)
//TO update
empDetails.salary=150000
console.log(empDetails)














//Object Inbuilt functions
console.log("======================Object Inbuilt Functions=========================")

console.log(Object.keys(empDetails));//Keys - name,role,salary.................
console.log(Object.values(empDetails));//Values - sai kumar,developer..........
console.log(Object.entries(empDetails));//both keys-values






Object.seal()