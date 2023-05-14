

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];  //return updated copy of state
    default:
      return state;
}
}