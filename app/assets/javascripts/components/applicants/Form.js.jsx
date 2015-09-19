class ApplicantsForm extends React.Component {
  getInitialState() {
    return {
      first_name: '',
      last_name: ''
    }
  }

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
      <div></div>
    );
  }
}
