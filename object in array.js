// let baseobject={};
// console.log(baseobject);

// let filledobject={name: 'Rishi'}
// console.log(filledobject);

// console.log(filledobject.name);

// let objectarray ={vowels : ["a", "e", "i", "o" ,"u"]};
// console.log(objectarray);

// console.log(objectarray. vowels .at(3));

let numArray =[234 , 34 ,12 , 1 , 23];

let minValue = numArray[0];
for (let i =0 ; i <= numArray.length-1 ; i++) {
    if(numArray[i]<minValue) {
        minValue = numArray[i];
    }
}
console.log(minValue);