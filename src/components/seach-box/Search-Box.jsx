import React, { useEffect, useState } from "react";
import { searchCity } from "../../requests/requests";
import Location from "../location/Location";
import WeatherBox from "../weather-box/WeatherBox";
import "./style.css";

export default function SearchBox() {
  const [city, setCity] = useState("");

  // useEffect(() => {
  //   updateInput();
  // }, [city]);

  const handleInput = async (city) => {
    const resp = await searchCity(city);
    setCity(resp);
  };

  return (
    <>
      {city === "" ? (
        <>
          <div className="search-box">
            <input
              type="text"
              // value={city.name}
              onChange={(e) => setCity(e.target.value)}
              required
              className="search-bar"
              placeholder="Buscar..."
            />
            <button className="btn-send" onClick={() => handleInput(city)}>Enviar</button>
          </div>
        </>
      ) : (
        <>
          <div className="search-box">
            <input
              type="text"
              // value={city.name}
              onChange={(e) => setCity(e.target.value)}
              required
              className="search-bar"
              placeholder="Buscar..."
            />
            <button className="btn-send" onClick={() => handleInput(city)}>Enviar</button>
          </div>
          <Location data={city} />
          <WeatherBox data={city} />
        </>
      )}
    </>
  );
}
