const express = require('express')
var bodyParser = require('body-parser');
var request = require("request");
var cors=require("cors")
const fs = require('fs');
var content = fs.readFileSync("city.list.json");
content=JSON.parse(content)
const app = express()
const port= process.env.PORT||3000

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/sota',function(req,res){
	var options = { method: 'POST',
  					url: 'test:8080/api/message',
  					headers: {'content-type': 'application/json' },
  					body: req.body.msg 
  					};

	request.post(options, function(e, r, body){
		text=JSON.parse(body)
		res.send(text)
	});
	
})
app.post('/movie',function(req,res){
	var options = { method: 'POST',
  					url: 'test:5001/message',
  					headers: {'content-type': 'application/x-www-form-urlencoded' },
  					form: { msg: req.body.msg } 
  					};

	request.post(options, function(e, r, body){
		text=JSON.parse(body)
		res.send(text)
	});
	
})
app.post('/mj',function(req,res){
	var msg=JSON.stringify({ msg: req.body.msg } )
	var options = { method: 'POST',
  					url: 'test:5004/message',
  					headers: {'content-type': 'application/json' },
  					body: msg
  					};

	request.post(options, function(e, r, body){
		text=JSON.parse(body)
		res.send(text)
	});
	
})
app.post('/aris',function(req,res){
	var msg=JSON.stringify({ msg: req.body.msg } )
	var options = { method: 'POST',
  					url: 'test:5003/message',
  					headers: {'content-type': 'application/json' },
  					body: msg
  					};

	request.post(options, function(e, r, body){
		text=JSON.parse(body)
		res.send(text)
	});
	
})
app.post('/trump',function(req,res){
	var options = { method: 'POST',
  					url: 'test:1980/api/message',
  					headers: {'content-type': 'application/json' },
  					body: req.body.msg 
  					};

	request.post(options, function(e, r, body){
		text=JSON.parse(body)
		res.send(text)
	});
	
})
app.post('/iica',function(req,res){
	var options = { method: 'POST',
  					url: 'test:8484/api/message',
  					headers: {'content-type': 'application/json' },
  					body: req.body.msg 
  					};

	request.post(options, function(e, r, body){
		text=JSON.parse(body)
		res.send(text)
	});
	
})
app.post('/tm',function(req,res){
	var options = { method: 'POST',
  					url: 'test:8686/api/message',
  					headers: {'content-type': 'application/json' },
  					body: req.body.msg 
  					};

	request.post(options, function(e, r, body){
		text=JSON.parse(body)
		res.send(text)
	});
	
})
app.post('/weather',function(req,res){
	var found=0;
	var text=req.body.msg
	var report;
	var n = text.split(" ");
	var data=text.substr(text.indexOf(" ") + 3).trim()
	data=data.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	for(var i=0;i<content.length;i++)
	{
		if((content[i].name==data)&&(content[i].country=='MY'))
		{	
			var options = { method: 'GET',
			  url: 'http://api.openweathermap.org/data/2.5/forecast',
			  qs: { id: content[i].id, APPID: '5b207516f53b3a101474dd28e103f625' },
			  headers: 
			   {  
			   } 
			};

			request(options, function (error, response, body) {
			  if (error) throw new Error(error);
			  msg=JSON.parse(body)
			  msg=msg.list[0].weather;
			  res.send("Forecasting that It's "+msg[0].main+" in "+data+" with description of "+msg[0].description);

			});
			found++
		}
	} 
	if(found==0)
		res.send("No such place in my weather forecasts");
})
app.post('/dada',function(req,res){
	res.send("hey")
})
app.listen(port, () => console.log('Example app listening on port 3000!'))