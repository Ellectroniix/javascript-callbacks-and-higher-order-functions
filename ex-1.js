// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  return previousSalary+5000;
}

function forEach(array, operation) {
  // Start coding here
  let result = [];
  for(let i=0;i<array.length;i++){
    result.push(operation(array[i]));
  }
  return result;
}

// Using `forEach` function here

let newEmployeeSalaries = forEach(employeeSalaries,addSalary5000);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
// addSalary5000 เพราะ ถูกเรียกใช้เป็น Argument ของฟังก์ชัน forEach อีกที

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function? 
// forEach เพราะ Argument ที่ใช้ในฟังก์นี้เป็นการเรียกใช้ฟังก์ชันอีกทีซึ่งก็คือ addSalary5000 หรือก็คือเป็นฟังก์ชันที่บรรจุฟังก์ชันอื่นไว้ข้างใน

====================================
*/
