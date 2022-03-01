// punto de inicio de la aplicación

const {app, BrowserWindow} = require("electron");

function createWindow(){
    const ventana = new BrowserWindow({
        width: 900,
        height: 900
    });
    ventana.loadFile("index.html")
}

app.whenReady().then(createWindow)