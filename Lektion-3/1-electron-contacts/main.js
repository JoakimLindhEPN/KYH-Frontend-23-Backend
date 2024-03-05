const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const { PrismaClient } = require('@prisma/client')

const path = require('path')

const prisma = new PrismaClient()


let mainWindow = null;
let editWindow = null;

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

  ipcMain.handle('openEditWindow', async (_, contact) => {
    editWindow = new BrowserWindow({
      width: 400,
      height: 400,
      title: 'Contact List',
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    await mainWindow.loadFile('src/edit.html')

    // TDB Skicka contact till edit window
  })

  
  ipcMain.handle('getAll', async () => {
    try {

      const contacts = await prisma.contact.findMany()
      return contacts

    } catch (err) {
      console.log(err)
    }
  })

  ipcMain.handle('add', async (_, data) => {
    try {

      const contact = await prisma.contact.create({
        data
      })
      return contact

    } catch (err) {
      console.log(err)
    }
  })

  ipcMain.handle('delete', async (_, id) => {
    try {
      const contact = await prisma.contact.delete({
        where: { id }
      })
      return contact

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