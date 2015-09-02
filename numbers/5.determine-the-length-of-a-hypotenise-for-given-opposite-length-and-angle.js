'use strict'
findhypotenuseLength(3,4);
console.log(hypotenuseLength);

var hyLength = 0;
var trigCalc = function(length,angle){
    hyLength= Math.sin(angle)*length;
}
trigCalc(12,30);
console.log(hyLength);

/*
 var hypotenuseLength=0;
 var findhypotenuseLength=function(number1,number2){
 hypotenuseLength=Math.sqrt(((number1*number1)+(number2*number2)));
 } */