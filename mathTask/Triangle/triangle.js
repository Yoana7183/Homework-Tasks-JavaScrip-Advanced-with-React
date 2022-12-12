// Площ на триъгълника по височина и основа
// Triangle area = (height * base) / 2

function calculateTriangleAreaByHeightAndBase(height, base) {

    var triangleArea = height * base;
    return (triangleArea / 2);
}

// console.log(calculateTriangleAreaByHeightAndBase(10.5, 10.2));

// Площ на триъгълника от три страни




function calcHalfPerimeter(a, b, c) {

    var halfPerimeter = a + b + c;
    halfPerimeter = halfPerimeter / 2;
    return halfPerimeter


}

function calculateTriangleAreaByThreeSides(a, b, c) {


    halfPerimeter = calcHalfPerimeter(a, b, c);


    var triangleArea = halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c);
    triangleArea = Math.sqrt(triangleArea);
    return triangleArea.toFixed(2);

}


console.log(calculateTriangleAreaByThreeSides(4, 13, 10));