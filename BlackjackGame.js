
let messageEl = document.getElementById("message-el");

let sumEl = document.querySelector("#sum-el")

isAlive = false;

let cardsEl = document.getElementById("cards-el")
message =""

let player ={
	 name : "Chris",
	 chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":$" + player.chips

function getRandomCard(){

	let random = Math.floor(Math.random()*13)+1

	if ( random === 1){
		return 11
	}
	else if(random > 10){
		return 10
	}
	else{
		return random
	}

}


function startGame(){
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	renderGame()
}

function renderGame(){

	cardsEl.textContent = "Cards: "

	for (let i=0; i<cards.length; i++){

	cardsEl.textContent += cards[i] +" "
}

	if(sum <= 20){

		message = "Do you want to draw a new card?"

	}else if( sum === 21){
		message	= "Blackjack!"
	}
	else{

		message = " You lost!"
		isAlive = false;
	}
	messageEl.textContent = message

	sumEl.textContent = "Sum :" + sum
}


function newCard(){

	if (isAlive === true && sum!= 21){

	cards.push(getRandomCard())

	sum += cards[2]
	console.log(cards)

	renderGame()
}
}