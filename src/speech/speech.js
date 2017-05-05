document.addEventListener("touchstart",on_touch);
document.addEventListener("mousedown",on_touch);

var recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';

function on_touch()
{
	recognition.start();
	
}
function onend()
{
	recognition.stop();
}
recognition.onend = onend();
recognition.onsoundend = onend();
recognition.onspeechend = onend();
recognition.onresult = function (e)
{
	document.getElementById("text").innerHTML = e.results[0][0].transcript + e.results[0][0].confidence ;
}