const express = require('express')
const inspector = require('inspector');
const fs = require('fs');
const app = express()
const port = process.env.PORT || 3000
const timeout = 10000

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => console.log(`sample-expressjs app listening on port ${port}!`))

app.get('/cpu', (req, res) => {
	const startUsage = process.cpuUsage();

	setTimeout(() => {
		res.json(process.cpuUsage(startUsage));
	}, timeout);
})

app.get('/mem', (req, res) => {
	res.json(process.memoryUsage());
})