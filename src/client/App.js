import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import Loader from './components/Loader';
import Logout from './components/Logout/Logout';
import EventsPage from './containers/EventsPage/EventsPage';
import { Home } from './containers/Home/Home';
import LoginPage from './containers/LoginPage/LoginPage.component';
import LoginTest from './containers/LoginTestPage';
import TopicsTest from './containers/AdminTopicsPage/TopicsPage';
import ProfilePage from './containers/ProfilePage/ProfilePage.component';
import { MentorProfilePage } from './containers/ProfilePage/MentorProfile/MentorProfile.component';
import { StudentProfilePage } from './containers/ProfilePage/StudentProfile/StudentProfile/StudentProfile.component';
import { AdminProfilePage } from './containers/ProfilePage/AdminProfile/AdminProfile';
import { AdminRegistrationPage } from './containers/RegistrationPage/AdminRegistrationPage/AdminRegistrationPage.component';
import { MentorRegistrationPage } from './containers/RegistrationPage/MentorRegistrationPage/MentorRegistrationPage.component';
import { RegistrationSuccessPage } from './containers/RegistrationPage/RegistrationSuccessPage';
import { StudentRegistrationPage } from './containers/RegistrationPage/StudentRegistrationPage/StudentRegistrationPage.component';
import SelectionPage from './containers/SelectionPage/SelectionPage.component';
import SlackAuthPage from './containers/SlackAuthPage/SlackAuthPage.component';
import OrganizationsPage from './containers/AdminOrganizationsPage/OrganizationsPage';
import { useUser } from './context/userContext';
import SkillsPage from './containers/AdminSkillsPage/SkillsPage';
import StudentHome from './containers/StudentHome/StudentHome';
import { AdminRootPage } from './containers/AdminRootPage/AdminRootPage';
import Error404Page from './containers/404Page/404Page.component';

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

        <Route exact path="/logout">
          <Logout />
        </Route>

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
        <Route exact path="/registration/success">
          <RegistrationSuccessPage />
        </Route>

        <AuthenticatedRoute exact path="/admin">
          <AdminRootPage />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/admin/organizations">
          <OrganizationsPage />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/admin/skills">
          <SkillsPage />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/admin/topics">
          <TopicsTest />
        </AuthenticatedRoute>

        <AuthenticatedRoute exact path="/">
          <Home />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/home">
          <Home />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/home/student">
          <StudentHome />
        </AuthenticatedRoute>

        <AuthenticatedRoute exact path="/events">
          <EventsPage />
        </AuthenticatedRoute>

        <AuthenticatedRoute exact path="/profile">
          <ProfilePage />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/profile/student">
          <StudentProfilePage />
        </AuthenticatedRoute>

        <AuthenticatedRoute exact path="/profile/mentor">
          <MentorProfilePage />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/profile/admin">
          <AdminProfilePage />
        </AuthenticatedRoute>

        <Route path="*" component={Error404Page} />
      </Switch>
    </Router>
  );
}

export default App;
