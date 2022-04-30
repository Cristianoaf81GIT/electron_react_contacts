const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 650,
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

app.whenReady().then(() => {
  installExtension(REDUX_DEVTOOLS)
  .then((name) => console.log(`added extension: ${name}`))
  .catch((err) => console.log(`oops... an error has ocorred: ${err}`))
});

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