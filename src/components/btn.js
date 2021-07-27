import React from "react";

export function BaseBTN() {
  return (
    <div className="awesom-home awesom-right w-50 d-flex justify-content-end m-6" />
  );
}

export function BaseUrlBTN(props) {
  return (
    <a
      href={props.url || "#"}
      className="btn btn-outline-dark"
      className="btn btn-outline-dark btn-tooltip"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Scores"
      data-container="body"
      data-animation="true"
    />
  );
}

export function BaseEventBTN(props) {
  return (
    <div
      className="btn btn-outline-dark"
      className="btn btn-outline-dark btn-tooltip"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Scores"
      data-container="body"
      data-animation="true"
      onClick={() => (props.handleClick ? props.handleClick() : null)}
      onDoubleClick={() =>
        props.handleDoubleClick ? props.handleDoubleClick() : null
      }
    />
  );
}

export function BaseBodyBTN() {
  return <span className="h4 text-bold" />;
}

export default function Button(props) {
  <BaseBTN>
    <BaseEventBTN>
      <BaseBodyBTN>button</BaseBodyBTN>
    </BaseEventBTN>
  </BaseBTN>;
}
