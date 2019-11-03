import { fromJS } from 'immutable';
import { SET_BACKGROUND_POSITION } from 'containers/App/constants';

const initialState = fromJS({
  backgroundPosition: '',
  rotation: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BACKGROUND_POSITION:
      return state.merge({ backgroundPosition: action.position });
    default:
      return state;
  }
}

export default appReducer;
