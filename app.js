const blue = document.getElementById('blue')
let blueDisabled = false;
const green = document.getElementById('green')
let greenDisabled = false;
const pink = document.getElementById('pink')
let pinkDisabled = false;
const red = document.getElementById('red')
let redDisabled = false;
var impNum = Math.floor(Math.random() * 4)
var triesTaken = 0;
blue.onclick=()=>{
	if (blueDisabled == false) {
		if (impNum == 0) {
			alert("You win! Blue was the imposter..Click OK to play again")
			location.reload()
		} else {
			alert("Blue was not the imposter")
			triesTaken = triesTaken + 1
			blueDisabled = true;
			blue.style.display="none";
		}
	}
	if (triesTaken >= 2) {
	alert("You lost....Click ok to restart")
	location.reload()
}
}
green.onclick=()=>{
	if (greenDisabled == false) {
		if (impNum == 1) {
			alert("You win! Green was the imposter..Click OK to play again")
			location.reload()
		} else {
			alert("Green was not the imposter")
			triesTaken = triesTaken + 1
			greenDisabled="true";
			green.style.display="none";
		}
	}
	if (triesTaken >= 2) {
	alert("You lost....Click ok to restart")
	location.reload()
}
}
pink.onclick=()=>{
	if (pinkDisabled == false) {
		if (impNum == 2) {
			alert("You win! Pink was the imposter..Click OK to play again")
			location.reload()
		} else {
			alert("Pink was not the imposter")
			triesTaken = triesTaken + 1
			pinkDisabled = true;
			pink.style.display="none";
		}
	}
		if (triesTaken >= 2) {
	alert("You lost....Click ok to restart")
	location.reload()
}
}
red.onclick=()=>{
	if (redDisabled == false) {
		if (impNum == 3) {
			alert("You win! Red was the imposter..Click OK to play again")
			location.reload()
		} else {
			alert("Red was not the imposter")
			triesTaken	= triesTaken + 1;
			redDisabled = true;
			red.style.display="none";
		}
	}
	if (triesTaken >= 2) {
	alert("You lost....Click ok to restart")
	location.reload()
}
}
