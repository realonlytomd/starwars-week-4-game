$(document).ready(function() {

	var starRey = $("<img>");
	var starTrooper = $("<img>");
	var starVader = $("<img>");
	var starYoda = $("<img>");

	starRey.addClass("solid");
	starTrooper.addClass("solid");
	starVader.addClass("solid");
	starYoda.addClass("solid");

	starRey.addClass("iconChar");
	starTrooper.addClass("iconChar");
	starVader.addClass("iconChar");
	starYoda.addClass("iconChar");

	starRey.attr("src", "assets/images/rey.jpg");
	starTrooper.attr("src", "assets/images/trooper.jpg");
	starVader.attr("src", "assets/images/vader.jpg");
	starYoda.attr("src", "assets/images/yoda.jpg");

//Need to add titles and Health Points for each character. <p>'s positioning in CSS?
	//starRey.attr("title", "Rey");
	//starTrooper.attr("title", "Trooper");
	//starVader.attr("title", "Vader");
	//starYoda.attr("title", "Yoda");

//	Each character in the game has 3 attributes: 
//	`Health Points`, `Attack Power` and `Counter Attack Power`

	starRey.attr("healthPoints", 150);
	starRey.attr("attackPower", 20);
	starRey.attr("counterAttack", 15);

	starTrooper.attr("healthPoints", 80);
	starTrooper.attr("attackPower", 15);
	starTrooper.attr("counterAttack", 10);

	starVader.attr("healthPoints", 160);
	starVader.attr("attackPower", 25);
	starVader.attr("counterAttack", 30);

	starYoda.attr("healthPoints", 200);
	starYoda.attr("attackPower", 30);
	starYoda.attr("counterAttack", 25);


	$(".availableCharacters").append(starRey);
	$(".availableCharacters").append(starTrooper);
	$(".availableCharacters").append(starVader);
	$(".availableCharacters").append(starYoda);

	// set first click event so that whatever icon are NOT clicked, 
	//the .iconImage class  removed, 
	//the new .solid with red border and black outline are added

	$(".iconChar").on("click", function() {

		// the clicked icon has a different src than the others, 
		// specify THAT icon with it's src, and assign it an new var - ourHero

		var ourHero = ($(this).attr("src"));
		console.log(ourHero);

		// make ouHero true, and the others false.

		//put ouHero in the div yourCharacter


		// remove the false icon classes of iconChar, and make them .iconEnemy

		//append those false icons to the div availableEnemies


		// Then, click on one of those icons to fight.

		//Find out that icon's src, replace the class .iconEnemy with .defender
		//and append it to the div defender

		//now fight.  click the Attack button:
		//the ourHero health points go down by the counterAttack point of the defender
		//and the defender's health points go down the the attack points of the hero.

		//Important: the 2nd, 3rd, 4th time the attack button is clicked, the
		//hero's attack points go up by the base factor, but the defender's stays
		//the same.

		//if the hero health points go below zero, game is over and a reset button appears
		//clicking the reset button starts over the game.

		//if the defender's health points go below zero, the that character goes away
		//use clicks another of the enemy characters, and then repeat reassigning
		//of classes, and change append to the defender div.

		//continue until all enemies are vanquished!

	});






});
