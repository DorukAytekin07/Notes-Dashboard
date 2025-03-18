const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

ipcMain.on("change-page:changePage", (event, page) => {
	BrowserWindow.getAllWindows()[0].loadFile(`./src/notes.html`);
});

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			sandbox: false,
		},
	});
	win.loadFile("index.html");
};

app.whenReady().then(() => {
	createWindow();
});
