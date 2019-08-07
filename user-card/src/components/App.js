import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';

import NavBar from './NavBar/NavBar';
import UserCard from './Cards/UserCard';
import FollowerContainer from './Cards/FollowerContainer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      followers: [],
      username: '',
    };
  }

  componentDidMount() {
    this.getUser('KevinTou');
    this.getFollowers('KevinTou');
  }

  getUser = async username => {
    return await axios
      .get(`https://api.github.com/users/${username}`)
      .then(user => {
        this.setState({ user: user.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getFollowers = async username => {
    return await axios
      .get(`https://api.github.com/users/${username}/followers`)
      .then(followers => {
        this.setState({ followers: followers.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (!this.state.user) {
      return <LinearProgress />;
    }

    return (
      <>
        <CssBaseline />
        <NavBar />
        <Container maxWidth='lg'>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <UserCard user={this.state.user} />}
            />
            <Route
              exact
              path='/followers'
              render={() => (
                <FollowerContainer followers={this.state.followers} />
              )}
            />
          </Switch>
        </Container>
      </>
    );
  }
}

export default App;
