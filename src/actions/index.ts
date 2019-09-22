export const GET_TEMPERATURE: string = "GET_TEMPERATURE";

export const getTemperature = (temperature: object) => {
  return {
    type: GET_TEMPERATURE,
    temperature: temperature
  };
};
