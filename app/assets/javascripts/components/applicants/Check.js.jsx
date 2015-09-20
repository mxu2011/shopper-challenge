class ApplicantsCheck extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.context.router.transitionTo('complete');
  }

  render() {
    return (
      <div className="row center">
        <form onSubmit={this.handleSubmit} className="new-container col-sm-10 col-md-8 col-lg-6">
          <h2 className='new-heading'>For security, we need to do a background check.</h2>
          <p className="new-subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
          <div className="image-container">
            <div className="image-check"></div>
          </div>
          <div className="image-submit">
            <button className="button large positive expand">Sounds Good</button>
          </div>
        </form>
      </div>
    )
  }
}

ApplicantsCheck.contextTypes = {
  router: React.PropTypes.func.isRequired
}
