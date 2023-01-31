const menu = document.getElementById("menu");
const hamburguesa = document.getElementById("menu-hamburguesa");
hamburguesa.addEventListener("click", () => {
    menu.classList.toggle("menu-visible")
});
const boton2 = document.getElementById("constancia2");
const boton3 = document.getElementById("constancia3");


boton2.addEventListener("click", abrir(url));
boton3.addEventListener("click", abrir(url));

function abrir(url){
    window.open(url)
}
