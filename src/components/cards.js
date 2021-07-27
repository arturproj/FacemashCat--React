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

export function CardTOPWinner({ cat }) {
  return (
    <div className="card mt-1 px-3 py-4">
      <div className="author winner align-items-center">
        <img src={cat.getPicture()} alt="..." className="avatar shadow" />
        <div className="name ps-3">
          <span>Mathew Glock</span>
          <div className="stats">
            <small>Liked {cat.getLikes()}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardWinner({ cat }) {
  return (
    <div className="card mt-1 px-3 py-4">
      <div className="author align-items-center">
        <img src={cat.getPicture()} alt="..." className="avatar shadow" />
        <div className="name ps-3">
          <span>Mathew Glock</span>
          <div className="stats">
            <small>Liked {cat.getLikes()}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
