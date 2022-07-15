const actionButton = document.getElementById("action-btn");

function refreshTimePerSecond(){
	document.querySelector("span.current-time").innerHTML = new Date().toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit',second:'2-digit', hour12:false });
}

function calculateFibonacciSerie(){

	let numbersContainer = document.querySelector(".numbers-container ul")
	let timeList = new Date().toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit',second:'2-digit', hour12:false }).split(":");
	let preNumber = parseInt(timeList[1][0])
	let nextNumber =  parseInt(timeList[1][1])
	
	numbersContainer.innerHTML = ""
	numbersContainer.innerHTML += "<li>"+ preNumber +"</li>";
	numbersContainer.innerHTML += "<li>"+ nextNumber +"</li>";

	document.querySelector(".numbers-container").scrollIntoView({behavior: "smooth"});

	for (var i = 0; i < parseInt(timeList[2]); i++) {

		let newNumber = preNumber + nextNumber
		preNumber = nextNumber
		nextNumber = newNumber
		numbersContainer.innerHTML += "<li>"+ newNumber +"</li>";
		
	}
}

actionButton.onclick = calculateFibonacciSerie
setInterval(refreshTimePerSecond,1000);