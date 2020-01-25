import { createSelector } from 'reselect';

function isClickedState(state) {
  console.log("HERERERERERR");
  console.log("START state")
  console.log(state)
  console.log("END state")
  return state;
}

export const selectClicked = createSelector([isClickedState], (clicked) => clicked);
