export const thunk = ({dispatch, getState}) => next => action => {
  console.log('THUNK TIME!')
  if (typeof action === 'function') {
    return action(dispatch, getState);
  } else {
    return next(action);
  }
};