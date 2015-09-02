'use strict'
var Hypo=0;
var findHypo=function(number1,number2){
    Hypo=Math.sqrt(((number1*number1)+(number2*number2)));
}

findHypo(3,4);

console.log(Hypo);