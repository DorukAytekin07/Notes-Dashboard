const { contextBridge, ipcRenderer } = require("electron/renderer");
const { exec } = require("child_process");
const fs = require("fs");
const os = require("os");
const datas = require("./module.json");

contextBridge.exposeInMainWorld("fs", {
  readFiles: (directory) => fs.readdirSync(`${datas.homeFolder}/${directory}`),
  changePage: (page) => ipcRenderer.send("change-page:changePage", page),
  loadNote: (page) => {
    datas.currentFile = page;
    fs.writeFileSync("./module.json", JSON.stringify(datas, null, 2));
  },
  importNote: () => {
    return datas.currentFile;
  },
  openNote: (file) => exec(`xournalpp ${datas.homeFolder + file}`),
  returnDatas: () => {
    return datas;
  },
  changeHomeFolder: (path) => {
    datas.homeFolder = path;
    fs.writeFileSync("./module.json", JSON.stringify(datas, null, 2));
  },
});
