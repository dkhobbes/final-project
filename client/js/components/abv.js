if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {

  class AbvComponent extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
      console.log('AbvComponent.ComponentDidMount');
      // this.getTheData();
    }

    getTheData(evt, query) {

      // var param = query
      // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/theabv/" + query
        })
        .done((data) => {

          var dataAsObjects = JSON.parse(data);
          // console.log('got data', dataAsObjects);

          this.setState({
            apiResult: dataAsObjects
          });
        });
      // }
    }

    render(){

      var theList;

      if (this.state != null) {
        console.log(this.state);
        theList = <ul className="theList">
          {this.state.apiResult.data.map((abv, index) => {
            return <li key={index}> <img src={abv.labels.medium} className="abvIbuImg" /><h2 className="beerImgText">Abv:{abv.abv}</h2> </li>
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
        <div className="abvIbu-bkgd">
        <div className="hops-img"></div>

        <div className="ibu-content">
          <section>
            <div className="nav-2" onClick={(evt)=>{this.getTheData(evt,"2,4")}}> 2-4</div>
            <div className="nav-2" onClick={(evt)=>{this.getTheData(evt,"5,7")}}>5-7</div>
            <div className="nav-2" onClick={(evt)=>{this.getTheData(evt,"8,10")}}>8-10</div>
            <div className="nav-2" onClick={(evt)=>{this.getTheData(evt,"11,13")}}>11-13</div>
            <div className="nav-2" onClick={(evt)=>{this.getTheData(evt,"14,80")}}>14+</div>
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
