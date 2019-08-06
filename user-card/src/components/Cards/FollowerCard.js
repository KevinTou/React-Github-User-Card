import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: '1rem',
    textAlign: 'center',
  },
  media: {
    height: 300,
  },
});

const FollowerCard = ({ follower }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image={follower.avatar_url}
          title='GitHub follower avatar'
        /> */}
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {follower.login}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {follower.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='medium' color='primary'>
          GitHub
        </Button>
        <Button size='medium' color='primary'>
          Followers
        </Button>
      </CardActions>
    </Card>
  );
};

export default FollowerCard;
