function initialize() {
	gameover = false;
	sourceCardFlipped = false;
	score = 0;
	lastImageClicked = null;
	if (document.images) {
		urlArray = ["images/ai1.png", "images/amaz.jpg", "images/American_Beaver.jpg", "images/city.png",
					"images/nok.PNG", "images/sub.jpg", "images/wall.jpg", "images/cow.jpg", "images/cardback.png"];
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
	console.log(randomFlags);
	imagesGenerated = 0;
	let a = 7
	counter = 0;
	while(imagesGenerated < 16){
		let randNum = generateRandomImageNum(a);
		console.log(randNum);
		console.log(images[randNum]);
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
		counter++;
	}
}


function flipCard(a){
	if(!gameover){
		console.log(boardImages[a]);
		console.log("image" + a);
		firstImage = document.getElementById("image" + a);
		if(!sourceCardFlipped){
			firstImage.src = boardImages[a];
			lastImageClicked = boardImages[a];
			sourceCardFlipped = true;
		}
		else if(sourceCardFlipped){


			sourceCardFlipped = false;
		}
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
	console.log(urlArray[8]);
	initialize();
}

function checkGameState(){
	for(let i = 0; i < 16; i++){
		let thisImage = document.getElementById("image" + i);
		if (thisImage.src == urlArray[8]){
			return true;
		} 
	}
	return false;
}