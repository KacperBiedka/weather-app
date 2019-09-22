export interface reduxState {
  temperature: Object;
  name: String;
}

const initialState: reduxState = {
  temperature: {
    list: [
      { main: { temp: 15 }, dt_txt: "2019-09-22 6:00:00" },
      { main: { temp: 20 }, dt_txt: "2019-09-22 9:00:00" },
      { main: { temp: 12 }, dt_txt: "2019-09-22 12:00:00" },
      { main: { temp: 14 }, dt_txt: "2019-09-22 15:00:00" },
      { main: { temp: 11 }, dt_txt: "2019-09-22 18:00:00" },
      { main: { temp: 16 }, dt_txt: "2019-09-22 21:00:00" },
      { main: { temp: 25 }, dt_txt: "2019-09-22 24:00:00" },
      { main: { temp: 10 }, dt_txt: "2019-09-23 3:00:00" }
    ]
  },
  name: "Ławica"
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
