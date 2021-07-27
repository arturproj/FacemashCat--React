import React, { useState } from "react";
import { CardCat, CardTOPWinner, CardWinner } from "./cards";

export function ColBoxImage(props) {
  return (
    <div className="col-12 col-md-6  p-0 ">
      {props.cat ? <CardCat {...props} /> : null}
    </div>
  );
}

export function ColBoxTop5(props) {
  console.log(props);
  return (
    <div className="col-12 col-md-6  p-0 col-score-top5">
      {props.top5
        ? props.top5.map((cat, i) => <CardWinner cat={cat} key={i}  pos={i+1} />)
        : null}
    </div>
  );
}

export function ColBoxLastTop10(props) {
  console.log(props);
  return (
    <div className="col-12 col-md-6 col-score-top10 my-auto ">
      {props.top10
        ? props.top10.map((cat, i) => <CardWinner cat={cat} key={i} pos={i+6} />)
        : null}
    </div>
  );
}
