'use strict';
function makeTringle(size) {
    var stars = "";
    var spacesLeft = "";
    var spacesRight = "";
    for(var i = 0 ; i < size ; i++) {
        stars += "*";
        spacesLeft += " ";
        spacesRight += " ";
        console.log(spacesLeft, stars, spacesRight);
    }
}

makeTringle(10, 2, 10);