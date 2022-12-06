var home = document.querySelector("#oscars");
var homePhotoTwo = document.querySelector("#oscarsCoda");
var homePhotoThree = document.querySelector("#oscarsStage");

const mediaQuery = window.matchMedia('(min-width: 1200px)')

if (mediaQuery.matches) {
	window.addEventListener("load", function() {
		console.log("Black and White")
		home.classList.add("bnw")
	});

	window.addEventListener("load", function() {
		console.log("Black and White")
		homePhotoTwo.classList.add("bnw")
	});


	window.addEventListener("load", function() {
		console.log("Black and White")
		homePhotoThree.classList.add("bnw")
	});
}