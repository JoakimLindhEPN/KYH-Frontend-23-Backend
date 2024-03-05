const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('contacts', {
  getAllContacts: () => ipcRenderer.invoke('getAll'),
  add: (contact) => ipcRenderer.invoke('add', contact),
  delete: (id) => ipcRenderer.invoke('delete', id)
})


contextBridge.exposeInMainWorld('edit', {
  open: (contact) => ipcRenderer.invoke('openEditWindow', contact),
})