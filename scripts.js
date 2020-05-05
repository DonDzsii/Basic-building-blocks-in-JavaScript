let variable = 12;

//Condition:

let myVariable = true;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
}

//change the value of the variable from false to true


let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}

//Loops:

for (let i=0; i<10; i++) {
  console.log(i);
}

for (let i=1; i<=10; i++) {
  console.log(i);
}

for (let i=0; i<=20; i=i+2) {
  console.log(i);
}

//Functions:

//Exercise 1

// type printNumbersTill(20) or printNumbersTill(15) in to the console for the results
// The first number 1 in the solution is a mistake, it should be 0

let printNumbersTill = (n) => {
  for (let i = 0; i <= n; i++) {
    console.log(i);}
}

//Exercise 2

// does not work properly, cause getGreetingTo('Mark'); prints to the console

let getGreetingTo = (name)=>{
  
  return "Hello "+ name + "!" ;
}

//For loops and arrays

//Exercise 1


let printValues= function(array){
  for (let i=0; i<array.length; i++){
    console.log(array[i]);
  }
};


let myNumbers = [10, 20, 30, 20, 12];

myNumbers.forEach(function(number){
  console.log(number);
});

//Exercise 2

let printValues2=[0, 3, 6, 7, 9];

printValues2.forEach(function(value){
    console.log(value);
});