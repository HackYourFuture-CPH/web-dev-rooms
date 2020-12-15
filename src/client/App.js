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
import { MentorRegistrationPage } from './containers/RegistrationPage/MentorRegistrationPage/MentorRegistrationPage.component';
import EventsPage from './containers/EventsPage/EventsPage.component';
import ProfilePage from './containers/ProfilePage/ProfilePage.component';
import UserTest from './context/UserContextTest';
import { UserProvider } from './context/userContext';
import SlackAuthPage from './containers/SlackAuthPage/SlackAuthPage.component';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isAuthenticated, isLoading } = useAuthentication();
  if (isLoading) return <Loader />;

  const notify = () => toast('Wow so easy !');
  return (
    <div>
      <UserProvider>
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
            <Route exact path="/registration/mentor">
              <MentorRegistrationPage />
            </Route>
            <Route exact path="/events">
              <EventsPage />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
            <Route exact path="/usertest">
              <UserTest />
            </Route>
            <Route exact path="/slack-auth">
              <SlackAuthPage />
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
      </UserProvider>
      <button type="button" onClick={notify}>
        ReactToastify
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
