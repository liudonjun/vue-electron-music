import { app, BrowserWindow, ipcMain } from 'electron'
import '../renderer/store'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080` : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    useContentSize: true,
    height: 600,
    width: 1000,
    minHeight: 600,
    minWidth: 1000,
    frame: false,
  })
  mainWindow.setMenu(null)

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

const options = {
  frame: false,
  x: 0,
  y: 0,
  fullscreenable: false,
  minimizable: false,
  maximizable: false,
  transparent: true,
  alwaysOnTop: true,
  skipTaskbar: true, // 任务栏中不显示窗口面板
  closable: false,
}
// const winURL1 =
//   process.env.NODE_ENV === 'development'
//     ? `http://localhost:9080/#desktop-lyric`
//     : `file://${__dirname}/index.html#desktop-lyric`

// let lyricWindow = new BrowserWindow(options)
// lyricWindow.loadURL(winURL1)

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
ipcMain.on('min', (e) => mainWindow.minimize())
ipcMain.on('max', (e) => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize()
  } else {
    mainWindow.maximize()
  }
})
ipcMain.on('close', (e) => mainWindow.close())
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
