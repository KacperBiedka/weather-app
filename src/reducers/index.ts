export interface reduxState {
  temperature: Object;
}

const initialState: reduxState = {
  temperature: {}
};

const getTemperature = (state: reduxState, action: any) => {
  const temp = action.temperature;
  return {
    ...state,
    temperature: {
      ...temp
    }
  };
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_TEMPERATURE":
      return getTemperature(state, action);
    default:
      return state;
  }
};

export default rootReducer;
