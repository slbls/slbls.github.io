import "../styles/theme.scss";

import feather from "feather-icons";

import { h, app } from "hyperapp";
const Route = ({ icon, tooltip, route }) =>
	<span class="route" data-route={route} data-tooltip={tooltip}
		oncreate={element => {
			element.innerHTML = feather.toSvg(icon, { class: "route-icon" });
		}}
		onclick={actions.route}
	></span>

app({
	view: () =>
		<nav class="routes">
			<Route icon="award" tooltip="Projects" route=""></Route>
			<Route icon="info" tooltip="About" route=""></Route>
		</nav>
});