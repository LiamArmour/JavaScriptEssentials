var foo =1;
if(foo%2===0){
    console.log("this number is even!");
}
else{
    console.log("this number is odd");
}

var convertFar = 0;
var convertCel=function(number){
    convertFar = ((number*2)+30);
}
convertCel(12);
console.log(convertFar);

var convertRad =0;
var convertDeg=function(number){
    convertRad=((Math.PI/180)*number);
}
convertDeg(345);
console.log(convertRad);

var Hypo=0;
var findHypo=function(number1,number2){
    Hypo=Math.sqrt(((number1*number1)+(number2*number2)));
}
findHypo(3,4);
console.log(Hypo);

var hyLength = 0;
var trigCalc = function(length,angle){
    hyLength= Math.sin(angle)*length;
}
trigCalc(12,30);
console.log(hyLength);


var diceRoll = (Math.round(Math.random()*6));

console.log(diceRoll);