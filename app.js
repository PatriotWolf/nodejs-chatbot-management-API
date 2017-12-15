const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port= process.env.PORT||3000

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/iica'(req,res)=>{
	res.send(req.body)
})
app.listen(port, () => console.log('Example app listening on port 3000!'))