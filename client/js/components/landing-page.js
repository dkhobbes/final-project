if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {
  class LandingPageComponent extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
      console.log('AppComponent.ComponentDidMount');
    }
    render(){
      return <div>
        <header>
        <div className="nav-tabs"><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/locator'}>Locator</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/abv'}>ABV</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/ibu'}>IBU</ReactRouter.Link></div>
          {/*  <div className="nav-tabs"><ReactRouter.Link to={'/history'}>history</ReactRouter.Link></div> */}
        </header>
        <div id="home-picture">
        <div id="divs2center">
          <div className="home-section" id="home-center"><h1>Welcome to Beer Me Finder</h1></div>
          <div className="home-section" id="home-2" ><p>Enjoy this application devoted to the beer and breweries near you. You can look at the breweries in your area, or see what beer has the highest abv to kick your butt.</p></div>
        </div>
        </div>
      </div>
    }
  }
  BeerRouter.LandingPageComponent = LandingPageComponent;

})();
