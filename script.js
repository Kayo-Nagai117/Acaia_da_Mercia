const html = document.documentElement;
const toggleButton = document.getElementById("themeToggle");
const logo = document.getElementById("logo");

function updateTheme() {
	if (html.classList.contains("light")) {
		logo.src = "./assets/Açai_da_Mercia_light.png";
	} else {
		logo.src = "./assets/Açai_da_Mercia.jpg";
	}
}

function toggleMode() {
	html.classList.toggle("light");
	updateTheme();
}

toggleButton.addEventListener("click", toggleMode);
updateTheme();

function abrirModal(tipo) {
	const modal = document.getElementById("modal");
	const modalBody = document.getElementById("modal-body");

	if (tipo === "menu") {
		modalBody.innerHTML = document.getElementById("menu").innerHTML;
	} else if (tipo === "pedidos") {
		modalBody.innerHTML = `
      <h2>Pedidos</h2>
      <p>Escolha seu açaí e mande direto pelo WhatsApp.</p>
      <a class="whatsapp-button" href="https://wa.me/5543984777870" target="_blank">
        Enviar pedido
      </a>
    `;
	} else if (tipo === "contato") {
		modalBody.innerHTML = document.getElementById("contato").innerHTML;
	}

	modal.classList.add("ativo");
}

function fecharModal() {
	document.getElementById("modal").classList.remove("ativo");
}

window.onclick = function (event) {
	const modal = document.getElementById("modal");
	if (event.target === modal) {
		fecharModal();
	}
};
