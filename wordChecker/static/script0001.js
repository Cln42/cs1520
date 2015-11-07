//when page loads, run checkWord every time a key is pressed
//uses onkeyup to get the last key pressed instead
//of onkeypress which misses the last key
window.onload = function(){
	var textbox = document.getElementById("word");
	textbox.onkeyup = function(){
		checkWord();
	}	
}


//gets the current value in text box and adds it to the url /check
//sends this url through a get request and
//prints out message based on the result
function checkWord(){
	var word = document.getElementById("word").value;
	var url = "/check?word=" + word;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (xhttp.readyState == 4 && xhttp.status == 200) {
    	  var result = xhttp.responseText;
    	  if(result == 'true'){
    	  	document.getElementById("result").innerHTML = "This is a word!";
    	  }else if(result == 'false'){
    	  	document.getElementById("result").innerHTML = "This is not a word!";
    	  }else{
    	  	document.getElementById("result").innerHTML = "Unexpected Result!";
    	  }    		
    	}
 	 }
	xhttp.open("GET", url, true);
	xhttp.send();
	
}


