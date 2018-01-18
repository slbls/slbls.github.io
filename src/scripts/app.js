import "../styles/theme.scss";

window.addEventListener("wheel", event => {
	console.log("yes");
	const slides =document.getElementsByClassName("slide");
	slides[0].classList.add("slide--inactive");
	slides[2].classList.remove("slide--inactive");
});