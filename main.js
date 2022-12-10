function count(num1,num2){
    if(num1 < num2){
        return num1
    }else{
        return num2
    }
}
console.log(count(7,15));


// -----------------------

 

let arr1 = [1, 2, 3, 4, 5],
    arr2= [1, 2, 3, 4, 5, 6];

function twoMass (arr1, arr2) {
    if (arr1.length < arr2.length) {
        return arr1;
    } else {
        return arr2;
    }
}

console.log(twoMass(arr2, arr1));


// -----------------------------------

let a = 'vegetables';
let b = 'fruit';

console.log('Слово «vegetables» занимает ' + a.length + ' кодовых значений');

console.log('Слово «fruit» занимает ' + b.length + ' кодовых значений');





   