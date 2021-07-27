import React, { useState } from "react";
import { handlerCat, resetAnyLikes, resetTotLikes } from "../helpers/cats.api";
import logo from "../img/logo sign and_4189876.jpg";
import { ColBoxImage } from "../components/cols_boxes";
import {
  BaseBTN,
  BaseEventBTN,
  BaseUrlBTN,
  BaseBodyBTN,
} from "../components/btn";

import { FaUndoAlt, FaHeart } from "../components/icons_awesome";

export default function HomeView(props) {
  const [contestantA, setA] = useState(null);
  const [contestantB, setB] = useState(null);
  const [currentID, setID] = useState(0);
  const [globalLike, setGLike] = useState(0);

  function overwriteCat(property = null) {
    setGLike(localStorage.getItem("totLikes"));
    let id = currentID;
    let newCat = handlerCat(props.cats, id);
    console.log(newCat, currentID);
    switch (property) {
      case "contestantA":
        if (contestantA && newCat && newCat.getId() !== contestantA.getId()) {
          setA(newCat);
          setID(id <= 99 ? id++ : 0);
        } else {
          overwriteCat(property);
        }
        break;
      case "contestantB":
        if (contestantB && newCat && newCat.getId() !== contestantB.getId()) {
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
    <div className="row h-100 mx-auto">
      <img
        src={logo}
        className="logo-my-caty img-thumbnail rounded-circle mx-auto w-auto"
        alt="..."
      />
      <ColBoxImage
        property="contestantA"
        cat={contestantA}
        handle={() => {
          contestantA.dispatch();
          overwriteCat("contestantB");
        }}
      />
      <ColBoxImage
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
          onDoubleClick={() =>
            props.cats
              ? (() => {
                  resetTotLikes();
                  setGLike(localStorage.getItem("totLikes"));
                })()
              : null
          }
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
          <FaHeart /> <span className="h4 text-bold">{globalLike || 0}</span>
        </a>
      </div>
    </div>
  );
}
