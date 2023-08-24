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
//Déclaration des variables
let slidenumber = 0;

// Ajout des bullets points
for (let i = slidenumber; i < slides.length; i++) { //Un point pour chaque diapo
	const dot = document.createElement("div"); //Création d'un elt div 
	dot.classList.add("dot"); //Ajout de la class="dot" à l'elt
	const dots = document.getElementById("dots"); //Récupération de la div de class="dots"
	dots.appendChild(dot); //Ajout de l'elt dans la div de class="dots"

	if (i === 0){
		dot.classList.add("dot_selected");  //point signalant la diapo en cour
	}
}


//Fonction 
function switchslide (n){ //n=-1 pour aller à gauche et 1 pour aller à droite
	const listdots = document.getElementsByClassName("dot"); //Je construit un tableau avec tous les dots
	listdots[slidenumber].classList.remove("dot_selected"); //J'enlève la selection sur le 1er point
	
	slidenumber+=n; //diapo précédante ou suivante

	if (slidenumber < 0) {
		slidenumber = slides.length - 1; //on repart de la dernière diapo
	} 
	else if (slidenumber >= slides.length) {
		slidenumber = 0; //on repart de la 1ère diapo
	  }
	
	listdots[slidenumber].classList.add("dot_selected") //j'ajoute la class="dot-selected" pour la nouvelle diapo en cour

	const img = document.querySelector(".banner-img");
	const txt = document.querySelector("#banner p");

	img.setAttribute("src", `./assets/images/slideshow/${slides[slidenumber].image}`); //chemin de la nouvelle diapo
	txt.innerHTML = slides[slidenumber].tagLine;  //texte de la nouvelle diapo
}



// Récupération elt flèche gauche
const left = document.getElementById("arrow_left");
// Ajout Event Listener de la fonction
left.addEventListener("click", () => {
	switchslide(-1);
});

// Flèche droite
const right = document.getElementById("arrow_right");
right.addEventListener("click", () => {
    switchslide(1);
});