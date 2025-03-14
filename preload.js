const { contextBridge } = require("electron/renderer");
contextBridge.exposeInMainWorld("test", {
	test: () => "Doruk",
});
