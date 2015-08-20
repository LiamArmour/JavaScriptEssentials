var convertRad =0;
var convertDeg=function(number){
    convertRad=((Math.PI/180)*number);
}
convertDeg(345);
console.log(convertRad);