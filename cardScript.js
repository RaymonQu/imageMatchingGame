function initialize() {
	hiddenWords = document.getElementById("hiddenMessage");
	hiddenWords.hidden = true;
	timeOutDone = true; 
	correctCards = [];
	gameover = false;
	sourceCardFlipped = false;
	score = 0;
	lastImageClicked = null;
	lastImageClickedId = null;
	if (document.images) {
		urlArray = ["images/ai1.png", "images/amaz.jpg", "images/American_Beaver.jpg", "images/city.png",
					"images/nok.PNG", "images/sub.jpg", "images/Wall.jpg", "images/cow.jpg", "images/cardback.png"];
		images = [];
		for (let i = 0; i < 9; i++){
			images.push(new Image().src = urlArray[i]);
		}
	}
	boardImages = [];
	randomFlags = [];
	for (let i = 0; i < 8; i++){
		randomFlags.push(false);
	}
	imagesGenerated = 0;
	let a = 7
	while(imagesGenerated < 16){
		let randNum = generateRandomImageNum(a);
		if(!randomFlags[randNum] && typeof images[randNum] !== 'undefined'){
			randomFlags[randNum] = true;
			imagesGenerated++;
			boardImages.push(images[randNum]);
		}
		else if (randomFlags[randNum] && typeof images[randNum] !== 'undefined'){
			boardImages.push(images[randNum]);
			imagesGenerated++;
			delete images[randNum];
		}
	}
}

function flipCard(a){
	if(!gameover && !correctCards.includes(a) && timeOutDone){
		firstImage = document.getElementById("image" + a);
		if(!sourceCardFlipped){
			correctCards.push(a);
			firstImage.src = boardImages[a];
			console.log(boardImages[a]);
			lastImageClicked = boardImages[a];
			lastImageClickedId = a;
			sourceCardFlipped = true;
		}
		else if(sourceCardFlipped){
			firstImage.src = boardImages[a];
			if (boardImages[a] == lastImageClicked) correctCards.push(a);
			else{ 
				console.log(lastImageClicked);
				var index = correctCards.indexOf(lastImageClicked);
				console.log(index);
				if (index === -1) {
					correctCards.splice(index, 1);
				}
				timeOutDone = false;
				setTimeout(() => {
					firstImage.src = "images/cardback.png";
					document.getElementById("image" + lastImageClickedId).src = "images/cardback.png";
					timeOutDone = true;
				}, 1000);
				
			}
			sourceCardFlipped = false;
		}
		console.log(correctCards);
		updateScore();
		gameover = checkGameState();
	}
}

function generateRandomImageNum(a){
	return Math.floor((Math.random() * 8))
}

function updateScore(){
	score++;
	document.getElementById("score").innerHTML = "Score: " + score;
}

function reset(){
	for(let i = 0; i < 16; i++){
		document.getElementById("image" + i).src = urlArray[8];
	}
	document.getElementById("score").innerHTML = "Score: " + 0;
	initialize();
}

function checkGameState(){
	for(let i = 0; i < 16; i++){
		let thisImage = document.getElementById("image" + i);
		if (thisImage.src == urlArray[8]){
			if(score < 25){
				hiddenWords.innerHTML = "You are definitely cheating";
			}
			else if(score < 50){
				hiddenWords.innerHTML = "Poor score, try harder";
			}
			else{
				hiddenWords.innerHTML = "Are you even trying mane?";
			}
				hiddenWords.hidden = false;
			return true;
		} 
	}
	return false;
}
