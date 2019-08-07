import React from 'react';

import Grid from '@material-ui/core/Grid';

import FollowerCard from './FollowerCard';

const FollowerContainer = ({ followers }) => {
  if (!followers) {
    return <div>No followers</div>;
  }

  return (
    <>
      <Grid container spacing={3}>
        {followers.map(follower => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <FollowerCard key={follower.id} follower={follower} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default FollowerContainer;
