import "../styles/theme.scss";

const navbarItems = document.getElementsByClassName("navbar__item");
for(let i = 0; i < navbarItems.length; i++) {
	navbarItems[i].addEventListener("click", event => {
		const clicked = event.currentTarget;
		for(let item of navbarItems) {
			if(item.childNodes[0].dataset.route === clicked.childNodes[0].dataset.route) clicked.classList.add("navbar__item--active");
			else item.classList.remove("navbar__item--active");
		}

		const pages = document.getElementsByClassName("page");
		for(let page of pages) {
			if(page.id === clicked.childNodes[0].dataset.route) page.classList.add("page--active");
			else page.classList.remove("page--active");
		}
	});
};