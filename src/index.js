import "sanitize.css";
import "./index.scss";

let isClick;
document.body.addEventListener("click", () => (isClick = true));
document.body.addEventListener("keypress", () => (isClick = false));

document.body.addEventListener("focusout", event => {
	if (!isClick) return;

	const target = event.target;
	setTimeout(() => target.blur(), 0);
});
