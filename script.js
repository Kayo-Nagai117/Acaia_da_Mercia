



function _toggleMode() {
	const html = document.documentElement
	html.classList.toggle("light")


//pegar a taag img
const img = document.querySelector("#profile img");
//substituir a imagem
if (html.classList.contains("light")) {
	// se tiver light mode, adicionar a imagem light
	img.setAttribute("src", "./assets/Açai_da_Mercia_light.png");
	toggleButton.style.right = "0";
} else {
	// se tiver sem light mode, manter a imagem normal
	img.setAttribute("src", "./assets/Açai_da_Mercia.jpg");
	toggleButton.style.right = "auto";
	toggleButton.style.left = "0";
}

}