var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="body-container">
          <RouteHandler {...this.props}/>
        </div>
        <Footer />
      </div>
    );
  }
}
