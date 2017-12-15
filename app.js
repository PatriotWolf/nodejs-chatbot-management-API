const express = require('express')
var bodyParser = require('body-parser');
var request = require("request");

const app = express()
const port= process.env.PORT||3000

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/iica',function(req,res){
	var options = { method: 'POST',
  					url: 'http://13.76.181.19:8080/api/message',
  					headers: {'content-type': 'text/plain' },
  					body: req.body.msg 
  					};

	request.post(options, function(e, r, body){
		res.json({msg:body.content})
	});
	
})
app.listen(port, () => console.log('Example app listening on port 3000!'))