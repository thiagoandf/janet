import { SET_BACKGROUND_POSITION } from 'containers/App/constants';

export function setBackgroundPosition(position) {
  return {
    type: SET_BACKGROUND_POSITION,
    position,
  };
}
