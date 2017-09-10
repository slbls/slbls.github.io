import "../styles/theme.scss";

// I was looking to use the least amount of JavaScript as possible, but unfortunately
// viewport units are very buggy in Safari and do not properly represent what they should.
// Simply setting the HTML height to 100%, the body min-height to 100%, and inheriting from that
// did not work either as apparently it too has issues and bugs of its own. As a result I
// am left to use JavaScript to fix the annoying inconsistencies that make the Web the Web.
require("viewport-units-buggyfill").init();

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