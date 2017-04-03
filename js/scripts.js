
var a,
	h;

function getTriangleArea (a, h) {

	if  ( (a > 0) && (h > 0) ) {
	//console.log('Dane ok');
	wartośćDzialania = a*h/2;
	}
	else {
	console.log('Nieprawidłowe dane');
	}

	return 'wartośćDzialania';
	var wartośćDzialania = getTriangleArea(a, h);
}

console.log( getTriangleArea(10,6) )

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(7, 1);
var triangle3Area = getTriangleArea(-4, 0);