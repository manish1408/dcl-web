import React from "react";
import { useState } from "react";
import Enquiry from "./Enquiry";

export default function Banner() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <section className="bigdata-analytics-banner">
        <div className="container">
          <div className="bigdata-analytics-content">
            <h1>
              Stop searching. <br /> Start building.
            </h1>
            <p>
              Skip the recruitment process and the onboarding hassle. Our highly
              experienced software engineers can start right away.
            </p>

            <button onClick={() => setModal(true)} className="btn btn-primary">
              Talk to us
            </button>
          </div>
        </div>

        <div className="banner-boxes-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-banner-boxes">
                  <div className="icon">
                    <i className="flaticon-support" />
                  </div>
                  <h3>Hire the exact skill you need</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-banner-boxes">
                  <div className="icon">
                    <i className="flaticon-software" />
                  </div>
                  <h3>Easy, compliant, and secure hiring</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="single-banner-boxes">
                  <div className="icon">
                    <i className="flaticon-star" />
                  </div>
                  <h3>40+ untapped Silicon Valley caliber engineers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Enquiry modal={modal} setModal={setModal} />
      {/* {modal ?  : <Enquiry open={false} />} */}
    </>
  );
}
