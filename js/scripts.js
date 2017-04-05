
var a, h;

function getTriangleArea (a, h) {
	var wartoscDzialania;

	if  ( (a > 0) && (h > 0) ) {
			wartoscDzialania = a*h/2;
	} else {
			console.log('Nieprawidłowe dane');
	}

	return wartoscDzialania;
}

console.log( getTriangleArea(10, 6) )

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(7, 1);
var triangle3Area = getTriangleArea(-4, 0);

consoloe.log(triangle1Area, triangle2Area, triangle3Area);