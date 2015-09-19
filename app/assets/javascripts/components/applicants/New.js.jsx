class ApplicantsNew extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <h1>App</h1>
        <ul>
          <li>Derp</li>
          <li>Flerp</li>
        </ul>
        <div>
          <RouteHandler {...this.props}/>
        </div>
        <Footer />
      </div>
    );
  }
}
