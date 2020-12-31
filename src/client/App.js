import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import Loader from './components/Loader';
import Route404 from './components/Route404';
import EventsPage from './containers/EventsPage/EventsPage';
import { Home } from './containers/Home/Home';
import LoginPage from './containers/LoginPage/LoginPage.component';
import LoginTest from './containers/LoginTestPage';
import ProfilePage from './containers/ProfilePage/ProfilePage.component';
import { AdminRegistrationPage } from './containers/RegistrationPage/AdminRegistrationPage/AdminRegistrationPage.component';
import { MentorRegistrationPage } from './containers/RegistrationPage/MentorRegistrationPage/MentorRegistrationPage.component';
import { StudentRegistrationPage } from './containers/RegistrationPage/StudentRegistrationPage/StudentRegistrationPage.component';
import SelectionPage from './containers/SelectionPage/SelectionPage.component';
import SlackAuthPage from './containers/SlackAuthPage/SlackAuthPage.component';
import { useUser } from './context/userContext';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isLoading } = useUser();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <LoginTest exact path="/login-test" />
        <Route exact path="/slack-auth">
          <SlackAuthPage />
        </Route>
        <Route exact path="/registration">
          <SelectionPage />
        </Route>
        <Route exact path="/registration/mentor">
          <MentorRegistrationPage />
        </Route>
        <Route exact path="/registration/student">
          <StudentRegistrationPage />
        </Route>
        <Route exact path="/registration/admin">
          <AdminRegistrationPage />
        </Route>

        <AuthenticatedRoute exact path="/">
          <Home />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/events">
          <EventsPage />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/profile">
          <ProfilePage />
        </AuthenticatedRoute>

        <Route path="*" component={Route404} />
      </Switch>
    </Router>
  );
}

export default App;
