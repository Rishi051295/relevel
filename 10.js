/* Find check if a year is leap year or not
If year is divisble by 4 and not divisble by 100 then print “leap year”.
Or if year is divisible by 400 then print “leap year”.
Else print “not a leap year”*/

let year= 2013;

if (year % 4 === 0 && year %100 !==0 ) {
    console.log("leap year")
}
else if (year % 400 === 0 ) {
    console.log("leap year")
}
else {
    console.log("not a leap year")
}