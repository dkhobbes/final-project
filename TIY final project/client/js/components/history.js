if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {

  class MapHistory extends React.Component {
    componentDidMount() {
      console.log("sanity check");
      var myLatLng = {lat: 31.032936, lng: -99.9130348};
      this.googleMap = new google.maps.Map(this.map, {
        center: myLatLng,
        scrollwheel: false,
        zoom: 7
      });
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.googleMap,
        title: 'Hello World!'
      });
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
      return (
        <div id="map" ref={(map) => { this.map = map; }}></div>
      )
    }
  }

  class HistoryComponent extends React.Component {
    constructor() {
      super();
      this.state = {apiResult: {
        data: []
        }
      };

    }
    componentDidMount() {
      console.log('AppComponent.ComponentDidMount');
      this.getTheData();
    }

    getTheData(evt) {
      // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/texas"
        })
        .done((data) => {
          console.log('got data');

          var dataAsObjects = JSON.parse(data);

          this.setState({
            apiResult: dataAsObjects
          });
        });
      // }
    }

    render(){
      return <div>
        <header>
          <div className="nav-tabs"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/locator'}>locator</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/abv'}>abv</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/ibu'}>ibu</ReactRouter.Link></div>
          {/*  <div className="nav-tabs"><ReactRouter.Link to={'/history'}>history</ReactRouter.Link></div> */}
        </header>
        <div className="history-bar">
          <h1 id="Title-beer">Texas Brewery History</h1>
          <p>Watch the history of Texas Breweries in front of you.</p>
          <button type="submit" className="runButton">Run History</button>
          <button type="submit" className="resetButton">Reset</button>


        </div>
        <MapHistory info = {this.state.apiResult} />
        <div className="example-2">
        <p>The beer brewing industry is a major economic driver in America. There are more than 2,800 breweries in the U.S. responsible for $246.5 billion in economic output in 2012 alone. Directly and indirectly, breweries create more than 2 million American jobs.<br></br><span>www.ceres.org/declaration/about/climate-declaration-campaigns/brewery</span>
        </p>
        </div>
      </div>
    }
  }
  BeerRouter.HistoryComponent = HistoryComponent;

})();
