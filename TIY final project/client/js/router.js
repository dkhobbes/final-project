if (window.BeerRouter === undefined) {window.BeerRouter = {}; }

(function() {
var mountNode = document.querySelector('#react-root');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var router = <Router history={ReactRouter.hashHistory}>
      <Route path="/" component={BeerRouter.LandingPageComponent} />
      <Route path="/locator" component={BeerRouter.BeerSampleComponent} />
      <Route path="/abv" component={BeerRouter.AbvComponent} />
      <Route path="/ibu" component={BeerRouter.IbuComponent} />
      <Route path="/history" component={BeerRouter.HistoryComponent} />

    </Router>;

ReactDOM.render(router, mountNode);
})();
