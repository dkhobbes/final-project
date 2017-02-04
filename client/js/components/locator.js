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


  class Map extends React.Component {

    componentDidMount() {
      console.log("sanity check");

      var myLatLng = {lat: 38.032936, lng: -97.9130348};

      this.googleMap = new google.maps.Map(this.map, {
        center: myLatLng,
        scrollwheel: false,
        zoom: 5
      });



    {/*  var contentString = '<div id="content">'+
            '<h1 id="firstHeading">brewery.streetAdress</h1>'+
            '<h3>' + ['Address'] + '</h3>' +
            '<p>' + ['Schedule'] + '</p>' +
            '</div>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.googleMap,
        title: 'Hello World!'
      });
      marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

      console.log("props", this.props); */}
    }

    componentDidUpdate() {
      console.log('willReceiveProps test', this.props);

      this.props.info.data.forEach((brewery) => {
        console.log(brewery);
        var myLatLng = {lat: brewery.latitude, lng: brewery.longitude};
        console.log(myLatLng);
        console.log(this.googleMap);

        var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.googleMap,
        title: 'Hello World!'
        });
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
        <div className="nav-tabs"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/locator'}>locator</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/abv'}>abv</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/ibu'}>ibu</ReactRouter.Link></div>
        {/*  <div className="nav-tabs"><ReactRouter.Link to={'/history'}>history</ReactRouter.Link></div> */}
      </header>
      <div id="control">
        <h2 id="Title-beer">Find Local Breweries</h2>
        <p>We will help you locate your closest brewery. Simply type in your zip code below to begin, and map my beer.</p>
        <form method="get" id="chooseZip">
          {/*<button type="submit" className="learnButton">Use current location</button>*/}
          <div className="zipSearch">
    				<input id="textZip" type="text" placeholder="enter state" onKeyUp={(evt) => { this.keyUp(evt); }} ref={(input) => { this.myInput = input; }} />
    				<button type="submit" className="learnButton" onClick={(evt)=>{this.getTheData(evt); }} >Search for State</button>
  			  </div>
        </form>

      </div>
      <Map info = {this.state.apiResult} />
      <div className="example"></div>
      <div className="example-2">
      <p>Although precise numbers from the 19th century are difficult to confirm, this is almost certainly the first time the United States has crossed the 4,000 brewery barrier since the 1870s.<br></br><span>September 28, 2015</span><span>By Bart Watson</span><span>www.brewersassociation.org</span>
      </p>
      </div>
        {/*{theList}*/}
      </div>
    }
  }
  BeerRouter.BeerSampleComponent = BeerSampleComponent;
})();
