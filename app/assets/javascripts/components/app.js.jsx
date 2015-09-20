var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNewApplicant(formData, action) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ applicant: data });
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="body-container">
          <RouteHandler onNewApplicant={this.handleNewApplicant} {...this.props}/>
        </div>
        <Footer />
      </div>
    );
  }
}
