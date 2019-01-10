import React, { Component } from 'react';
import firebase from 'firebase/app';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import connection from '../helpers/data/connection';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/pages/Auth/Auth';
import EditFrends from '../components/pages/EditFriends/EditFriends';
import EditHoliday from '../components/pages/EditHoliday/EditHoliday';
import Friends from '../components/pages/Friends/Friends';
import HolidayDetail from '../components/pages/HolidayDetail/HolidayDetail';
import HolidayFriends from '../components/pages/HolidayFriends/HolidayFriends';
import Holidays from '../components/pages/Holidays/Holidays';
import NewFriends from '../components/pages/NewFriends/NewFriends';
import NewHoliday from '../components/pages/NewHoliday/NewHoliday';

// import { Button } from 'reactstrap';
// import logo from './logo.svg';
import authRequests from '../helpers/data/authRequest';
import './App.scss';


class App extends Component {
  state = {
    authed: false,
    pendingUser: true,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          pendingUser: false,
        });
      } else {
        this.setState({
          authed: false,
          pendingUser: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed, pendingUser } = this.state;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (pendingUser) {
      return null;
    }
    return (
        <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent} />
            <div className='container'>
            <div className='row'>
                {/* <Switch>
                  <PrivateRoute path='/' exact component={Home} authed={this.state.authed} />
                  <PrivateRoute path='/home' component={Home} authed={this.state.authed} />
                  <PrivateRoute path="/friends" authed={this.state.authed} component={Friends} />
                  <PrivateRoute path="/articles" authed={this.state.authed} component={EditFrends} />
                  <PrivateRoute path="/weather" authed={this.state.authed} component={EditHoliday} />
                  <PrivateRoute path="/events" authed={this.state.authed} component={HolidayDetail} />
                  <PrivateRoute path="/events" authed={this.state.authed} component={HolidayFriends} />
                  <PrivateRoute path="/messages" authed={this.state.authed} component={Holidays} />
                  <PrivateRoute path="/events" authed={this.state.authed} component={NewFriends} />
                  <PrivateRoute path="/messages" authed={this.state.authed} component={NewHoliday} />
                  <PublicRoute path='/auth' component={Auth} authed={this.state.authed} />
                </Switch> */}
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
