const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
    let {width, height} = require('electron').screen.getPrimaryDisplay().size
    let win = new BrowserWindow({width:width, height:height,icon: __dirname + '/Img/icon/book library.ico'})
    win.loadURL(`file://${__dirname}/index.html`)
    //win.setMenu(null)
    win.maximize()
    win.setResizable(true)
    win.show()
});