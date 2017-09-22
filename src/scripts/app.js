import "../styles/theme.scss";

const fire = require("../images/fire.png");
const thinking = require("../images/thinking.png");

// Set the name of the hidden property and the change event for visibility
let hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
	hidden = "hidden";
	visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
	hidden = "msHidden";
	visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
	hidden = "webkitHidden";
	visibilityChange = "webkitvisibilitychange";
}

const documentHead = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(href) {
	let favicon = document.createElement('link');
	let oldFavicon = document.getElementById('favicon');
	favicon.id = 'favicon';
	favicon.rel = 'shortcut icon';
	favicon.href = href;
	
	if(oldFavicon) documentHead.removeChild(oldFavicon);
	documentHead.appendChild(favicon);
}

document.addEventListener(visibilityChange, event => {
	if(document[hidden]) {
		changeFavicon(thinking);
		document.title = "Where'd you go?"
	} else {
		changeFavicon(fire);
		document.title = "Spencer Berenson";
	}
});