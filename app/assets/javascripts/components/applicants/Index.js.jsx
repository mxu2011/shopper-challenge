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
            <div className="col-sm-5">
              <h1>Become a shopper at <b>Instacart</b>.</h1>
              <p>Or this amid hotly closed sedulous after prior kept tortoise grotesquely camel on woodpecker.</p>
              <Link className="button positive" to="new">JOIN NOW</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
