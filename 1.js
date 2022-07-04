/*Given an integer N. Your task is to check if the integer is greater than, less than or equal to 5.
If the integer is greater than 5, then print "Greater than 5" (without quotes).
If the integer is less than 5, then print "Less than 5".
If the integer is equal to 5, then print "Equal to 5".*/

// let a=8 ;

// if ( a > 5) {
//     console.log(" a is greater than 5") ;
// }
// else if ( a === 5 ) {
//     console.log(" a is equal to 5") ;
// }
// else {
//     console.log("a is less than 5") ;
// }
 
function integer(a) {

    if (a > 5) {
        console.log(" a is greater than 5") ;
      }
    else if ( a === 5 ) {
        console.log(" a is equal to 5");
    }
    else {
        console.log(" a is smaller than b ");
    }
}

console.log(integer(8));

