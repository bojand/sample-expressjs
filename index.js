const express = require('express')
const inspector = require('inspector');
const fs = require('fs');
const app = express()
const port = process.env.PORT || 80
const timeout = 10000

const id = Math.floor((Math.random() * (1 - 100 + 1)) + 1)

app.get('/', (req, res) => {
	console.log(id + ': got request')
	res.send('Hello World!')
})

app.get('/cpu', (req, res) => {
	const startUsage = process.cpuUsage();

	setTimeout(() => {
		res.json(process.cpuUsage(startUsage));
	}, timeout);
})

app.get('/mem', (req, res) => {
	res.json(process.memoryUsage());
})

app.listen(port, () => console.log(`${id}: sample-expressjs app listening on port ${port}!`))
