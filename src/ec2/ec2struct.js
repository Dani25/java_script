//------------------------------------------
function citeste(){
	var _a = document.getElementById("a").value;
	var _b = document.getElementById("b").value;
	var _c = document.getElementById("c").value;
	//definire structura coef = nume_camp:valoare
	var coef = {a:_a, b:_b, c:_c};
	return coef;
}
//------------------------------------------
function calc_delta(coeficieni)
{
	return coeficieni.b * coeficieni.b - 4 * coeficieni.a * coeficieni.c;
}
//------------------------------------------
function calc_radacini(coef, delta)
{
	var x1, x2;
	if (delta>=0){
		x1 = {re:(-coef.b - Math.sqrt(delta))/ (2*coef.a), im:0};
		x2 = {re:(-coef.b + Math.sqrt(delta))/ (2*coef.a), im:0};
		
	}
	else{
		x1 = {re:(-coef.b)/ (2*coef.a), im: - Math.sqrt(-delta)/(2*coef.a)};
		x2 = {re:(-coef.b )/ (2*coef.a), im: + Math.sqrt(-delta)/(2*coef.a)};
		
	}
	var v = {x1:x1, x2:x2};
	return v;
}

//------------------------------------------
function rezolva()
{
	var coef = citeste();
	var delta = calc_delta(coef);
	var radacini = calc_radacini(coef, delta)
	afiseaza(radacini);

}
//----------------------------------------
function afiseaza(radacini)
{
	
	document.getElementById("x1").innerHTML = radacini.x1.re;
	document.getElementById("x2").innerHTML = radacini.x2.re;
	if (radacini.x1.im=0)
		document.getElementById("x1").innerHTML = radacini.x1.re.toString() + "+" + radacini.x1.im.toString() + "i";
	else
		document.getElementById("x1").innerHTML = radacini.x1.re.toString() + "+" +radacini.x1.im.toString() + "i";
	if (radacini.x2.im>=0)
		document.getElementById("x2").innerHTML = radacini.x2.re.toString() + "+" + radacini.x2.im.toString() + "i";
	else
		document.getElementById("x2").innerHTML = radacini.x2.re.toString() + "+" + radacini.x2.im.toString() + "i";
		
}