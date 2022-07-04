/*Perform arithmetic operations on two numbers

Print result of num1+num2 if operation is “add”
Print result of num1-num2 if operation is “subtract”
Print result of num1*num2 if operation is “multiply”
Print result of num1/num2 if operation is “divide”
Print result of num1%num2 if operation is “modulus”
Else print “Invalid operation */

let num1=45 , num2=5;
if ( num1 + num2 ) {
    console.log(`${num1} + ${num2} == ${num1+num2} its a addition`)
}
else if (num1 -num2) {
    console.log(`${num1} - ${num2} == ${num1-num2} its a subtraction`)
}
else if (num1 * num2) {
    console.log(`${num1} * ${num2} == ${num1*num2} its a multiplication`)
}
else if (num1 / num2) {
    console.log(`${num1} * ${num2} == ${num1*num2} its a multiplication`)
}
else if (num1 % num2) {
    console.log(`${num1} % ${num2} == ${num1%num2} its a modulus`)
}
else {
    console.log("its a invalid operation")
}

console.log(num1 / num2);