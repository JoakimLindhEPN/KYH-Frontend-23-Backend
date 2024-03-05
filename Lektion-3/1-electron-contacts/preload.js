const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('contacts', {
  getAllContacts: () => ipcRenderer.invoke('getAll')
})