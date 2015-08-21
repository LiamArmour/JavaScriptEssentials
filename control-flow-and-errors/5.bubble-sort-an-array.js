'use strict';
var unorderedNumbers = [6,5,3,1,8,10,11,15,7,2,4];

function bubbleSort(a) {

    var empty = [],
    counter = a.length,
    lastNumber = 0,
    counterTwo = 0,
    reverseCount = 0,
    secondReverseCount = a.length - 1;

    while (counterTwo < a.length){
        for (var i = 1; i < a.length; i++) {

            if (a[i -1] > a[i]) {
                var foo = a[i-1];
                a[i-1] = a[i];
                a[i] = foo;

            }
        }
        lastNumber = a[counter - 1];
        empty[counterTwo++] = lastNumber;
        counter--;
    }

    while (reverseCount < secondReverseCount) {

        var qux = empty[reverseCount];
        empty[reverseCount] = empty[secondReverseCount];
        empty[secondReverseCount] = qux;
        reverseCount++;
        secondReverseCount--;
    }
    return empty;
}

console.log(bubbleSort(unorderedNumbers));