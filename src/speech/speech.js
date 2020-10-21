document.addEventListener("touchstart",on_touch);
document.addEventListener("mousedown",on_touch);

var recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.maxAlternatives =5;

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
	var alternatives = e.results[2];
	for (var i=0; i<alternatives.length; i++)
	document.getElementById("text").innerHTML += "Ati rostit cuvantul: "+ alternatives[i].transcript + ", acuratete: "+alternatives[i].confidence + "<br>" ;
}
