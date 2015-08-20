findHypo(3,4);
console.log(Hypo);

var hyLength = 0;
var trigCalc = function(length,angle){
    hyLength= Math.sin(angle)*length;
}
trigCalc(12,30);
console.log(hyLength);

/*
 var Hypo=0;
 var findHypo=function(number1,number2){
 Hypo=Math.sqrt(((number1*number1)+(number2*number2)));
 } */