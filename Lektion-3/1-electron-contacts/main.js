const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const { PrismaClient } = require('@prisma/client')

const path = require('path')

const prisma = new PrismaClient()


let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Contact List',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('src/index.html')
  // mainWindow.webContents.openDevTools()
}


app.whenReady().then(() => {
  
  ipcMain.handle('getAll', async () => {
    try {

      const contacts = await prisma.contact.findMany()
      return contacts

    } catch (err) {
      console.log(err)
    }
  })










  createWindow()
  Menu.setApplicationMenu(null)


  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})