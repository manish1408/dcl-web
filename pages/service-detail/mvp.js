import Head from "next/head";
import React from "react";
import PageTitle from "../../components/PageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Enquiry from "../../components/Enquiry";
import ArrowRight from "../../components/svg-comp/ArrowRight";
import FactArea from "../../components/FactArea";
import Svgtrust from "../../components/svg-comp/Svgtrust";
import Svgminimize from "../../components/svg-comp/Svgminimize";
import Svgdevelopment from "../../components/svg-comp/Svgdevelopment";
import Svgblueprint from "../../components/svg-comp/Svgblueprint";

function mvp() {
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
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-5">
                  <div className="hero-content">
                    <h1>
                      Get a true MVP that delivers big value in a small package
                    </h1>
                    <p>
                      Meet the MVP developers that bring you to market quickly
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
                <div className="col-lg-6 offset-lg-1 mvp-banner-image">
                  <img
                    className="mvp-banner-image"
                    src="assets/img/services-image/mvp.svg"
                  />
                </div>
              </div>
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

      {/* <section className="boxes-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-box">
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
                    className="feather feather-server"
                  >
                    <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
                    <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
                    <line x1={6} y1={6} x2={6} y2={6} />
                    <line x1={6} y1={18} x2={6} y2={18} />
                  </svg>
                </div>
                <h3>Zero Configuration</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-box bg-f78acb">
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
                    className="feather feather-code"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3>Code Security</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-box bg-c679e3">
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
                    className="feather feather-users"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Team Management</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-box bg-eb6b3d">
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
                    className="feather feather-git-branch"
                  >
                    <line x1={6} y1={3} x2={6} y2={15} />
                    <circle cx={18} cy={6} r={3} />
                    <circle cx={6} cy={18} r={3} />
                    <path d="M18 9a9 9 0 0 1-9 9" />
                  </svg>
                </div>
                <h3>Access Controlled</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pricing-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Your one-stop-shop for design and development</h2>
            <div className="bar" />
            <p>
              Distinct Cloud is a full-stack development company. Our team does
              it all - from design to development and testing.
            </p>
          </div>
          <div className="tab pricing-tab bg-color">
            <div className="tab_content">
              <div className="tabs_item">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <h2 style={{ marginBottom: "40px", color: "#de6742" }}>
                          Without Distinct Cloud
                        </h2>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <h6>
                            <ArrowRight />
                            Search for a technical co-founder
                          </h6>
                          <p>
                            No easy task that probably means giving away a chunk
                            of equity the size of California to someone you
                            barely know.{" "}
                          </p>
                        </li>

                        <li>
                          <h6>
                            <ArrowRight />
                            Hire in-house developers
                          </h6>
                          <p>
                            An expensive and risky commitment, not to mention
                            the mountains of extra paperwork and responsibility.
                          </p>
                        </li>
                        <li>
                          <h6>
                            <ArrowRight />
                            Find a team of freelancers
                          </h6>
                          <p>
                            Hunting in the Wild West of freelancer websites,
                            looking for a diamond in the rough, on your dime of
                            course.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <h2 style={{ marginBottom: "40px", color: "#4267d1" }}>
                          With Distinct Cloud
                        </h2>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <h6>
                            <ArrowRight />
                            We clear your pathway to success
                          </h6>
                          <p>
                            No more searching for developers. No more stress and
                            uncertainty. Just a clear pathway to success.
                          </p>
                        </li>
                        <li>
                          <h6>
                            <ArrowRight />
                            We vet our developers for you
                          </h6>
                          <p>
                            We find top resources and test them on internal work
                            first. Our developers work under our product
                            managers.
                          </p>
                        </li>
                        <li>
                          <h6>
                            <ArrowRight />
                            We provide a ready-to-perform team
                          </h6>
                          <p>
                            You’re hiring an experienced team of top-tier
                            programmers; a team we’ve taken great pains to
                            build.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape2 rotateme">
          <img src="assets/img/shape2.svg" alt="shape" />
        </div>
        <div className="shape3">
          <img src="assets/img/shape3.svg" alt="shape" />
        </div>
        <div className="shape4">
          <img src="assets/img/shape4.svg" alt="shape" />
        </div>
        <div className="shape6 rotateme">
          <img src="assets/img/shape4.svg" alt="shape" />
        </div>
        <div className="shape7">
          <img src="assets/img/shape4.svg" alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src="assets/img/shape2.svg" alt="shape" />
        </div>
      </section>

      <section className="repair-why-choose-us ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>We build your MVP on a rock-solid foundation</h2>
            <div className="bar" />
          </div>
          <div className="row feature-row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-repair-box">
                <div className="icon icon-sm">
                  <Svgminimize />
                </div>
                <h3>MINIMIZE YOUR MVP</h3>
                <p>
                  At the start of our virtual or onsite Design Sprint workship,
                  we will get a full picture of the problem that you are setting
                  out to solve and determine whether any proposed functionality
                  can go.
                </p>

                <div className="back-icon back-icon-sm ">
                  <Svgminimize />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-repair-box">
                <div className="icon icon-sm">
                  <Svgblueprint />
                </div>
                <h3>CREATE A REALISTIC PROTOTYPE</h3>
                <p>
                  We never start with coding. Instead, we build a
                  semi-functional prototype that you can click and play around
                  with. This lets you get feedback on your product and make
                  changes before we build.
                </p>

                <div className="back-icon back-icon-sm">
                  <Svgblueprint />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-repair-box">
                <div className="icon icon-sm">
                  <Svgdevelopment />
                </div>
                <h3>BUILD YOUR MVP</h3>
                <p>
                  We build your product with the best-fit technologies and
                  frameworks, working on top of out-of-the box functionality
                  where applicable and ensuring that the code is easy to test
                  and maintain.
                </p>

                <div className="back-icon back-icon-sm ">
                  <Svgdevelopment />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-repair-box">
                <div className="icon icon-sm">
                  <Svgtrust />
                </div>
                <h3>MAINTAIN QUALITY</h3>
                <p>
                  After the first iteration launch of your MVP, we run DevOps
                  for continuous deployment, maintain quality of existing
                  functionality, and build out any additional features, all with
                  a product manager at your fingertips.
                </p>

                <div className="back-icon back-icon-sm ">
                  <Svgtrust />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="works-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2 style={{ textAlign: "left" }}>
                  You’re ready to build a new product, but you don’t want to
                  take a wrong turn
                </h2>
                <div className="bar" />

                <p className="m-0" style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "18px", color: "#000" }}>
                    MAKING A TOO-BIG PRODUCT IS THE BIGGEST MISTAKE
                  </span>{" "}
                  <br />
                  Everybody knows theoretically what an MVP is. But the majority
                  of entrepreneurs launch their SaaS businesses with a product
                  that is unnecessarily large, putting them at an immediate
                  strategic disadvantage.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row align-items-center justify-content-center ">
                <img
                  src="assets/img/services-image/vision.svg"
                  className="wow fadeInUp"
                  alt="image"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInUp",
                    width: "350px",
                  }}
                />
                {/* */}
                {/* */}
              </div>
            </div>
          </div>

          <div className="row align-items-center pt-5 mt-5">
            <div className="col-lg-6 col-md-12">
              <div className="row align-items-center justify-content-center ">
                <img
                  src="assets/img/services-image/developer.svg"
                  className="wow fadeInUp"
                  alt="image"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInUp",
                    width: "350px",
                  }}
                />
                {/* */}
                {/* */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2 style={{ textAlign: "left" }}>
                  Meet the development team that will help you launch your
                  product in as little as 3 months
                </h2>
                <div className="bar" />

                <p className="m-0" style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "18px", color: "#000" }}>
                    AFTER COLLABORATING ON YOUR PROTOTYPE, WE’LL ESTIMATE YOUR
                    MVP PROJECT
                  </span>{" "}
                  <br />
                  We start with business strategy. Then we move on to
                  prototyping. Once your concept is validated, then and only
                  then, do we move onto MVP software development.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape8 rotateme">
          <img src="assets/img/shape2.svg" alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src="assets/img/shape2.svg" alt="shape" />
        </div>
        <div className="shape7">
          <img src="assets/img/shape4.svg" alt="shape" />
        </div>
        <div className="shape4">
          <img src="assets/img/shape4.svg" alt="shape" />
        </div>
      </section>

      <section className="why-choose-us ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Why Choose Us</h2>
                <div className="bar" />
                <p>
                  Distinct Cloud is a full-service team for your technology
                  needs. We have a dedicated business and technical team that
                  provides continuous support to help you scale your team.
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
                    <h3>The best engineers</h3>
                    <p>
                      The most spectacular developers, testers and QA engineers
                      are waiting for you.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <i className="flaticon-rocket" />
                    </div>
                    <h3>Fast team building</h3>
                    <p>
                      We'll build you a high-performing dev team within 4 weeks.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <i className="flaticon-shield" />
                    </div>
                    <h3>Best cost-quality ratio</h3>
                    <p>
                      The best price-cost ratio around for custom software
                      development.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <i className="flaticon-diamond" />
                    </div>
                    <h3>Quality guarantees</h3>
                    <p>
                      Full-Time Developers, Agile Development, and Unlimited
                      Access to Your Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FactArea />
      <Footer />
    </div>
  );
}

export default mvp;
