var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/beer', function(req,res){
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&ibu=13,50', function (error, response, body) {
    console.log('status code', response.statusCode);
      if (!error && response.statusCode == 200) {
          res.send(body);
      }
  });
});

app.listen(5000, function() {
  console.log('listening on port 5000.');
});
