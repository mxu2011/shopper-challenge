class ApplicantsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var obj = {};

    var formData = $(this.refs.form.getDOMNode()).serializeArray().forEach(function(item) {
      obj[item.name] = item.value;
    });

    $.ajax({
      type: "POST",
      url: "/applicants",
      data: { applicant: obj },
      success: data => {
        this.setState({ applicant: data });
        this.context.router.transitionTo('check');
        return false;
      }, error: data => {
        return false;
      }
    });
  }

  render() {
    return (
      <div className="row center">
        <form ref="form" onSubmit={this.handleSubmit} className="new-container col-sm-10 col-md-8 col-lg-6">
          <h2 className="new-heading">Great, let’s get you started with an application.</h2>
          <p className="new-subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
          <div className="form-container">
            <input type="hidden" name="workflow_state" value="form" />
            <input className="form-element" type="text" name="first_name" placeholder="First Name" />
            <input className="form-element" type="text" name="last_name" placeholder="Last Name" />
            <input className="form-element" type="text" name="email" placeholder="E-Mail" />
            <input className="form-element" type="text" name="phone" placeholder="Phone Number" />
            <select className="form-element" id="" name="region" defaultValue="">
              <option value="" disabled>Region</option>
              {
                this.props.app_data.regions.map(function(region, index) {
                  return <option key={index} value={index}>{region}</option>
                })
              }
            </select>
            <select className="form-element" id="" name="phone_type" defaultValue="">
              <option value="" disabled>Phone Type</option>
              {
                this.props.app_data.phone_types.map(function(phone_type, index) {
                  return <option key={index} value={index}>{phone_type}</option>
                })
              }
            </select>
          </div>
          <div className="form-submit">
            <button className="button large positive expand" type="submit">Create Application</button>
          </div>
        </form>
      </div>
    );
  }
}

ApplicantsForm.contextTypes = {
  router: React.PropTypes.func.isRequired
}

ApplicantsForm.propTypes = {
  first_name: React.PropTypes.string.isRequired,
  last_name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
  region: React.PropTypes.number.isRequired,
  phone_type: React.PropTypes.number.isRequired
}

ApplicantsForm.defaultProps = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  region: 0,
  phone_type: 0
}
