//Literal way
let arr=[10,20,30,40,50,60,70];
console.log(arr);

//new Keyword
let skills = new Array("java","python","c");
console.log(skills);


console.log("----------------------------");
//Arrray inbuilt functions
let arr1=[null,true,5000,'js'];
console.log(arr1);

//arr1.push(6000,7000,4321);
arr1.push(...arr) //output[null,true,5000,'js',10,20,30,40,50,60,70] //By Using  split operator(...)
arr1.push(arr) //output[null,true,5000,'js',[10,20,30,40,50,60,70]]
arr1.push(41,"java") //insert elements at last in arrays
console.log(arr1);

arr1.pop() //Not parameterized -->to remove
console.log(arr1);

arr1.shift() //Removes element at 0th index (first of the array)
console.log(arr1);

arr1.unshift(123,564,786); //inserts new elements at starting of the  array
console.log(arr1);

arr1.splice(2,2) //2 methods are there of splice , one is 2 parameterized and other is 3
console.log(arr1);
//arr1.splice(start number(index number to start delete from)  , delete count (count of numbers to delete))


arr1.splice(2,0,true,null,5000) //2-index , 0-deleteCount , true,null,5000-will be  inserted into arr1   //inserts new elements at the start of the array and returns the new length of the array
console.log(arr1);

arr1.splice(1,5,"Java") //1-index , 5-deletecount , 'java'-insert at index 1
console.log(arr1);

arr1.reverse();
console.log(arr1);

arr1.sort()
console.log(arr1);





