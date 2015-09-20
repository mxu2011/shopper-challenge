var Route = ReactRouter.Route,
DefaultRoute = ReactRouter.DefaultRoute,
IndexRoute = ReactRouter.IndexRoute;

this.AppRoutes = (
  <Route handler={App}>
    <Route path="/" name="index" handler={ApplicantsIndex} />
    <Route path="new" name="new" handler={ApplicantsNew}>
      <DefaultRoute  handler={ApplicantsForm} />
      <Route path="check" name="check" handler={ApplicantsCheck} />
      <Route path="complete" name="complete" handler={ApplicantsComplete} />
    </Route>
  </Route>
);
