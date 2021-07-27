import React, { useState } from "react";

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

export function ColBoxImage(props) {
  return (
    <div className="col-12 col-md-6  p-0 col-handler">
      {props.cat ? <CardCat {...props} /> : null}
    </div>
  );
}

export function ColBoxTop5(props) {
  console.log(props);
  return (
    <div className="col-12 col-md-6  p-0 col-handler">
      {props.top5
        ? props.top5.map((cat, i) => (
            <div className="card m-4" key={i}>
              <div className="author winner align-items-center">
                <img
                  src={cat.getPicture()}
                  alt="..."
                  className="avatar shadow"
                />
                <div className="name ps-3">
                  <span>Mathew Glock</span>
                  <div className="stats">
                    <small>Liked {cat.getLikes()}</small>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export function ColBoxLastTop10(props) {
  return (
    <div className="col-12 col-md-6  p-0 col-handler">
      {props.cat ? <CardCat {...props} /> : null}
    </div>
  );
}
