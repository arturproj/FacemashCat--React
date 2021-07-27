import React from "react";
import { ColBoxTop5, ColBoxLastTop10 } from "../components/cols_boxes";
import logo from "../img/logo sign and_4189876.jpg";
import "../css/score.css";

export default function ScoreView(props) {
  props.cats.sort(
    (a, b) => parseFloat(b.getLikes()) - parseFloat(a.getLikes())
  );

  const { cats } = props;

  return (
    <div className="row h-100 mx-auto">
      <img
        src={logo}
        className="logo-my-caty img-thumbnail rounded-circle mx-auto w-auto"
        alt="..."
      />

      <ColBoxTop5 top5={cats.length ? cats.slice(0, 5) : []} />
      <ColBoxLastTop10 top10={cats.length ? cats.slice(5, 15) : []} />

      <div className="awesom-home awesom-right w-50 d-flex justify-content-end m-6">
        <a
          href="/FacemashCat--React/"
          className="btn btn-outline-dark"
          className="btn btn-outline-dark btn-tooltip"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Scores"
          data-container="body"
          data-animation="true"
        >
          <span className="h4 text-bold">GO to BACK</span>
        </a>
      </div>
    </div>
  );
}
