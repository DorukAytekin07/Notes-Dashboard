const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

ipcMain.on("change-page:changePage", (event, page) => {
  if (page == "notes") {
    BrowserWindow.getAllWindows()[0].loadFile(`./src/notes.html`);
  }
  else if(page == "home"){
    BrowserWindow.getAllWindows()[0].loadFile("./index.html")
  }
  else if(page == "email"){
    BrowserWindow.getAllWindows()[0].loadFile("./src/email.html")
  }
  else if(page == "settings"){
    BrowserWindow.getAllWindows()[0].loadFile("./src/settings.html")
  }
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
