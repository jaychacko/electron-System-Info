const {app, BrowserWindow} =  require ('electron');
const path = require ('path');
const url = require ('url');

// init win
let win;

function createWindow () {
  //create browser window
  win = new BrowserWindow({width:800, height:600, icon: __dirname +'/gear.jpg'});

  //Load index.html
  win.loadURL(url.format({

    pathname:path.join(__dirname,'index.html'),
    protocol:'file:',
    slashes:true
  }));

  //opem devtool

  win.webContents.openDevTools();

  win.on('closed',() =>{

    win=null;
  });
}


  // RUN CREATE WINDOW FUNCTION
  app.on('ready',createWindow);


  //quit when all window is closed

  app.on('window-all-closed', ()=>{

    if (process.platform  !=='darwin'){
      app.quit();
    }
  })
