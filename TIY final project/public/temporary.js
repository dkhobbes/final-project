//Start geolocation
if (navigator.geolocation) {
  console.log(navigator.geolocation);

    function error(err) {
      // console.warn('ERROR(' + err.code + '): ' + err.message);
      console.log("error-test");
    }

    function success(pos){
      userCords = pos.coords;
      // return userCords;
      console.log("sucess-test", pos.coords);
      //call API with GPS coordinates
      //add markers with breweries that fit in GPS coordinates
      //add onclick event with box of info on breweries

      //Use the zip code and return all market ids in area.


//console.log(marketName);

var counter = 0;
//Now, use the id to get detailed info
$.ajax({
  type: "GET",
  contentType: "application/json; charset=utf-8",
  // submit a get request to the restful service mktDetail.
  url: "http://api.brewerydb.com/v2/locations?key=f4b03113073283a320e1c5d0630a4d0d&postalCode=" + v,
  dataType: 'jsonp',
  success: function (data) {

  for (var key in data) {

    var results = data[key];

    //console.log(results);

    // //The API returns a link to Google maps containing lat and long. This pulls it apart.
    var googleLink = results['GoogleLink'];
    var latLong = decodeURIComponent(googleLink.substring(googleLink.indexOf("=")+1, googleLink.lastIndexOf("(")));

    var split = latLong.split(',');

    //covert values to floats, to play nice with .LatLng() below.
    var latitude = parseFloat(split[0]);
    var longitude = parseFloat(split[1]);

    //set the markers.
    myLatlng = new google.maps.LatLng(latitude,longitude);

    allMarkers = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: breweryName[counter],
      html:
          '<div class="markerPop">' +
          '<h1>' + breweryName[counter].substring(4) + '</h1>' + //substring removes distance from title
          '<h3>' + results['Address'] + '</h3>' +
          '<p>' + results['Products'].split(';') + '</p>' +
          '<p>' + results['Schedule'] + '</p>' +
          '</div>'
    });

    //put all lat long in array
    allLatlng.push(myLatlng);

    //Put the marketrs in an array
    tempMarkerHolder.push(allMarkers);

    counter++;
    //console.log(counter);
  };

    google.maps.event.addListener(allMarkers, 'click', function () {
      infowindow.setContent(this.html);
      infowindow.open(map, this);
    });


    //console.log(allLatlng);
    //  Make an array of the LatLng's of the markers you want to show
    //  Create a new viewpoint bound
    var bounds = new google.maps.LatLngBounds ();
    //  Go through each...
    for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
      //  And increase the bounds to take this point
      bounds.extend (allLatlng[i]);
    }
    //  Fit these bounds to the map
    map.fitBounds (bounds);


  }
});
}); //end .each
}
});
    }

    // Get the user's current position
    navigator.geolocation.getCurrentPosition(success, error);
    // console.log(pos.latitude + " " + pos.longitude);
  }
else {
      alert('Geolocation is not supported in your browser');
    }
//End Geo location
