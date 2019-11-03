import { createSelector } from 'reselect';

const selectRouter = state => state.router;
const appRoute = state => state.app;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectBackgroundPosition = () =>
  createSelector(
    appRoute,
    appState => appState.get('backgroundPosition'),
  );

export { makeSelectLocation, makeSelectBackgroundPosition };
