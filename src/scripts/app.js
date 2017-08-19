import "../styles/theme.scss";

function overflowStatus(element) {
	const status = {};
	if(element.offsetHeight < element.scrollHeight) status.height = true;
	if(element.offsetWidth < element.scrollWidth) status.width = true;

	return Object.keys(status).length === 0 && status.constructor === Object ? false : status;
}

// TODO: Determine system for ASCII layout generation.