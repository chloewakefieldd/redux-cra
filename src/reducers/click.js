import { selectClicked } from '../selectors/click'

export default (state = false, action) => {
  if (action.type === 'click') {
    console.log("in the click reducer type click")
    console.log(selectClicked(state))
    return !selectClicked(state);
  }
  console.log("in the click reducer type default")
  return state;
}