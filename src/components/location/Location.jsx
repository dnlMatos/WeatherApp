import React from "react";
import "./style.css";
import moment from "moment";
import "moment/locale/pt-br";

export default function Location() {
  //   const dayName = new Array(
  //     "Domingo",
  //     "Segunda",
  //     "Terça",
  //     "Quarta",
  //     "Quinta",
  //     "Sexta",
  //     "Sábado",
  //   );
  //   const monName = new Array(
  //     "Janeiro",
  //     "Fevereiro",
  //     "Março",
  //     "Abril",
  //     "Maio",
  //     "Junho",
  //     "Julho",
  //     "Agosto",
  //     "Setembro",
  //     "Outubro",
  //     "Novembro",
  //     "Dezembro",
  //   );
  //   const now = new Date();

  return (
    <div className="location-box">
      <div className="location">Brasília, BR</div>
      <div className="date">
        {moment(new Date()).locale("pt-br").format("LLLL")}
      </div>
      {/*<div className="date">
        {dayName[now.getDay()] +
          ", " +
          now.getDate() +
          " de " +
          monName[now.getMonth()] +
          " de " +
          now.getFullYear()}
      </div> */}
    </div>
  );
}
