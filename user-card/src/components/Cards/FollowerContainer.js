import React from 'react';

import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';

import FollowerCard from './FollowerCard';

const FollowerContainer = ({ followers }) => {
  if (!followers) {
    return <div>No followers</div>;
  }

  let seconds = 0;

  return (
    <>
      <Grid container spacing={3}>
        {followers.map(follower => {
          return (
            <Zoom
              key={follower.id}
              in={true}
              style={{ transitionDelay: `${(seconds += 150)}ms` }}>
              <Grid item xs={12} sm={6} md={3}>
                <FollowerCard follower={follower} />
              </Grid>
            </Zoom>
          );
        })}
      </Grid>
    </>
  );
};

export default FollowerContainer;
