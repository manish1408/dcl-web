import Head from "next/head";
import React from "react";
import PageTitle from "../../components/PageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Enquiry from "../../components/Enquiry";
import FactArea from "../../components/FactArea";

function testing() {
  return (
    <div>
      <Head>
        <title>Distinct Cloud Labs - Cloud Product Development services</title>
        <meta
          name="title"
          content="Distinct Cloud Labs - Cloud Product Development services"
        />
        <meta
          name="description"
          content="Distinct cloud offers a suite of software products and services in web, mobile, analytics, complex algos and AI"
        />
        <meta
          name="keywords"
          content="software development, platform development, ios development, android development, web development, ai development, machine learning platform, fundraising, market research, architecture"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
      </Head>
      <Header />
      <Enquiry> </Enquiry>
      <PageTitle title="Software testing services " />;
      <section className="why-choose-us ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Discover better software solutions through testing.</h2>
                <div className="bar" />
                <p>
                  In the world of software, there's always a chance for bugs to
                  creep in. They could be small or big, obvious or hidden, but
                  they are never good. We can help you find these bugs before
                  users do and make sure that your project is as robust as it
                  can be.
                </p>
                <p>
                  Distinct Cloud helps you to eliminate software bugs and errors
                  at the development stage itself, before they become a part of
                  your production application.
                </p>
              </div>
              <button
                data-toggle="modal"
                data-target="#enquiryModal"
                className="btn btn-primary"
              >
                Talk to us
              </button>

              {/*  */}
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <img
                  src="assets/img/services-image/testing.png"
                  className="wow fadeInUp"
                  alt="image"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                />
                {/* */}
                {/* */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-area-two ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Types of software testing at DistinctCloud</h2>
            <div className="bar" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-settings"
                  >
                    <circle cx={12} cy={12} r={3} />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <h3>Functional testing</h3>
                <p style={{ paddingBottom: "27px" }}>
                  Functional testing lets you breathe a sigh of relief since
                  your application’s individual features are all working as
                  expected.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail"
                  >
                    <path d="M0,6.51045l5.47909,5.48955l10.5209,-10.5105l-1.51045,-1.48955l-9.01045,9l-3.98955,-3.98955Z" />
                  </svg>
                </div>
                <h3>Usability testing</h3>
                <p>
                  Usability testing ensures your features are easy to understand
                  and creates a positive user experience while the user
                  interacts with your application.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
                <h3>Compatibility testing</h3>
                <p>
                  Compatibility testing provides you with an application that
                  operates properly in different environments and is easy to use
                  by clients.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-grid"
                  >
                    <rect x={3} y={3} width={7} height={7} />
                    <rect x={14} y={3} width={7} height={7} />
                    <rect x={14} y={14} width={7} height={7} />
                    <rect x={3} y={14} width={7} height={7} />
                  </svg>
                </div>
                <h3>Localization testing</h3>
                <p>
                  Localization testing helps you confirm that the interface
                  works for users in their language and location, and the
                  product content is displayed appropriately.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-info"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={12} y1={16} x2={12} y2={12} />
                    <line x1={12} y1={8} x2={12} y2={8} />
                  </svg>
                </div>
                <h3>Performance testing</h3>
                <p>
                  Performance testing ensures your application performance is at
                  a high level and guarantees your product can handle high
                  volumes of user data.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-hard-drive"
                  >
                    <line x1={22} y1={12} x2={2} y2={12} />
                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                    <line x1={6} y1={16} x2={6} y2={16} />
                    <line x1={10} y1={16} x2={10} y2={16} />
                  </svg>
                </div>
                <h3>Security testing</h3>
                <p>
                  Security testing helps you avoid recovery expenses by
                  detecting all security flaws and vulnerabilities, and
                  protecting your information from criminal attacks.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mouse-pointer"
                  >
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    <path d="M13 13l6 6" />
                  </svg>
                </div>
                <h3>Smoke testing</h3>
                <p>
                  Smoke testing allows you to receive and assess the viability
                  of your main features and then ensure you can go on with other
                  tests.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
                <h3>Regression testing</h3>
                <p>
                  Regression testing is helpful for ensuring that new technology
                  will not interfere with previous technological advancements,
                  or keep them from operating efficiently.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-send"
                  >
                    <line x1={22} y1={2} x2={11} y2={13} />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
                <h3>Acceptance testing</h3>
                <p>
                  Acceptance testing helps you evaluate the results of your work
                  and ensure that everything is acceptable to use before
                  shipping it out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="newsletter-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="newsletter-image">
                <img src="assets/img/testing.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="newsletter-content">
                <h2 style={{ marginBottom: "32px" }}>
                  Experienced and Credible Software Testing & Consulting Partner
                </h2>
                {/* <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your business email here"
                  />
                  <button type="submit">Sign Up Free</button>
                </form> */}

                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>{" "}
                  A better experience for your clients and a safer environment
                  for your business
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>{" "}
                  Dedicated testing experts will provide you with a tailored
                  testing strategy to ensure your success.
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>{" "}
                  The most effective and efficient testing with leading edge
                  technology and methodology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-details-area ptb-80">
        <div className="container">
          <section className="why-choose-us ptb-80 pt-0">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="section-title">
                    <h2>Why Choose Us</h2>
                    <div className="bar" />
                    <p>
                      Implement a solution that will help handle testing on a
                      large scale. Testing allows one to focus on the areas of
                      an application that need more attention as code is being
                      written.
                    </p>
                  </div>
                  <div className="why-choose-us-image">
                    <img
                      src="assets/img/why-choose-us-image/man-stand.png"
                      className="wow fadeInLeft"
                      alt="image"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInLeft",
                      }}
                    />
                    <img
                      src="assets/img/why-choose-us-image/database.png"
                      className="wow fadeInRight"
                      alt="image"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInRight",
                      }}
                    />
                    <img
                      src="assets/img/services-left-image/cercle-shape.png"
                      className="rotateme"
                      alt="image"
                    />
                    <img
                      src="assets/img/why-choose-us-image/main-static.png"
                      className="main-pic wow fadeInUp animated"
                      alt="image"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="single-why-choose-us">
                        <div className="icon">
                          <i className="flaticon-team" />
                        </div>
                        <h3>Unparalleled product quality</h3>
                        <p>
                          Eliminate many common mistakes including wrong data
                          being saved, lengthy amounts of rework, and software
                          deliveries being delayed.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="single-why-choose-us">
                        <div className="icon">
                          <i className="flaticon-rocket" />
                        </div>
                        <h3>Significantly decrease time to market</h3>
                        <p>
                          Decrease the number of bugs and increase the amount of
                          time to produce features by implementing a testing
                          script framework.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="single-why-choose-us">
                        <div className="icon">
                          <i className="flaticon-shield" />
                        </div>
                        <h3>
                          Increase Quality, Save Money by Improving Testing.
                        </h3>
                        <p>
                          Applying automated tests as you build, you can greatly
                          decrease regression testing time and costs.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="single-why-choose-us">
                        <div className="icon">
                          <i className="flaticon-diamond" />
                        </div>
                        <h3>Higher coverage with no extra effort.</h3>
                        <p>
                          A test automation tool increases the depth of your
                          testing measures. This generates wider coverage in
                          memory, data, and program statistics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="offshore"></div>
      </section>
      <div className="separate" />
      <FactArea />
      <Footer />
    </div>
  );
}

export default testing;
