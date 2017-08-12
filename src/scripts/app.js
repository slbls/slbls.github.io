import "../styles/theme.scss";

import { el, mount } from "redom";
const feather = require("feather-icons");
feather.replace();

// TODO: Convert GPS to singleton pattern and replace all children modifications with RE:DOM's unmount/mount/setChildren using components.
class GPS {
	static el = el("main.gps");
	
	static location;
	static set destination(location) {
		if(GPS.location) {
			GPS.location.depart();
			GPS.el.removeChild(GPS.location.el);
		}

		GPS.location = location;
		GPS.el.appendChild(GPS.location.el);
		GPS.location.visit();
	}

	static initialize(home) {
		if(home) GPS.destination = home;
		mount(document.body, this.el);
	}
}

class Location {
	constructor (...geography) {
		this.geography = geography;
		this.el = el("section.location",
			geography
		);
	}

	visit() {
		this.el.style.display = "";
	}

	depart() {
		this.el.style.display = "none";
	}
}

class Compass {
	constructor (...directions) {
		this.directions = directions;
		this.el = el("ul.compass",
			this.directions
		);
	}
}

class Direction {
	constructor (title, location, separated = true) {
		this.title = title;
		this.separated = separated;
	
		this.el = el(`li.direction${separated ? ".separated" : ""}`, el("h1", title));
		this.el.addEventListener("click", function() {
			GPS.destination = location;
		});
	}
}

const about = new Location(el("p", "This is some information about me."));
const work = new Location(el("ul", el("li", "This is a project.")));
const home = new Location(new Compass(new Direction("about", about), new Direction("work", work)));
GPS.initialize(home);
