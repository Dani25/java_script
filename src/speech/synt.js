var synt = window.speechSynthesis;

function on_get_voices()
{
	var p = document.getElementById("voci");
	var voices = synt.getVoices();
	for (var i=0; i< voices.length; i++)
	{
		p.innerHTML += voices[i].name + ":" + voices[i].lang + "<br>";
	}
}