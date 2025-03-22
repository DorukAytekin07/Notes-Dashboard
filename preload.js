const { contextBridge, ipcRenderer } = require("electron/renderer");
const fs = require("fs");
const os = require("os");
const datas = require("./module.json");
const jsonfile = require("jsonfile");

contextBridge.exposeInMainWorld("fs", {
  readFiles: (directory) => fs.readdirSync(`${os.homedir()}/${directory}`),
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
});

