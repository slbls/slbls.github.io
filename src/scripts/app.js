import "../styles/theme.scss";

const rangy = require("rangy");
const striptags = require("striptags");

const promptPrefix = document.getElementById("promptPrefix");
const prompt = document.getElementById("prompt");
const caret = document.getElementById("promptCaret");

const Text = {
	getWidth(text, font) {
		const canvas = Text.canvas || (Text.canvas = document.createElement("canvas"));
		const context = canvas.getContext("2d");
		context.font = font;
		return Math.ceil(context.measureText(text).width);
	},

	getFont(element) {
		const style = window.getComputedStyle(element);
		return `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
	}
}

promptPrefix.addEventListener("click", event => prompt.focus());

prompt.addEventListener("input", event => {
	const bookmark = rangy.getSelection().getBookmark(prompt);
	prompt.innerHTML = striptags(prompt.innerHTML);
	rangy.getSelection().moveToBookmark(bookmark);

	const coordinates = window.getSelection().getRangeAt(0).getBoundingClientRect();
	console.log(Text.getWidth(prompt.innerHTML.slice(-1), Text.getFont(prompt)));
	caret.style.left = (coordinates.left - Text.getWidth(promptCaret.textContent, Text.getFont(prompt))) + "px";
});