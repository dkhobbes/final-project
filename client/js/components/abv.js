if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {

  class AbvComponent extends React.Component {

    constructor() {
      super();
      this.state= {
        currentClass: 'nav-2',
        headerClass: 'nav-tabs',
        apiResult: { data: [] }
      };
    }
    componentDidMount() {
      console.log('AbvComponent.ComponentDidMount');
      // this.getTheData();
    }

    getTheData(evt, query) {

      $.ajax({
        url: "/api/theabv/" + query
      })
      .done((data) => {

        var dataAsObjects = JSON.parse(data);
        // console.log('got data', dataAsObjects);
        this.setState({
          apiResult: dataAsObjects,
          currentClass: query
        });
      });
    }

    render(){

      var theList;

      if (this.state != null) {
        console.log(this.state);
        console.log(this.state.apiResult);
        theList = <ul className="theList">
          {this.state.apiResult.data.map((abv, index) => {
            return <li key={index}> <img src={abv.labels.medium} className="abvIbuImg" /><h2 className="beerImgText">Abv:{abv.abv}</h2><h2 className="ellipses beerImgText" title={abv.name}>{abv.name}</h2> </li>
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
        <div className="abvIbu-bkgd">
        <div className="hops-img"></div>

        <div className="ibu-content">
          <section>
            <div className={this.state.currentClass === "2,4" ? "nav-2-on" : "nav-2"} onClick={(evt)=>{this.getTheData(evt,"2,4")}}> 2-4% abv</div>
            <div className={this.state.currentClass === "5,7" ? "nav-2-on" : "nav-2"} onClick={(evt)=>{this.getTheData(evt,"5,7")}}>5-7% abv</div>
            <div className={this.state.currentClass === "8,10" ? "nav-2-on" : "nav-2"} onClick={(evt)=>{this.getTheData(evt,"8,10")}}>8-10% abv</div>
            <div className={this.state.currentClass === "11,13" ? "nav-2-on" : "nav-2"} onClick={(evt)=>{this.getTheData(evt,"11,13")}}>11-13% abv</div>
            <div className={this.state.currentClass === "14,80" ? "nav-2-on" : "nav-2"} onClick={(evt)=>{this.getTheData(evt,"14,80")}}>14+% abv</div>
          </section>
          <div>
          </div>
          {
            this.state.apiResult.data.length
              ? theList
              : <div className="abvIbu-content">
                <h2>Welcome to the ABV page</h2>
                <h3>ABV stands for alcohol by volume, and usually indicates how kick butt your beer is going to be. An average beer will be between 4-5% ABV. Select one of the tabs above to see beers within that range.</h3>
              </div>
          }
          </div>
          <footer></footer>

        </div>
      </div>
    }
  }

  BeerRouter.AbvComponent = AbvComponent;

})();
