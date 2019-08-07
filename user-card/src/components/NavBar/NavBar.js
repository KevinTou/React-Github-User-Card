import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: '2rem',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: '#111',
    marginLeft: '2rem',
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Toolbar className={classes.nav}>
          <Typography variant='h6' color='inherit'>
            GitHub User Cards
          </Typography>
          <div>
            <Link className={classes.link} component={RouterLink} to='/'>
              Home
            </Link>
            <Link
              className={classes.link}
              component={RouterLink}
              to='/followers'>
              Followers
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
