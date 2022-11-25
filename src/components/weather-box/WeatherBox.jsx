import React from "react";
import "./style.css";

export default function WeatherBox({ data }) {
  return (
    <div className="weather-box">
      <div className="temp">{data.main ? Math.trunc(data.main.temp) + 'º C' : ""}</div>
    </div>
  );
}
