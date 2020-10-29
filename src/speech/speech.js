document.addEventListener("touchstart",on_touch);
document.addEventListener("mousedown",on_touch);

var recognition = new webkitSpeechRecognition();
recognition.lang = 'ro-RO';
//recognition.maxAlternatives =5;

function on_touch()
{
	if(recognition.start){		
		recognition.start();
		recognition_started = true;
	}
	
}
function onend()
{
	recognition.stop();
	recognition_started = false;
}
recognition.onend = onend;
recognition.onsoundend = onend;
recognition.onspeechend = onend;
recognition.onresult =on_results;

function on_results(e)
{
	//var alternatives = e.results[0];
	//for (var i=0; i<alternatives.length; i++)
		//document.getElementById("text").innerHTML += "Ati rostit cuvantul: "+ alternatives[i].transcript + ", acuratete: "+alternatives[i].confidence + "<br>" ;
	document.getElementById("text").innerHTML += "Ati rostit cuvantul: "+ e.results[0][0].transcript + ", acuratete: "+e.results[0][0].confidence + "<br>" 
}
