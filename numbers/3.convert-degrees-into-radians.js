var degrees = 20;

function de_ra() {
    var pi = Math.PI;
    var de_ra = ((eval(degrees.value))*(pi/180));
    degrees.RADE.value = de_ra;
}

console.log(de_ra);