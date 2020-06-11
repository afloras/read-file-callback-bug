'use strict'

window.addEventListener('load', async function () {
	const fs = require('fs')
	alert(__dirname + '\\config')
	fs.readFile(__dirname + '\\config', 'utf8', function(err, data) {
		if (err) throw err
		alert('success')
	})
})