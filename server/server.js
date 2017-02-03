var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));

app.get('/api/latLngLocation', function(req,res){
  request('http://api.brewerydb.com/v2/search/geo/point?key=f4b03113073283a320e1c5d0630a4d0d&lat=35.772096&lng=-78.638614', function (error, response, body) {
    console.log('status code', response.statusCode);
      if (!error && response.statusCode == 200) {
          res.send(body);
      }
  });
});

app.get('/api/zipCodeLocations/:zip', function(req,res) {
  request('http://api.brewerydb.com/v2/locations?key=f4b03113073283a320e1c5d0630a4d0d&postalCode=' + req.params.zip, function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/state/:state', function(req,res) {
  request('http://api.brewerydb.com/v2/locations?key=f4b03113073283a320e1c5d0630a4d0d&region=' + req.params.state, function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theibu/:ibu', function(req,res) {
  console.log(req.params.ibu);
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&ibu=' + req.params.ibu, function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})


app.get('/api/theabv/:abv', function(req,res) {
  console.log(req.params.abv);
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&abv=' + req.params.abv, function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('listening on port 5000.');
});
