function initialize() {
	cardList = [];
	for (let i = 0; i < 2; i++) {
		cardList.push(document.getElementById(`nok${i}`));
	}

	if (document.images) {
		img1 = new Image();
		img2 = new Image();
		img3 = new Image();
        img4 = new Image();
		img5 = new Image();
		img6 = new Image();
		img7 = new Image();
        img8 = new Image();
        img9 = new Image();

		img1.src = "images/ai1.png";
		img2.src = "images/amaz.jpg";
		img3.src = "images/American_Beaver.jpg";
		img4.src = "images/city.png";
		img5.src = "images/nok.PNG";
		img6.src = "images/sub.jpg";
		img7.src = "images/wall.jpg";
		img8.src = "images/cow.jpg";
        img9.src = "images/cardback.png";
	}
}

function flipCard(a){
	x = document.getElementById("nok1");
	x.src = img4.src;
}