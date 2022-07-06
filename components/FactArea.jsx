import React from "react";

export default function FactArea() {
  return (
    <section className="repair-cta-area bg-0f054b ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="cta-repair-content">
              <h3>
                We now live in a remote-first world
              </h3>
              <p>
                Companies are in competition to garner the benefits of remote engineering talent. We are startup focused and make remote development easy, compliant, and secure
              </p>
              <button
                data-toggle="modal"
                data-target="#enquiryModal"
                className="btn btn-primary"
              >
                Talk to us
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cta-repair-img">
              <img src="assets/img/dots-map.svg" alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div className="circle-box">
        <img src="assets/img/circle.png" alt="image" />
      </div>
      <div className="cta-shape">
        <img src="assets/img/cta-shape.png" alt="image" />
      </div>
    </section>
  );
}
