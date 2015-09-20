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
        <section className="landing-section">
          <div className="row center">
            <div className="col-sm-12 col-md-10 col-lg-8">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="text-center">What's it all about</h2>
                </div>
              </div>
              <div className="row landing-text-container">
                <div className="col-sm-4 landing-text">
                  <p>Adipisicing elit possimus sed sed. Est necessitatibus odio blanditiis nulla ducimus iusto, sit cupiditate ab. Laboriosam quae minus adipisci iusto quia. Velit laudantium?</p>
                </div>
                <div className="col-sm-4 landing-text">
                  <p>Adipisicing elit iste hic sequi dolore possimus sed sed. Est necessitatibus odio blanditiis nulla ducimus iusto, sit cupiditate ab. Laboriosam quae minus adipisci iusto quia. Velit laudantium?</p>
                </div>
                <div className="col-sm-4 landing-text">
                  <p>Adipisicing elit sequi dolore possimus sed sed. Est necessitatibus odio blanditiis nulla ducimus iusto, sit cupiditate ab. Laboriosam quae minus adipisci iusto quia. Velit laudantium?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
