let displayText = document.getElementById("display")
let play =document.getElementById("play");
let restart = document.getElementById("restart")
let guessBox = document.getElementById("guessBox")
let random = Math.floor(Math.random() * 100)

console.log(random)

function guessTheNumber(event) {
	event.preventDefault()
	console.log(event)

   let input = document.getElementById("input").value
    input = parseInt(input)


    if(input === random){
    	displayText.innerText = "Hurrayyy!! You're the winner!!" + "the number is " + random;
    	guessBox.style.backgroundColor = "gold"
    	
    }
    else if (input > random  && input > 100){
    	alert("Too high and not in range, try again between 1 -100!!");
    	 
        	
    }

    else if (input > random){
    	displayText.innerText = "Too high, go lower!!";
    	 	guessBox.style.backgroundColor = "red"
        
    }

     else if (input < random && input < 1){
    	alert("Too low and not in range, try again between 1 -100!!");
    	
        
    }
    
     else if (input < random){
    	displayText.innerText = "Too low, go higher!";
    		guessBox.style.backgroundColor = "black"
   
    }

    else if (isNaN(input)) {
        alert("This is not a Number, Please enter a number between 1 & 100!!!");
    }

}   


restart.addEventListener("click", function(e){
	e.preventDefault()
	console.log(e)
	location.reload()
})