const { contextBridge } = require("electron/renderer");
const fs = require("fs")
const os = require("os")
contextBridge.exposeInMainWorld("fs", {
	readFiles: () => fs.readdirSync(`${os.homedir()}/xournall`),
});
