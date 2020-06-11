'use strict'

const {ipcRenderer} = require('electron')

window.addEventListener('load', function () {
	document.getElementById('mylink').onclick = function() {
		ipcRenderer.send('goToPage2')
	}
})