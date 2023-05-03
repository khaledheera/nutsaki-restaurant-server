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
	console.log(chefs);
});


app.get('/chefs/:id', (req, res) => {
	const id = req.params.id;
	const chefsRecipes = chefs.find((chef) =>chef.id === id);
	res.send(chefsRecipes);
});


app.listen(port, () => {
	console.log('server running on port ' + port);
});