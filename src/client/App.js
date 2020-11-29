import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './containers/Home/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import { useAuthentication } from './hooks/useAuthentication';
import Header from './components/Navigation/Header';
import Profile from './containers/Profile';
import Loader from './components/Loader';
import Route404 from './components/Route404';

import LoginPage from './containers/LoginPage/LoginPage.component';
import SelectionPage from './containers/SelectionPage/SelectionPage.component';
import RegistrationPage from './containers/RegistrationPage/RegistrationPage.component';
import EventsPage from './containers/EventsPage/EventsPage.component';
import ProfilePage from './containers/ProfilePage/ProfilePage.component';

function App() {
  const { isAuthenticated, isLoading } = useAuthentication();
  if (isLoading) return <Loader />;
  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/selection">
          <SelectionPage />
        </Route>
        <Route exact path="/registration">
          <RegistrationPage />
        </Route>
        <Route exact path="/events">
          <EventsPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>

        <SignIn exact path="/sign-in" />
        <SignUp exact path="/sign-up" />
        <ResetPassword exact path="/reset-password" />
        <AuthenticatedRoute
          exact
          path="/profile"
          isAuthenticated={isAuthenticated}
        >
          <Profile />
        </AuthenticatedRoute>
        <Route path="*" component={Route404} />
      </Switch>
    </Router>
  );
}

export default App;
