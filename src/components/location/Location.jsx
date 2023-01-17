import React from "react";
import "./style.css";
import moment from "moment";
import "moment/locale/pt-br";

export default function Location({ data }) {

  return (
    <div className="location-box">
      <div className="location">
        {data != null ? (
          <>{data.name ? data.name + ", " + data.sys?.country : "Buscando..."}</>
        ) : (
          "Cidade não encontrada"
        )}
      </div>
      <div className="date">
        {moment(new Date()).locale("pt-br").format("LLLL")}
      </div>
    </div>
  );
}
