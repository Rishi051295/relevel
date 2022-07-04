/*Print num1 is the largest if num1>num2 and num1>num3.
Print num2 is the largest if num2 > num3.
Else print num3.*/

let num1 = 12, num2=25 , num3=18 ;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is the largest")
}
else if (num2 > num3) {
    console.log("num2 is the largest")
}
else {
    console.log("num3")
}