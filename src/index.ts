import "normalize.css/normalize.css";
import "./index.scss";

let isClick: boolean;
document.body.addEventListener("click", () => (isClick = true));
document.body.addEventListener("keypress", () => (isClick = false));

document.body.addEventListener("focusout", event => {
	if (!isClick) return;

	const target = event.target as HTMLElement;
	setTimeout(() => target.blur(), 0);
});
