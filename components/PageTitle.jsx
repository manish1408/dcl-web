import React from "react";

export default function PageTitle({ title }) {
  return (
    <div className="page-title-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
      <div className="shape1">
        <img src="/assets/img/shape1.png" alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src="/assets/img/shape2.svg" alt="shape" />
      </div>
      <div className="shape3">
        <img src="/assets/img/shape3.svg" alt="shape" />
      </div>
      <div className="shape4">
        <img src="/assets/img/shape4.svg" alt="shape" />
      </div>
      <div className="shape5">
        <img src="/assets/img/shape5.png" alt="shape" />
      </div>
      <div className="shape6 rotateme">
        <img src="/assets/img/shape4.svg" alt="shape" />
      </div>
      <div className="shape7">
        <img src="/assets/img/shape4.svg" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/assets/img/shape2.svg" alt="shape" />
      </div>
    </div>
  );
}
