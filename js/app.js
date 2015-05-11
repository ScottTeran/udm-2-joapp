var xmlhttp;

window.onload=function()
{
	document.addEventlistener("deviceready", init, false);
	//init();
}

function init()
{
	document.getElementById('btnGetJoke').addEventlistener('click', getJoke, false);
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = receiveJoke;
}

function getJoke()
{
	xmlhttp.open('GET', 'http://api.icnd.com/jokes/random/', false);
	xmlhttp.send();
}

function receiveJoke()
{
	if(xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		var json = jQuery.parseJSON(xmlhttp.responseText);
		//console.log(json);
		document.getElementById('joke').innerHTML = json.value.joke;
	}
}