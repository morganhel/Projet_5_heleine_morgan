const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupération elt flèche gauche
const left = document.getElementById("arrow_left");
// Ajout Event Listener
left.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton gauche")
	for (var i = 0; i < slides.length; i++){

	}
});

// Flèche droite
const right = document.getElementById("arrow_right");
right.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton droit")
});

// Ajout des bullets point
for (let i = 0; i < slides.length; i++) { //Un point pour chaque diapo
	const dot = document.createElement("div"); //Création d'un elt div 
	dot.classList.add("dot"); //Ajout de la class="dot" à l'elt
	const dots = document.getElementById("dots"); //Récupération de la div de class="dots"
	dots.appendChild(dot); //Ajout de l'elt dans la div de class="dots"

	if (i === 0){
		dot.classList.add("dot_selected");  //point signalant la diapo en cour
	}
}


