const {app, BrowserWindow} = require('electron')
const path = require('path')
const { ipcMain } = require('electron')

var ventana
function createWindow(){
    ventana = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(),'preload.js')
        }
    })
    ventana.loadFile('renderer.html')
}



app.whenReady().then(createWindow)


ipcMain.on('cargarPrincipal',(e,a)=>{
    ventana.loadFile('otro.html')
})