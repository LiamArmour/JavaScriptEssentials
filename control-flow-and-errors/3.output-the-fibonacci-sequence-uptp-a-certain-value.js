'use strict';
var fib=[0,1];

for(var i = 1; i < 10; i++) {
    var result =fib[i-1]+fib[i];
    fib.push(result);
}
console.log(fib);