//------------------------------------------
function citeste(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	var coef= [a, b, c];
	return coef;
}
//------------------------------------------
function calc_delta(coeficieni)
{
	return coeficieni[1] * coeficieni [1] - 4 * coeficieni[0] * coeficieni[2];
}
//------------------------------------------
function calc_radacini(coef, delta)
{
	var x1_re, x1_im, x2_re, x2_im;
	if (delta>=0){
		x1_re = (-coef[1] - Math.sqrt(delta))/ (2*coef[0]);
		x1_im = 0;
		x2_re = (-coef[1] + Math.sqrt(delta))/ (2*coef[0]);
		x2_im = 0;
		
	}
	else{
		x1_re = (-coef[1])/ (2*coef[0]);
		x1_im = - Math.sqrt(-delta)/(2*coef[0]);
		x2_re = (-coef[1] )/ (2*coef[0]);
		x2_im = + Math.sqrt(-delta)/(2*coef[0]);
		
	}
	return [x1_re, x1_im, x2_re, x2_im];
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
	
	document.getElementById("x1").innerHTML = radacini[0];
	document.getElementById("x2").innerHTML = radacini[2];
	if (radacini[1]>=0)
		document.getElementById("x1").innerHTML = radacini[0].toString() + "+" + radacini[1].toString() + "i";
	else
		document.getElementById("x1").innerHTML = radacini[0].toString() + radacini[1].toString() + "i";
	if (radacini[3]>=0)
		document.getElementById("x2").innerHTML = radacini[2].toString() + "+" + radacini[3].toString() + "i";
	else
		document.getElementById("x2").innerHTML = radacini[2].toString() + radacini[3].toString() + "i";
		
}