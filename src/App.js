import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import NotFoundPage from './pages/404';
import HomePage from './pages/home';
import VolumeDetailPage from './pages/volume-detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="home" component={HomePage} />
        <Route
          exact
          path="/volume/:volumeId"
          name="Volume detail"
          component={VolumeDetailPage}
        />
        <Route path="*" name="not-found" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
