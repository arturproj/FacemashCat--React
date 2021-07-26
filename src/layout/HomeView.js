import React, { useState } from "react";
import { MaskCats } from "../helpers/cats.api";

export function CardCat(props) {
  const { cat, handle, property } = props;
  console.log("CardCat", props);
  return (
    <div className="handler-card" onClick={() => handle()}>
      <svg height="0px" width="0px">
        <defs>
          <clipPath id="svgPath2">
            <path
              fill="#00B6B5"
              d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
            />
          </clipPath>
        </defs>
      </svg>
      <img src={cat.picture} width="100" height="100" />
    </div>
  );
}

export function Column(props) {
  return (
    <div className="col-12 col-md-6 col-handler">
      {props.cat ? <CardCat {...props} /> : null}
    </div>
  );
}
function handlerCat(cats) {
  return cats[Math.floor(Math.random() * cats.length)];
}

export default function HomeView(props) {
  const [concurrentA, setA] = useState(null);
  const [concurrentB, setB] = useState(null);

  function overwriteCat(property = null) {
    let newCat = handlerCat(props.cats);
    switch (property) {
      case "concurrentA":
        if (concurrentA && newCat.id !== concurrentA.id) {
          setA(newCat);
        } else {
          overwriteCat(property);
        }
        break;
      case "concurrentB":
        if (concurrentB && newCat.id !== concurrentB.id) {
          setB(newCat);
        } else {
          overwriteCat(property);
        }
        break;

      default:
        setA(newCat);
        setB(handlerCat(props.cats));
        break;
    }
  }

  if (props.cats.length && concurrentA === concurrentB) {
    console.log("update", props);
    overwriteCat();
  }

  return (
    <div className="row h-100 row-">
      <Column
        property="concurrentA"
        cat={concurrentA}
        handle={() => overwriteCat("concurrentB")}
      />
      <Column
        property="concurrentB"
        cat={concurrentB}
        handle={() => overwriteCat("concurrentA")}
      />
    </div>
  );
}
