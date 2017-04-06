//------------------------------------------
function calc_delta(coeficienti)
{
	return coeficienti.b * coeficienti.b - 4 * coeficienti.a * coeficienti.c;
}
//------------------------------------------
function ec2()
{
	this.citeste = function()
	{
		this.a = document.getElementById("a").value;
		this.b = document.getElementById("b").value;
		this.c = document.getElementById("c").value;
	}
	this.rezolva = function()
	{
		var delta = calc_delta(this)
		if (delta>=0){
		this.x1 = {re:(-this.b - Math.sqrt(delta))/ (2*this.a), im:0};
		this.x2 = {re:(-this.b + Math.sqrt(delta))/ (2*this.a), im:0};
		
	}
	else{
		this.x1 = {re:(-this.b)/ (2*this.a), im: - Math.sqrt(-delta)/(2*this.a)};
		this.x2 = {re:(-this.b )/ (2*this.a), im: + Math.sqrt(-delta)/(2*this.a)};
		
	}
	}
	this.afiseaza = function()
	{
		document.getElementById("x1").innerHTML = this.x1.re;
		document.getElementById("x2").innerHTML = this.x2.re;
	if (this.x1.im=0)
		document.getElementById("x1").innerHTML = this.x1.re.toString() + "+" + this.x1.im.toString() + "i";
	else
		document.getElementById("x1").innerHTML = this.x1.re.toString() + "+" +this.x1.im.toString() + "i";
	if (this.x2.im>=0)
		document.getElementById("x2").innerHTML = this.x2.re.toString() + "+" + this.x2.im.toString() + "i";
	else
		document.getElementById("x2").innerHTML = this.x2.re.toString() + "+" + this.x2.im.toString() + "i";
		
	}
}
//------------------------------------------

function rezolva()
{
	var e = new ec2();
	e.citeste();
	e.rezolva();
	e.afiseaza();

}
