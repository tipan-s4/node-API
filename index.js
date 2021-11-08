require('dotenv').config();
var express = require('express');
var app = express();
const port = 3000;
const fetch = require('node-fetch')
const api_key = process.env.API_KEY;

app.use(express.static('public'))

app.listen(port, () =>{
    console.log("http://localhost:" + port)
})

// from dice que receta se muestra
app.get('/receta', (req, res)=>{
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=${Math.floor((Math.random() * 1000) + 1)}&size=1`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": api_key,
		"x-rapidapi-host": "tasty.p.rapidapi.com"
	    }
    })
    .then(response => {
        return response.json()
    })
    .then(data=>{
        // console.log(data);
        res.json(data)
    })
    .catch(err => {
        console.error(err);
    });
})