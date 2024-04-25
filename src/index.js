import "./index.css";
import r4 from "@radio4000/components";
import "@radio4000/components/style";

/* App config
	 - get the public environment config from a json file,
	 - set it on the app's custom-element
	 - append the app as the only element of the body's DOM
 */

const containerElementName = "body";
const appElementName = "r4-app";
/* customElements.define(appElementName, r4.R4App) */
const $app = document.createElement(appElementName);
fetch("/.env.json")
	.then(async (data) => {
		let config = {};
		try {
			config = await data.json();
		} catch (e) {
			/* console.info('.env.json config file not found') */
		}
		return config;
	})
	.then((config) => {
		Object.entries(config).forEach(([key, value]) => {
			if (typeof value === "object") {
				$app.setAttribute(key, JSON.stringify(value));
			} else {
				$app.setAttribute(key, value);
			}
		});
	})
	.finally(() => {
		document.querySelector(containerElementName).append($app);
		/* console.info(`${appElementName} loaded`) */
	});
