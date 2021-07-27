import React, { useState } from "react";
import { handlerCat, resetAnyLikes, resetTotLikes } from "../helpers/cats.api";
import logo from "../img/logo sign and_4189876.jpg";
import { ColBoxes } from "../components/FaceMash";
import { FaUndoAlt, FaStar } from "../components/ButtonAweson";

export default function HomeView(props) {
  const [contestantA, setA] = useState(null);
  const [contestantB, setB] = useState(null);
  const [currentID, setID] = useState(0);

  function overwriteCat(property = null) {
    let id = currentID;
    let newCat = handlerCat(props.cats, id);
    console.log(newCat, currentID);
    switch (property) {
      case "contestantA":
        if (
          contestantA &&
          // newCat.getId &&
          newCat.getId() !== contestantA.getId()
        ) {
          setA(newCat);
          setID(id <= 99 ? id++ : 0);
        } else {
          overwriteCat(property);
        }
        break;
      case "contestantB":
        if (
          contestantB &&
          // newCat.getId &&
          newCat.getId() !== contestantB.getId()
        ) {
          setB(newCat);
          setID(id <= 99 ? id++ : 0);
        } else {
          overwriteCat(property);
        }
        break;

      default:
        setA(props.cats[id]);
        setB(props.cats[id + 1]);
        setID(id <= 99 ? id + 2 : 0);
        break;
    }
  }

  if (props.cats.length && contestantA === contestantB) {
    console.log("update", props);
    overwriteCat();
  }

  return (
    <React.Fragment>
      <div className="row h-100 mx-auto">
        <img
          src={logo}
          className="logo-my-caty img-thumbnail rounded-circle mx-auto"
          alt="..."
        />
        <ColBoxes
          property="contestantA"
          cat={contestantA}
          handle={() => {
            contestantA.dispatch();
            overwriteCat("contestantB");
          }}
        />
        <ColBoxes
          property="contestantB"
          cat={contestantB}
          handle={() => {
            contestantB.dispatch();
            overwriteCat("contestantA");
          }}
        />
        <div className="awesom-home awesom-left  w-50 d-flex justify-content-start m-6">
          <div
            className="btn btn-outline-dark btn-tooltip"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Click for Reset Cats Likes or Double Click for Reset Global Likes"
            data-container="body"
            data-animation="true"
            onClick={() => (props.cats ? resetAnyLikes(props.cats) : null)}
          >
            <FaUndoAlt />
          </div>
        </div>
        <div className="awesom-home awesom-right w-50 d-flex justify-content-end m-6">
          <a
            href="/score"
            className="btn btn-outline-dark"
            className="btn btn-outline-dark btn-tooltip"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Scores"
            data-container="body"
            data-animation="true"
          >
            <span className="h4 text-bold">Global </span>
            <FaStar />{" "}
            <span className="h4 text-bold">
              {localStorage.getItem("totLikes") || 0}
            </span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
