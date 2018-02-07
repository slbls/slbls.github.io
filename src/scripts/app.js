import "../styles/theme.scss";

require('window.requestanimationframe');
require("smoothscroll-polyfill").polyfill(); 

console.log("Hey there – welcome to the land of Spencer's code!");
console.log("Feel free to take a look around. I have done my best to keep it clean and concise for you.");
console.log("Enjoy!");

document.querySelector(`a[href="#projects"]`).addEventListener("click", function (event) {
	event.preventDefault();
	document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});