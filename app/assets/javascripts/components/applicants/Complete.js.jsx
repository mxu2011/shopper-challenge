class ApplicantsComplete extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    debugger;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.context.router.transitionTo('/');

    // Commented out for now until I figure out what to do
    //this.setState(function(prev, current) {
      //var new_applicant = Object.create({}, prev.applicant);
      //new_applicant.workflow_state = "onbarding_complete";
      //return { applicant: new_applicant };
    //});

    //var that = this;

    //$.ajax({
      //type: "PUT",
      //url: "/applicants/" + that.state.applicant.id,
      //data: { applicant: this.state },
      //success: data => {
        //this.setState({ applicant: data });
        //this.context.router.transitionTo('/', { applicant: this.state });
        //return false;
      //},
      //error: err => {
        //console.log(err);
        //return false;
      //}
    //});
  }

  render() {
    return (
      <div className="row center">
        <form onSubmit={this.handleSubmit} className="new-container col-sm-10 col-md-8 col-lg-6">
          <h2 className='new-heading'>You’ve completed the application process!</h2>
          <p className="new-subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
          <div className="image-container">
            <div className="image-complete"></div>
          </div>
          <div className="image-submit">
            <button className="button large expand">Return</button>
          </div>
        </form>
      </div>
    )
  }
}

ApplicantsComplete.contextTypes = {
  router: React.PropTypes.func.isRequired
}

