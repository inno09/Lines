import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from "axios";
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Lines from './Lines';
import Authors from './Authors';
import Genre from './Genre';
import Favorites from './Favorites';
import NewPoem from "./NewPoem";
import Dashboard from "./Dashboard";
import Registration from "./Registration";



export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
  }

  handleSuccessfulAuth(data) {
    this.handleLogin(data);
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }
  render() {
  return (
   
    <div className="App">
        <div className="Container">
          <div className="Box-1">
            <div>
            </div>
            <Router>
            {/* <Home /> */}
              {/* <Sidebar /> */}
              <Routes>
              <Route
                exact
                path={"/"}
                render={props => (
                <Home
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                />
                )}
              />
              <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/registration"}
              render={props => (
                <Registration
                  handleSuccessfulAuth={this.handleSuccessfulAuth}
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
                <Route exact path="/home" element={<Home />} /> 
                <Route exact path="/lines" element={<Lines />} />
                <Route exact path="/authors" element={<Authors />} />
                <Route exact path="/genre" element={<Genre />} />
                <Route exact path="/favorites" element={<Favorites />} />
              </Routes>
            </Router>
          </div>
          
          <div>
            {/* <NewPoem /> */}
          </div>
        </div>
    </div>
  );
}
}


