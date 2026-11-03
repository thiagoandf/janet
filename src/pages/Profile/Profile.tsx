import { useLocation } from 'react-router';
import type { CSSProperties } from 'react';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import {
  RAINBOW_GRADIENT,
  RAINBOW_BACKGROUND_SIZE,
  DEFAULT_BACKGROUND_POSITION,
  isProfileLocationState,
} from '@/lib/rainbow';
import classes from './Profile.module.css';

export default function Profile() {
  const location = useLocation();
  const backgroundPosition = isProfileLocationState(location.state)
    ? location.state.backgroundPosition
    : DEFAULT_BACKGROUND_POSITION;

  const style: CSSProperties = {
    backgroundImage: RAINBOW_GRADIENT,
    backgroundRepeat: 'repeat-x',
    backgroundSize: RAINBOW_BACKGROUND_SIZE,
    backgroundPosition,
  };

  return (
    <div className={classes.root} style={style}>
      <SocialLinks />
    </div>
  );
}
