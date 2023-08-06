const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Create a global reference to the mainWindow variable
let mainWindow;

// Function to create the main window and load the render.html file
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 576,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'render.html'),
    protocol: 'file:',
    slashes: true,
  }));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Event handler when Electron is ready
app.whenReady().then(() => {
  // Create the main window and load the render.html file here
  createWindow();

  // Open DevTools (optional)
  // mainWindow.webContents.openDevTools();
});

// Event handler when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Event handler for the activate event (Mac specific)
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});


