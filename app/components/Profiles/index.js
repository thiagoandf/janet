import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useAnimation, motion } from 'framer-motion';

import { useHistory } from 'react-router-dom';
import Back from 'images/back.svg';
import Octocat from 'images/GitHub.png';
import Linkedin from 'images/Linkedin.png';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    color: theme.palette.common.white,
    height: '20px',
    width: '20px',
    cursor: 'pointer',
  },
  socialContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  singleSocial: {
    opacity: 0,
    backgroundColor: theme.palette.common.white,
    height: '100px',
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '30px',
  },
}));

export default function Profiles(props) {
  const classes = useStyles(props);
  const history = useHistory();
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      transition: { delay: i * 0.5 },
    }));
  }, []);

  return (
    <div className={classes.root}>
      <motion.div
        className={classes.backButton}
        onTap={() => history.push('/')}
      >
        <img src={Back} alt="Back" style={{ fill: '#fff' }} height="20px" />
      </motion.div>
      <motion.div className={classes.socialContainer}>
        <a href="https://github.com/thiagoandf" target="_blank">
          <motion.div
            animate={controls}
            custom={1}
            className={classes.singleSocial}
          >
            <img src={Octocat} alt="Github" height="50px" />
          </motion.div>
        </a>
        <div style={{ width: '32px' }} />
        <a href="https://linkedin.com/in/thiagoandf" target="_blank">
          <motion.div
            animate={controls}
            custom={2}
            className={classes.singleSocial}
          >
            <img src={Linkedin} alt="Linkedin" height="50px" />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}
