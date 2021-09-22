import React from "react";

export default function FactArea() {
  return (
    //         <section className="industries-serve-area ptb-80">
    //   <div className="container">
    //     <div className="section-title">
    //       <h2> We follow CISQ standards to build reliable, maintainable, secure, and efficient software.</h2>
    //       <div className="bar" />
    //     </div>
    //     {/* <div className="row">
    //       <div className="col-lg-3 col-md-3 col-6 col-sm-6">
    //         <div className="single-funfact">
    //           <h3><span className="odometer" data-count={180}>00</span>K</h3>
    //           <p>Downloaded</p>
    //         </div>
    //       </div>
    //       <div className="col-lg-3 col-md-3 col-6 col-sm-6">
    //         <div className="single-funfact">
    //           <h3><span className="odometer" data-count={20}>00</span>K</h3>
    //           <p>Feedback</p>
    //         </div>
    //       </div>
    //       <div className="col-lg-3 col-md-3 col-6 col-sm-6">
    //         <div className="single-funfact">
    //           <h3><span className="odometer" data-count={500}>00</span>+</h3>
    //           <p>Workers</p>
    //         </div>
    //       </div>
    //       <div className="col-lg-3 col-md-3 col-6 col-sm-6">
    //         <div className="single-funfact">
    //           <h3><span className="odometer" data-count={70}>00</span>+</h3>
    //           <p>Contributors</p>
    //         </div>
    //       </div>
    //     </div> */}
    //     <div className="contact-cta-box">
    //       <h3>If you want to discuss a technology partnership, contact us.</h3>
    //       <button data-toggle="modal" data-target="#enquiryModal" className="btn btn-primary">Drop us a message</button>
    //     </div>
    //   </div>
    // </section>

    <section className="repair-cta-area bg-0f054b">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="cta-repair-content">
              <h3>
                We follow CISQ standards to build reliable, maintainable,
                secure, and efficient software.
              </h3>
              <p>
                If you want to discuss a technology partnership, contact us.
              </p>
              <button
                data-toggle="modal"
                data-target="#enquiryModal"
                className="btn btn-primary"
              >
                Free Consultation
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cta-repair-img">
              <img src="assets/img/man-and-women.png" alt="image" />
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
