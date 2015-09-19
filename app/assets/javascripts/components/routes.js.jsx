var Route = ReactRouter.Route,
DefaultRoute = ReactRouter.DefaultRoute,
IndexRoute = ReactRouter.IndexRoute;

this.MyRoutes = (
  <Route handler={App}>
    <Route path="/" name="index" handler={ApplicantsIndex} />
    <Route path="new" name="new" handler={ApplicantsNew}>
      <Route path="/" name="form" handler={ApplicantsForm} />
      <Route path="check" name="check" handler={ApplicantsCheck} />
      <Route path="complete" name="complete" handler={ApplicantsComplete} />
    </Route>
  </Route>
);
