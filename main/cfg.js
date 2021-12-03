import Store from "electron-store";
import { app } from "electron";
import { info } from "electron-log";
import fs from "fs";
class cfg {
	constructor() {
		// Default settings

		this.scheme = {
			root: {
				apperance: {
					global_theme: "green",
					darkmode: true,
					lineChart: {
						colors: "nivo",
						curve: "cardinal",
					},
					BarChart: {
						colors: "nivo",
						isGrouped: true,
					},
				},
			},
		};

		this.store = new Store({ accessPropertiesByDotNotation: false });

		if (!fs.existsSync(`${app.getPath("userData")}/config.json`)) {
			info("Creating configration file...");
			this.store.set(this.scheme);

			info(`Configration file was created at ${this.store.path}}`);
		}
	}

	get() {
		return this.store.get("root");
	}
	set(key, value) {
		this.store.set(key, value);
	}
}

export default cfg;
