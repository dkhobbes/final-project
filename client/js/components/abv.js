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
          currentClass: query,
          headerClass: query
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
          <div className={this.state.headerClass === "home" ? "nav-tabs-on" : "nav-tabs"}><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
          <div className={this.state.headerClass === "locator" ? "nav-tabs-on" : "nav-tabs"}><ReactRouter.Link to={'/locator'}>locator</ReactRouter.Link></div>
          <div className={this.state.headerClass === "abv" ? "nav-tabs-on" : "nav-tabs"}><ReactRouter.Link to={'/abv'}>abv</ReactRouter.Link></div>
          <div className={this.state.headerClass === "ibu" ? "nav-tabs-on" : "nav-tabs"}><ReactRouter.Link to={'/ibu'}>ibu</ReactRouter.Link></div>
        {/*  <div className="nav-tabs"><ReactRouter.Link to={'/history'}>history</ReactRouter.Link></div> */}
        </header>
        <div className="abvIbu-bkgd">
        <div className="hops-img"></div>

        <div className="ibu-content">
          <section>
            <div className={this.state.currentClass === "2,4" ? "nav-2-on" : "nav-2"} onClick={(evt)=>{this.getTheData(evt,"2,4")}}> 2-4</div>
            <div className={this.state.currentClass === "5,7" ? "nav-2-on" : "nav-2"} onClick={(evt)=>{this.getTheData(evt,"5,7")}}>5-7</div>
            <div className={this.state.currentClass === "8,10" ? "nav-2-on" : "nav-2"} onClick={(evt)=>{this.getTheData(evt,"8,10")}}>8-10</div>
            <div className={this.state.currentClass === "11,13" ? "nav-2-on" : "nav-2"} onClick={(evt)=>{this.getTheData(evt,"11,13")}}>11-13</div>
            <div className={this.state.currentClass === "14,80" ? "nav-2-on" : "nav-2"} onClick={(evt)=>{this.getTheData(evt,"14,80")}}>14+</div>
          </section>
          <div>
          </div>
          {theList}
          </div>
          <footer></footer>

        </div>
      </div>
    }
  }

  BeerRouter.AbvComponent = AbvComponent;

})();
