import React from "react";

export function CardCat(props) {
  const { cat, handle } = props;
  return (
    <div className="handler-card" onClick={() => handle()}>
      {/* <svg height="0px" width="0px">
          <defs>
            <clipPath id="svgPath">
              <path
                fill="#00B6B5"
                d="
                  M 150,0 
                  Q 200, 0 200, 50 
                  Q 200, 100 100, 150 
                  Q 0, 100 0, 50 
                  Q 0, 0 50, 0 Z
                  "
                style={{ filter: "drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.5))" }}
              />
            </clipPath>
          </defs>
        </svg> */}
      <img
        src={cat.getPicture()}
        className="img-thumbnail mx-auto"
        alt="..."
        width="200"
        height="auto"
      />
    </div>
  );
}

export function CardWinner({ cat, pos }) {
  return (
    <div className="card mt-1 px-3 py-4">
      <div className="author winner align-items-center">
        <span className={`rang-winner ${pos < 10 ? "m-rang-left" : ""}`}>
          {pos}
        </span>
        <img src={cat.getPicture()} alt="..." className="avatar shadow" />
        <div className="name ps-3">
          <span>Like {cat.getLikes()} people</span>
        </div>
      </div>
    </div>
  );
}
