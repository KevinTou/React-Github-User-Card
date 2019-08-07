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
    margin: '3rem auto',
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

const UserCard = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          className={classes.media}
          image={user.avatar_url}
          title='GitHub user avatar'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {user.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {user.location ? user.location : 'No location available.'}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {user.bio ? user.bio : 'No bio available.'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button size='medium' href={user.html_url} color='primary'>
          GitHub
        </Button>
        <Button
          size='medium'
          href={`https://github.com/${user.login}?tab=followers`}
          color='primary'>
          Followers ({user.followers})
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
