const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const chefs = require('./Data/chef.json')

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/chefs', (req, res) => {
	res.send(chefs);
});


app.listen(port, () => {
	console.log('server running on port ' + port);
});