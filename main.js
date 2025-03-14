// look at the readDir and glob for the search in the directory
// and also open all the notes in the xournal++ because
// it is easy to find and open
// also learn how to add code to html file via javascript
// probably it has a way but now I don't know

const { app, BrowserWindow } = require("electron");
const path = require("node:path");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});
	win.loadFile("index.html");
};

app.whenReady().then(() => {
	createWindow();
});
