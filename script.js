function isArray(variable) {
    return Array.isArray(variable);
}

console.log(isArray([1, 2, 3])); 
console.log(isArray("Hello")); 


function getFirstElement(array) {
    return array[0];
}

const myArray = [10, 20, 30];
console.log(getFirstElement(myArray)); 


function getLastElement(array) {
    return array[array.length - 1];
}

const myArray1 = [10, 20, 30];
console.log(getLastElement(myArray1)); // 30


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const suffixes = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    const order = index + 1;
    const suffix = suffixes[(order % 10) <= 3 && (order % 100) > 20 ? order % 10 : 0];
    console.log(`${order}${suffix} choice is ${color}.`);
});



let student = {
    firstName: "Mate",
    lastName: "Gotua",
};


student.age = 20;
console.log(student); 


delete student.lastName;
console.log(student); 


student.firstName = "Nino";
console.log(student);
