import React from "react";

/**
 *
 * @param {object} props
 * @returns {object} JSX
 */
export function CardCat(props) {
  const { cat, handle } = props;
  return (
    <div className="handler-card" onClick={() => handle()}>
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

/**
 *
 * @param {object} props
 * @returns {object} JSX
 */
export function CardWinner(props) {
  const { cat, pos } = props;
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
