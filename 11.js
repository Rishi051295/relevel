/*Function `findDaysInMonth()` finds the number of days in a given month of a year.

If month is outside the range of 1 and 12 print “Invalid month”.
If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
Else if month is equal to 4, 6, 9 or 11 print “30 days”.
Else print “31 days”.*/

let month= 2 , year=2016 ;

if ( 1 >= month || month >=12 )  {
    console.log("invalid month")
}
else if (month === 4 || month ===6 || month ===9 || month===11) {
    console.log("30 days")
} 
else if ((month === 2 ) && ( year%4===0 , year%100 !==0 , year%400===0 )){
    console.log("February ") 
    console.log("29days")
}
else {
    console.log("28 days ")
}


