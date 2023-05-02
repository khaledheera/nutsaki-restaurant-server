const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});


app.listen(port, () => {
	console.log('server running on port ' + port);
});