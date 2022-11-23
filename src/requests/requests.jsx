import axios from "axios";
import { key } from "../constants/constants";

export const searchCity = async (city) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
