import "../styles/theme.scss";

const headingIcons = document.getElementsByClassName("heading__icon"),
	headingIcon = headingIcons[Math.floor(Math.random() * headingIcons.length)];
headingIcon.style.display = "block";

document.getElementById("favicon").href = headingIcon.src;