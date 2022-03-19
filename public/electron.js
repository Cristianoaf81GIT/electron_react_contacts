const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {     
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadURL(
    isDev ? 
    "http://localhost:3000": 
    `file://${path.join(__dirname, "../build/index.html")}`
  );

  
  win.webContents.on("did-finish-load", () => {
    const { title, version } = require("../package.json");
    win.setTitle(`${title} :: ${version}`);
  });
  
  win.on("closed", () => (win = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});