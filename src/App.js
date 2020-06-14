import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import NotFoundPage from './pages/404';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="home" component={HomePage} />
        {/*<Route*/}
        {/*    exact*/}
        {/*    path="/:username/:gistId"*/}
        {/*    name="User Information"*/}
        {/*    component={UserInfoPage}*/}
        {/*/>*/}
        <Route path="*" name="not-found" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
