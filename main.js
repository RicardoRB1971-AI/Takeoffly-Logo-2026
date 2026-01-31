const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      contextIsolation: true
    },
    icon: path.join(__dirname, "icon.icns")
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
