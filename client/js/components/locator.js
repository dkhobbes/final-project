if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {
  var breweryId = []; //returned from the API
	var allLatlng = []; //returned from the API
	var allMarkers = []; //returned from the API
	var breweryName = []; //returned from the API
	var infowindow = null;
	var pos;
	var userCords;
	var tempMarkerHolder = [];
  var markers = [];


  class Map extends React.Component {

    componentDidMount() {
      console.log("sanity check");

      var myLatLng = {lat: 38.032936, lng: -97.9130348};

      this.googleMap = new google.maps.Map(this.map, {
        center: myLatLng,
        zoom: 5
      });
    }

    componentDidUpdate() {
      console.log('willReceiveProps test', this.props);

      this.props.info.data.forEach((brewery) => {
        console.log(brewery);
        var myLatLng = {lat: brewery.latitude, lng: brewery.longitude};
        console.log(myLatLng);
        console.log(this.googleMap);

        console.log('LOCALITY', brewery)

        var contentString = '<div className="content">'+
                '<h2 className="bolded">Brewery: ' + (brewery.brewery.name || '')+ '</h2>' +
                '<h2 lassName="bolded">Brewery Type: ' + (brewery.locationTypeDisplay || '')+ '</h2>' +
                '<h3>' + (brewery.locality || '') + ', '+(brewery.region || '')+' '+(brewery.postalCode || '')+'</h3>' +

                (brewery.brewery.website ? '<a href= "'+ brewery.brewery.website +'" target="_blank">' +  brewery.brewery.website + '</a>' : '') +

                '</div>';

          var infowindow = new google.maps.InfoWindow({
              content: contentString
            });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: this.googleMap,
          title: 'Beer Me Finder!'
        });

        allLatlng.push(myLatLng);

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        var bounds = new google.maps.LatLngBounds ();
        for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
          bounds.extend (allLatlng[i]);
        }

        this.googleMap.fitBounds (bounds);
        console.log("bounds test", bounds);
        markers.push(marker);

      })
    }

    render() {
      console.log('sanity check 2');
      return (
        <div id="map" ref={(map) => { this.map = map; }}></div>
      )
    }
  }


  class BeerSampleComponent extends React.Component{

    constructor() {
      super();
      this.state = {apiResult: {data: []}};
    }

    componentDidMount() {
      console.log('AppComponent.ComponentDidMount');
      // this.getTheData();
      // this.myInput;
    }

    getTheData(evt) {
      // console.log(evt);
      // if (evt.keyCode === 13) {
      // var zip =input.value

      $.ajax({
        url: "/api/state/" + this.myInput.value
      })
      .done((data) => {

        var dataAsObjects = JSON.parse(data);
        console.log('got data', dataAsObjects);

        this.setState ({
          apiResult: dataAsObjects
        })

      });
      // }
    }

    clearHandler(evt) {
      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      function clearMarkers() {
        setMapOnAll(null);
      }

      clearMarkers();
      markers = [];
      allLatlng = [];
    }


    keyUp(evt) {
      if (evt.keyCode === 13) {
        this.getTheData(evt.target.value)
      }
    }

    render(){
      console.log('render', this.state);
      var theList;

      if (this.state != null) {
        console.log(this.state);
        theList = <ul className="theList">

        {this.state.apiResult.data.map((brewery, index) => {
          return <li key={index}> (latitude: {brewery.latitude}) (longitude: {brewery.longitude})</li>
          })
        })}
        </ul>;
      }

      return <div>
      <header>
        <div className="nav-tabs"><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/locator'}>Locator</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/abv'}>ABV</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/ibu'}>IBU</ReactRouter.Link></div>
        {/*  <div className="nav-tabs"><ReactRouter.Link to={'/history'}>history</ReactRouter.Link></div> */}
      </header>
      <div id="control">
        <h2 id="Title-beer">FIND LOCAL BREWERIES</h2>
        <p>Let us help you locate the breweries closest to you. Simply enter your state below to find your next beer.</p>
        <form method="get" id="chooseZip">
          {/*<button type="submit" className="learnButton">Use current location</button>*/}
          <div className="zipSearch">
    				<input id="textZip" type="text" placeholder="enter state" onKeyUp={(evt) => { this.keyUp(evt); }} ref={(input) => { this.myInput = input; }} />
    				<button type="submit" className="learnButton" onClick={(evt)=>{this.getTheData(evt); }} >Search for State</button>
            <button type="submit" className="learnButton" onClick={(evt)=>{this.clearHandler(evt); }} >Clear Results</button>

  			  </div>
        </form>

      </div>
      <Map info = {this.state.apiResult} />

      </div>
    }
  }
  BeerRouter.BeerSampleComponent = BeerSampleComponent;
})();
