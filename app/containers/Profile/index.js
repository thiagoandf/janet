import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeSelectBackgroundPosition } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import Profiles from 'components/Profiles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    background:
      'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet, red)',
    backgroundRepeat: 'repeat-x !important',
    backgroundSize: '1200% 1200% !important',
    backgroundPosition: props =>
      props.backgroundPosition ? props.backgroundPosition : '0% 20%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
}));

function Profile(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Profiles />
    </div>
  );
}

Profile.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  backgroundPosition: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  backgroundPosition: makeSelectBackgroundPosition(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
