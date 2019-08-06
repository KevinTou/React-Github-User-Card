import React from 'react';
// import Container from '@material-ui/core/Container';

import FollowerCard from './FollowerCard';

const FollowerContainer = ({ followers }) => {
  if (!followers) {
    return <div>No followers</div>;
  }

  return (
    <>
      {followers.map(follower => {
        return <FollowerCard follower={follower} />;
      })}
    </>
  );
};

export default FollowerContainer;
