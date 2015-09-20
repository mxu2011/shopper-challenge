let Link = ReactRouter.Link;

class ApplicantsIndex extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='landing-container'>
        <section className="landing-section landing-hero">
          <div className="row">
            <div className="col-sm-10 col-md-5 col-lg-4">
              <h1 className="landing-heading">Become a shopper at <b>Instacart</b>.</h1>
              <p className="landing-subheading">Or this amid hotly closed sedulous after prior kept tortoise grotesquely camel on woodpecker.</p>
              <Link className="landing-cta button positive large" to="new">JOIN NOW</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
