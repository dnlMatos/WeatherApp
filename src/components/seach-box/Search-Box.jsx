import React, { useEffect, useState } from "react";
import { searchCity } from "../../requests/requests";
import "./style.css";

export default function SearchBox() {
  const [city, setCity] = useState('');

  // useEffect(() => {
  //   updateInput();
  // }, [city]);

  const updateInput = async (city) => {
    const resp = await searchCity(city);
    setCity(resp);
  };

  const atualizaInput = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={city}
        onChange={atualizaInput}
        required
        className="search-bar"
        placeholder="Buscar..."
      />
    </div>
  );
}
