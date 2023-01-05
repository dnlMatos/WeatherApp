import React from "react";
import "./style.css";

export default function WeatherBox({ data }) {
  return (
    <div className="weather-box">
      {data.main ? (
        <>
          <div className="temp">{Math.trunc(data.main.temp) + "º C"}</div>
          <div className="temp">{data.weather[0].main}</div>
        </>
      ) : (
        <div className="temp searching">Buscando...</div>
      )}
    </div>
  );
}
