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
    margin: '1rem auto',
    textAlign: 'center',
  },
  media: {
    height: '100%',
    width: '100%',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const FollowerCard = ({ follower }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          className={classes.media}
          image={follower.avatar_url}
          title='GitHub follower avatar'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {follower.login}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button size='medium' href={follower.html_url} color='primary'>
          GitHub
        </Button>
        <Button
          size='medium'
          href={`https://github.com/${follower.login}?tab=followers`}
          color='primary'>
          Followers
        </Button>
      </CardActions>
    </Card>
  );
};

export default FollowerCard;
