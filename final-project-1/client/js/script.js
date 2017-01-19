window.SW = window.SW || {};

(function() {
  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {
    render() {
      return <div>
        <SW.BeerSampleComponent />
      </div>;
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);

})();
