import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { setBackgroundPosition } from 'containers/App/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  introduction: {
    fontSize: theme.typography.pxToRem(36),
    color: theme.palette.common.white,
    opacity: 0,
    textAlign: 'center',
    padding: '0 16px',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0,
    fontSize: theme.typography.pxToRem(72),
    padding: theme.spacing(2),
  },
  name: {
    color: theme.palette.common.white,
    fontFamily: '"Saira Condensed", sans-serif',
  },
  circle: {
    width: '15px',
    height: '15px',
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(0.5),
    cursor: 'pointer',
    background:
      'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet, red)',
    backgroundRepeat: 'repeat-x',
    backgroundSize: '1200% 1200%',
  },
  pressAnyButton: {
    fontSize: '12px',
    opacity: 0,
    color: '#a8a8a8',
  },
}));

function InitialText(props) {
  const classes = useStyles(props);
  const controls = useAnimation();
  const redirect = useAnimation();
  const fill = useAnimation();

  const history = useHistory();

  const [redirecting, setRedirecting] = React.useState(false);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      transition: { delay: i * 1 },
    }));
  }, []);

  useEffect(() => {
    redirect.start({
      backgroundPosition: [
        '0 20%',
        '40% 60%',
        '60% 80%',
        '100% 100%',
        '60% 80%',
        '40% 60%',
        '0 20%',
      ],
      // rotate: [0, 50, 100, 150, 200, 250, 360],
      borderRadius: ['20%', '40%', '80%', '100%', '80%', '40%', '20%'],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        times: [0.3, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        loop: Infinity,
        repeatDelay: 1,
      },
    });
  }, []);

  const handleClick = () => {
    setRedirecting(true);
    redirect.stop();
    const circle = document.getElementById('circle').style;
    props.setPosition(circle.backgroundPosition);
    fill
      .start({
        scale: 90,
        transition: {
          duration: 0.8,
        },
      })
      .then(() => history.push('/profile'));
  };

  return (
    <motion.div className={classes.root} onTap={() => handleClick()}>
      <motion.div
        custom={0}
        className={classes.introduction}
        animate={controls}
        transition={{ duration: 2 }}
      >
        Hello there! My name is
      </motion.div>
      <motion.div
        custom={1}
        animate={controls}
        className={classes.nameContainer}
      >
        <motion.div className={classes.name}>Thiago</motion.div>
        <motion.div
          id="circle"
          animate={redirecting ? fill : redirect}
          className={classes.circle}
          onTap={() => handleClick()}
        />
      </motion.div>
      <motion.div
        custom={4}
        className={classes.pressAnyButton}
        animate={controls}
      >
        {'<click anywhere to continue />'}
      </motion.div>
    </motion.div>
  );
}
const mapDispatchToProps = dispatch => ({
  dispatch,
  setPosition: position => dispatch(setBackgroundPosition(position)),
});

const mapStateToProps = () => ({});

InitialText.propTypes = {
  setPosition: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitialText);
