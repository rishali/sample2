const {ipcRenderer} = require('electron')

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})


{
	ipcRenderer.send('btn-sub', document.getElementById('inputEmail').value +
		document.getElementById('inputPassword').value)
}

