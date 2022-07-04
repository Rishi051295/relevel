/*Check if a triangle is equilateral, scalene, or isosceles*/

let side1= 20 , side2=20, side3=20 ;

if ( side1 === side2 && side2 === side3 && side3===side1) {
    console.log("Its a equilateral triangle")
}
else if (side1 === side2 || side2===side3) {
    console.log("its a isosceles triangle")
}
else {
    console.log("its a scalene triangle")
}