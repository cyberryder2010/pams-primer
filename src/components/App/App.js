import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { connect } from "react-redux";

import Nav from "../Nav/Nav";
import Nav2 from "../Nav2/Nav2";
import Footer from "../Footer/Footer";
// import Header from "../Header/Header";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
// import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
//pages specific to tech primer application
// import HomePage from "../HomePage/HomePage";
import ReferencePage from "../ReferencePage/ReferencePage";
import DetailsPage from "../DetailsPage/DetailsPage";
import EditPage from "../EditPage/EditPage";
import GlossaryPage from "../GlossaryPage/GlossaryPage";
import NotesPage from "../NotesPage/NotesPage";
import VideoPage from "../VideoPage/VideoPage";
import RepoPage from "../RepoPage/RepoPage";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
          <Nav />
          <Nav2>
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />
              {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
              <Route exact path="/about" component={AboutPage} />

              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
              <ProtectedRoute exact path="/admin" component={UserPage} />
              {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
              <ProtectedRoute exact path="/info" component={InfoPage} />
              {/* This works the same as the other protected route, except that if the user is logged in,
            they will be redirected to the authRedirect path provided. */}
              <ProtectedRoute
                exact
                path="/login"
                authRedirect="/admin"
                component={LoginPage}
              />
              <ProtectedRoute
                exact
                path="/registration"
                authRedirect="/admin"
                component={RegisterPage}
              />
              {/* page routes for specific app pages in use. */}
              <Route exact path="/home" component={ReferencePage} />
              <Route exact path="/glossary" component={GlossaryPage} />
              <Route exact path="/reference/edit/:id" component={EditPage} />
              <Route
                exact
                path="/reference/details/:id"
                component={DetailsPage}
              />
              <Route exact path="/video" component={VideoPage} />
              <Route exact path="/repo" component={RepoPage} />
              <Route exact path="/note" component={NotesPage} />

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>

            <Footer />
          </Nav2>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
