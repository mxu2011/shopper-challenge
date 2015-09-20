class ApplicantsForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    $.post('applicants', { applicant: this.state }, function(data) {
      this.props.handleNewRecord(data);
      this.setState(this.getInitialState());
    },
    'JSON');
  }

  handleUpdate(e) {
  }

  render() {
    return (
      <div className="new-container">
        <h1 className="new-heading">Great, let’s get you started with an application.</h1>
        <p className="new-subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="form-container">
          <input type="text" name="first_name" placeholder="First Name" />
          <input type="text" name="first_name" placeholder="Last Name" />
          <input type="text" name="first_name" placeholder="E-Mail" />
          <input type="text" name="first_name" placeholder="Phone Number" />
          <select id="" name="region">
            <option value=""></option>
          </select>
          <select id="" name="phone_type">
            <option value=""></option>
          </select>
        </div>
      </div>
    );
  }
}
