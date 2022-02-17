var rect = require('./rectangle');

function solvedRect(l,b){
    console.log("Solving for rectangle with l = " + l + " and b = " + b );

    if(l<=0 || b<=0){
        console.log("rectangle dimensions should be greater than 0 : l = " + l + " and b = " + b );
    }
    else{
        console.log("The area of the rectangle is "+rect.area(l,b));
        console.log("The perimeter of the rectangle is "+rect.perimeter(l,b));
    }
}
solvedRect(2,4);
solvedRect(3,5);
solvedRect(0,5);
solvedRect(-3,5);