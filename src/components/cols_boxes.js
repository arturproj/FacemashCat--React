import React, { useState } from "react";
import { CardCat, CardWinner } from "./cards";

/**
 * Flip card 
 * @param {object} props
 * @returns {object} JSX
 */
export function ColBoxImage(props) {
  return (
    <div className="col-12 col-md-6  p-0 ">
      {props.cat ? <CardCat {...props} /> : null}
    </div>
  );
}

/**
 * Top of Top [1:5] of cats list compiler
 * @param {object} props
 * @returns {object} JSX
 */
export function ColBoxTop5(props) {
  console.log(props);
  return (
    <div className="col-12 col-md-6  p-0 col-score-top5">
      {props.top5
        ? props.top5.map((cat, i) => (
            <CardWinner cat={cat} key={i} pos={i + 1} />
          ))
        : null}
    </div>
  );
}

/**
 * Top [6:15] of cats list compiler
 * @param {object} props
 * @returns {object} JSX
 */
export function ColBoxLastTop10(props) {
  console.log(props);
  return (
    <div className="col-12 col-md-6 col-score-top10 my-auto ">
      {props.top10
        ? props.top10.map((cat, i) => (
            <CardWinner cat={cat} key={i} pos={i + 6} />
          ))
        : null}
    </div>
  );
}
