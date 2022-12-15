function initialize() {
	if (document.images) {
		urlArray = ["images/ai1.png", "images/amaz.jpg", "images/American_Beaver.jpg", "images/city.png",
					"images/nok.PNG", "images/sub.jpg", "images/wall.jpg", "images/cow.jpg"];
		images = [];
		for (let i = 1; i < 10; i++){
			images.push(new Image().src = urlArray[i]);
		}
		// img1 = new Image();
		// img2 = new Image();
		// img3 = new Image();
        // img4 = new Image();
		// img5 = new Image();
		// img6 = new Image();
		// img7 = new Image();
        // img8 = new Image();
        // img9 = new Image();

		// img1.src = "images/ai1.png";
		// img2.src = "images/amaz.jpg";
		// img3.src = "images/American_Beaver.jpg";
		// img4.src = "images/city.png";
		// img5.src = "images/nok.PNG";
		// img6.src = "images/sub.jpg";
		// img7.src = "images/wall.jpg";
		// img8.src = "images/cow.jpg";
        // img9.src = "images/cardback.png";
	}

	boardImages = [];
	imagesGenerated = 0;
	while(imagesGenerated < 16){
		if()
	}
}

function flipCard(a){
	a = images.src()
}

function generateRandomImageNum(){
	return Math.floor((Math.random() * 8 + 1)) + 1
}