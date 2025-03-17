const { contextBridge, ipcRenderer } = require("electron/renderer");
const fs = require("fs");
const os = require("os");
const datas = require("./module.json");
const jsonfile = require("jsonfile");

contextBridge.exposeInMainWorld("fs", {
	readFiles: () => fs.readdirSync(`${os.homedir()}/xournall`),
	changePage: (page) => ipcRenderer.send("change-page:changePage", page),
	loadNote: (page) =>
		jsonfile.writeFile(
			"./module.json",
			{
				currentFile: page,
			},
			page,
		),
	importNote: () => {
		return datas["currentFile"];
	},
	// write a function that get the json data of current note and returns it
});
