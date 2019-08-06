import React from 'react';
import axios from 'axios';
import './App.css';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import UserCard from './Cards/UserCard';
import FollowerContainer from './Cards/FollowerContainer';

class App extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   user: {
    //     avatar_url: 'https://avatars1.githubusercontent.com/u/8358794?v=4',
    //     bio: 'Full-stack Web Developer',
    //     blog: '',
    //     company: null,
    //     created_at: '2014-08-05T04:07:32Z',
    //     email: null,
    //     events_url: 'https://api.github.com/users/KevinTou/events{/privacy}',
    //     followers: 26,
    //     followers_url: 'https://api.github.com/users/KevinTou/followers',
    //     following: 37,
    //     following_url:
    //       'https://api.github.com/users/KevinTou/following{/other_user}',
    //     gists_url: 'https://api.github.com/users/KevinTou/gists{/gist_id}',
    //     gravatar_id: '',
    //     hireable: null,
    //     html_url: 'https://github.com/KevinTou',
    //     id: 8358794,
    //     location: 'San Diego, CA',
    //     login: 'KevinTou',
    //     name: 'Kevin Tou',
    //     node_id: 'MDQ6VXNlcjgzNTg3OTQ=',
    //     organizations_url: 'https://api.github.com/users/KevinTou/orgs',
    //     public_gists: 0,
    //     public_repos: 50,
    //     received_events_url:
    //       'https://api.github.com/users/KevinTou/received_events',
    //     repos_url: 'https://api.github.com/users/KevinTou/repos',
    //     site_admin: false,
    //     starred_url:
    //       'https://api.github.com/users/KevinTou/starred{/owner}{/repo}',
    //     subscriptions_url:
    //       'https://api.github.com/users/KevinTou/subscriptions',
    //     type: 'User',
    //     updated_at: '2019-07-23T14:48:17Z',
    //     url: 'https://api.github.com/users/KevinTou',
    //   },
    //   follower: {
    //     avatar_url: 'https://avatars2.githubusercontent.com/u/33085332?v=4',
    //     events_url:
    //       'https://api.github.com/users/AnthonyWilson1/events{/privacy}',
    //     followers_url: 'https://api.github.com/users/AnthonyWilson1/followers',
    //     following_url:
    //       'https://api.github.com/users/AnthonyWilson1/following{/other_user}',
    //     gists_url:
    //       'https://api.github.com/users/AnthonyWilson1/gists{/gist_id}',
    //     gravatar_id: '',
    //     html_url: 'https://github.com/AnthonyWilson1',
    //     id: 33085332,
    //     login: 'AnthonyWilson1',
    //     node_id: 'MDQ6VXNlcjMzMDg1MzMy',
    //     organizations_url: 'https://api.github.com/users/AnthonyWilson1/orgs',
    //     received_events_url:
    //       'https://api.github.com/users/AnthonyWilson1/received_events',
    //     repos_url: 'https://api.github.com/users/AnthonyWilson1/repos',
    //     site_admin: false,
    //     starred_url:
    //       'https://api.github.com/users/AnthonyWilson1/starred{/owner}{/repo}',
    //     subscriptions_url:
    //       'https://api.github.com/users/AnthonyWilson1/subscriptions',
    //     type: 'User',
    //     url: 'https://api.github.com/users/AnthonyWilson1',
    //   },
    // };
    this.state = {
      user: null,
      followers: [],
    };
  }

  componentDidMount() {
    this.getUser('');
    this.getFollowers('');
  }

  getUser = name => {
    axios
      .get('https://api.github.com/users/KevinTou')
      .then(user => {
        // console.log('User: ', user);
        this.setState({ user: user.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getFollowers = name => {
    axios
      .get('https://api.github.com/users/KevinTou/followers')
      .then(followers => {
        // console.log('Followers: ', followers);
        this.setState({ followers: followers.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (!this.state.user) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <CssBaseline />
        <Container
          maxWidth='sm'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {/* TODO: Add nav */}
          <UserCard user={this.state.user} />
          <FollowerContainer followers={this.state.followers} />
        </Container>
      </>
    );
  }
}

export default App;
