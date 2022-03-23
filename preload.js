const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
'comunicacion',
    {
        inicioCorrecto: (callback) => ipcRenderer.on('inicioCorrecto', callback)
    }
)