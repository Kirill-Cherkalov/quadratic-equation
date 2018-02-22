module.exports = function solveEquation(equation) {
	var arr = equation.split(' ');
	var a,b,c,D;
	a = arr[0];
	for ( var i = 0; i < arr.length; i++ ) {
		if ( arr[i]  == '-' || arr[i]  == '+' && arr[i+2] =='*') {
			b = arr[i] + arr[i+1];
			c = arr[arr.length-2] + arr[arr.length-1];
			break;
		}}
	D = Math.pow(b,2) - 4 * a * c;
	var x1,x2;
	var solution = [];
	if ( D > 0 ) {
		x1 = Math.fround((-b + Math.pow( Math.pow(b, 2) - 4 * a * c , 1/2))/(2*a));
		x2 =  Math.fround((-b - Math.pow( Math.pow(b, 2) - 4 * a * c , 1/2))/(2*a));
		if ( x1 > 0 && x2 < 0) {solution.push(x2,x1);}
		else if ( x1 < 0 && x2 < 0 && x1 > x2)
			solution.push(x2,x1);
		else if ( x1 > 0 && x2 > 0 && x1 > x2)
			solution.push(x2,x1);
		else
		solution.push(x1,x2);
	} else if ( D ==0 ) {
		x1 = x2 = -b/(2*a);
		solution.push(x1,x2);
	}

	return solution;
}
