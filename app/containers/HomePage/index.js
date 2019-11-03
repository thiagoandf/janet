import React from 'react';
import { makeStyles } from '@material-ui/core';

// Components
import InitialText from 'components/InitialText/Loadable';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.black,
    fontFamily: '"Quattrocento Sans", sans-serif',
    overflow: 'hidden',
  },
}));

export default function HomePage(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <InitialText />
    </div>
  );
}
