import "../styles/theme.scss";

let isClick;
document.body.addEventListener("click", () => (isClick = true));
document.body.addEventListener("keypress", () => (isClick = false));

document.body.addEventListener("focusout", event => {
	if (!isClick) return;

	setTimeout(() => event.target.blur(), 0);
});
