var rect = require('./rectangle');

function solvedRect(l,b){
    console.log("Solving for rectangle with l = " + l + " and b = " + b );

    rect(l,b,(err,rectangle) => {
        if(err) {
            console.log("Error: ", err.message);
        }
        else{
            console.log("The area of the rectangle of dimesions l = "+l+" and b ="+b+" is "+ rectangle.area());
            console.log("The perimeter of the rectangle of dimesions l = "+l+" and b ="+b+" is "+ rectangle.perimeter());
        }
    });
    console.log("This statement is after the call to rect()")
}
solvedRect(2,4);
solvedRect(3,5);
solvedRect(0,5);
solvedRect(-3,5);