import Head from "next/head";
import React from "react";
import PageTitle from "../../components/PageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Enquiry from "../../components/Enquiry";
import * as svg from "../../components/svg-comp";
import FactArea from "../../components/FactArea";
import DiscoverArea from "../../components/DiscoverArea";

function startup() {
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
      <PageTitle title="Services for Startup " />;
      <section className="why-choose-us ptb-80 pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Software Development For Startups</h2>
                <div className="bar" />
                <p>
                  Distinct Cloud is a bespoke software team that enables
                  organizations to achieve their business goals in the most
                  efficient way. With our vast experience in software, we can
                  assist you with all your needs - whether it's developing an
                  app, building an IoT system or creating a digital strategy for
                  your company.
                </p>
                <p>
                  We provide a hassle-free Product Development Service . Don't
                  worry about the costs, the timeline or anything else. We will
                  take care of everything from ideation to execution.
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
                  src="assets/img/services-image/startup-launch.png"
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
      {/* <section className="services-details-area ptb-80">
        <div className="container">
          <section className="why-choose-us ptb-80 pt-0">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="section-title">
                    <h2>Why Choose Us</h2>
                    <div className="bar" />
                    <p>
                      Distinct Cloud is a full-service team for your technology
                      needs. We have a dedicated business and technical team
                      that provides continuous support to help you scale your
                      team.
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
                          The most spectacular developers, testers and QA
                          engineers are waiting for you.
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
                          We'll build you a high-performing dev team within 4
                          weeks.
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
        </div>
        <div id="offshore"></div>
      </section> */}
      <section className="works-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Time for a New Approach to Startups</h2>
            <div className="bar" />
          </div>
          <div className="container">
            <div
              style={{ textAlign: "center" }}
              className="row align-items-center"
            >
              <div
                style={{ marginBottom: "40px" }}
                className="col-lg-12 col-md-12"
              >
                <p>
                  we're an independent software development shop with vast
                  experience producing quality work for some of today's biggest
                  names in web and mobile technology. We’ve got same-day support
                  available so that if you run into trouble, one of our account
                  representatives will be able to jump onto the case
                  immediately. Using innovative technologies, we can provide
                  your business with an original custom solution to meet your
                  exact needs.
                </p>
              </div>

              <div
                style={{ textAlign: "left" }}
                className="col-lg-12 col-md-12 services-content"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path
                          fill="#44ce6f"
                          d="M44.975,23.436a2,2,0,0,1,.075,2.827L31.95,40.08a5.012,5.012,0,0,1-3.629,1.56l-.12,0A5.01,5.01,0,0,1,24.532,39.9l-5.646-6.557a2,2,0,1,1,3.031-2.611l5.646,6.559a.993.993,0,0,0,.734.347.936.936,0,0,0,.75-.311l13.1-13.817A2,2,0,0,1,44.975,23.436ZM58,32A26,26,0,1,1,32,6,26.03,26.03,0,0,1,58,32Zm-4,0A22.034,22.034,0,0,0,40.454,11.691,21.8,21.8,0,0,0,35,11a22,22,0,0,0-8.391,42.329A22,22,0,0,0,54,32Z"
                        />
                      </svg>
                      Streamline Your Product Development.
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path
                          fill="#44ce6f"
                          d="M44.975,23.436a2,2,0,0,1,.075,2.827L31.95,40.08a5.012,5.012,0,0,1-3.629,1.56l-.12,0A5.01,5.01,0,0,1,24.532,39.9l-5.646-6.557a2,2,0,1,1,3.031-2.611l5.646,6.559a.993.993,0,0,0,.734.347.936.936,0,0,0,.75-.311l13.1-13.817A2,2,0,0,1,44.975,23.436ZM58,32A26,26,0,1,1,32,6,26.03,26.03,0,0,1,58,32Zm-4,0A22.034,22.034,0,0,0,40.454,11.691,21.8,21.8,0,0,0,35,11a22,22,0,0,0-8.391,42.329A22,22,0,0,0,54,32Z"
                        />
                      </svg>{" "}
                      Save money without compromising on quality
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path
                          fill="#44ce6f"
                          d="M44.975,23.436a2,2,0,0,1,.075,2.827L31.95,40.08a5.012,5.012,0,0,1-3.629,1.56l-.12,0A5.01,5.01,0,0,1,24.532,39.9l-5.646-6.557a2,2,0,1,1,3.031-2.611l5.646,6.559a.993.993,0,0,0,.734.347.936.936,0,0,0,.75-.311l13.1-13.817A2,2,0,0,1,44.975,23.436ZM58,32A26,26,0,1,1,32,6,26.03,26.03,0,0,1,58,32Zm-4,0A22.034,22.034,0,0,0,40.454,11.691,21.8,21.8,0,0,0,35,11a22,22,0,0,0-8.391,42.329A22,22,0,0,0,54,32Z"
                        />
                      </svg>{" "}
                      Get Good-Quality Software Engineers at No Cost.
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path
                          fill="#44ce6f"
                          d="M44.975,23.436a2,2,0,0,1,.075,2.827L31.95,40.08a5.012,5.012,0,0,1-3.629,1.56l-.12,0A5.01,5.01,0,0,1,24.532,39.9l-5.646-6.557a2,2,0,1,1,3.031-2.611l5.646,6.559a.993.993,0,0,0,.734.347.936.936,0,0,0,.75-.311l13.1-13.817A2,2,0,0,1,44.975,23.436ZM58,32A26,26,0,1,1,32,6,26.03,26.03,0,0,1,58,32Zm-4,0A22.034,22.034,0,0,0,40.454,11.691,21.8,21.8,0,0,0,35,11a22,22,0,0,0-8.391,42.329A22,22,0,0,0,54,32Z"
                        />
                      </svg>{" "}
                      Unlock the True Potential of Your Product
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path
                          fill="#44ce6f"
                          d="M44.975,23.436a2,2,0,0,1,.075,2.827L31.95,40.08a5.012,5.012,0,0,1-3.629,1.56l-.12,0A5.01,5.01,0,0,1,24.532,39.9l-5.646-6.557a2,2,0,1,1,3.031-2.611l5.646,6.559a.993.993,0,0,0,.734.347.936.936,0,0,0,.75-.311l13.1-13.817A2,2,0,0,1,44.975,23.436ZM58,32A26,26,0,1,1,32,6,26.03,26.03,0,0,1,58,32Zm-4,0A22.034,22.034,0,0,0,40.454,11.691,21.8,21.8,0,0,0,35,11a22,22,0,0,0-8.391,42.329A22,22,0,0,0,54,32Z"
                        />
                      </svg>{" "}
                      Develop software smarter, faster, better.
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path
                          fill="#44ce6f"
                          d="M44.975,23.436a2,2,0,0,1,.075,2.827L31.95,40.08a5.012,5.012,0,0,1-3.629,1.56l-.12,0A5.01,5.01,0,0,1,24.532,39.9l-5.646-6.557a2,2,0,1,1,3.031-2.611l5.646,6.559a.993.993,0,0,0,.734.347.936.936,0,0,0,.75-.311l13.1-13.817A2,2,0,0,1,44.975,23.436ZM58,32A26,26,0,1,1,32,6,26.03,26.03,0,0,1,58,32Zm-4,0A22.034,22.034,0,0,0,40.454,11.691,21.8,21.8,0,0,0,35,11a22,22,0,0,0-8.391,42.329A22,22,0,0,0,54,32Z"
                        />
                      </svg>{" "}
                      Scale Your app the way you want
                    </div>
                  </div>
                  {/* <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box">
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
                        className="feather feather-shopping-cart"
                      >
                        <circle cx={9} cy={21} r={1} />
                        <circle cx={20} cy={21} r={1} />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>{" "}
                      E-commerce development
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box">
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
                        className="feather feather-check-circle"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>{" "}
                      Print ready design
                    </div>
                  </div> */}
                </div>
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
      <DiscoverArea
        question="What Makes Distinct Cloud Stand Out as a TOP startup software development company?"
        answer="Fast team-building at a speed of your choosing, depending on the immediate needs of your business. From 2 weeks to a couple months, we'll assess what you need and be ready to work on making sure those needs are met as quickly as possible."
      />
      <div className="separate" />
      <section className="iot-services-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our Featured Services that We Provide</h2>
            <div className="bar" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-iot-services">
                <div className="icon">
                  <svg.AiBrain />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path
                      fill="#00bebd"
                      d="M30,0V64a7,7,0,0,1-7-7.54,9,9,0,0,1-12.34-12.7,11,11,0,0,1,.24-21.56A10,10,0,0,1,20,8c2.21,0,2,.46,2,0A8,8,0,0,1,30,0Z"
                    />
                    <path
                      fill="#d9d9d9"
                      d="M36 0a3 3 0 0 0-1 5.82V10a1 1 0 0 0 2 0V5.82A3 3 0 0 0 36 0zm0 4a1 1 0 0 1 0-2A1 1 0 0 1 36 4zM46 0a3 3 0 0 0-1 5.82V10a1 1 0 0 0 2 0V5.82A3 3 0 0 0 46 0zm0 4a1 1 0 0 1 0-2A1 1 0 0 1 46 4zM37 58.18V54a1 1 0 0 0-2 0v4.18a3 3 0 1 0 2 0zM36 62a1 1 0 0 1 0-2A1 1 0 0 1 36 62zM47 58.18V54a1 1 0 0 0-2 0v4.18a3 3 0 1 0 2 0zM46 62a1 1 0 0 1 0-2A1 1 0 0 1 46 62zM52 18h4.18a3 3 0 1 0 0-2H52A1 1 0 0 0 52 18zm7-2a1 1 0 0 1 0 2A1 1 0 0 1 59 16zM56.18 26H52a1 1 0 0 0 0 2h4.18a3 3 0 1 0 0-2zM59 28a1 1 0 0 1 0-2A1 1 0 0 1 59 28zM56.18 36H52a1 1 0 0 0 0 2h4.18a3 3 0 1 0 0-2zM59 38a1 1 0 0 1 0-2A1 1 0 0 1 59 38zM56.18 46H52a1 1 0 0 0 0 2h4.18a3 3 0 1 0 0-2zM59 48a1 1 0 0 1 0-2A1 1 0 0 1 59 48z"
                    />
                    <path
                      fill="#ffac00"
                      d="M30,10H48a4,4,0,0,1,4,4V50a4,4,0,0,1-4,4H30a0,0,0,0,1,0,0V10A0,0,0,0,1,30,10Z"
                    />
                    <path
                      fill="#f3f3f3"
                      d="M30,17H45a1,1,0,0,1,1,1V46a1,1,0,0,1-1,1H30a0,0,0,0,1,0,0V17A0,0,0,0,1,30,17Z"
                    />
                    <path
                      fill="#00aaa8"
                      d="M24.82 15a3 3 0 1 0 0 2H30V15zM22 17a1 1 0 0 1 0-2A1 1 0 0 1 22 17zM26 26a3 3 0 0 0-3 3v3a1 1 0 0 1-1 1H17.82a3 3 0 1 0 0 2H22a3 3 0 0 0 3-3V29a1 1 0 0 1 1-1h4V26zM15 35a1 1 0 0 1 0-2A1 1 0 0 1 15 35zM25 50a1 1 0 0 1-1-1V46.82a3 3 0 1 0-2 0V49a3 3 0 0 0 3 3h5V50zm-2-5a1 1 0 0 1 0-2A1 1 0 0 1 23 45z"
                    />
                  </svg> */}
                </div>
                <h3>AI and machine learning services</h3>
                <p>
                  We have the expertise to handle any task, no matter how large
                  or small! Because of this, if your start-up requires any kind
                  of machine learning or an AI feature, get in touch with us
                  straight away.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-iot-services">
                <div className="icon">
                  <svg.Code1 />
                </div>
                <h3>UI/UX design</h3>
                <p>
                  UI/UX is vital to an application. Distinct Cloud will help you
                  with the design for your product's interface, that way you
                  have a beautiful working product. We can create a UI/UX that
                  will surely serve as the backbone of any product manager's
                  efforts.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-iot-services">
                <div className="icon">
                  <svg.InfoWebpageWireframe />
                </div>
                <h3>Prototyping and MVP development</h3>
                <p>
                  A Minimum Viable Product (MVP) is a great tool for getting
                  your feet wet in terms of launching a product. By creating a
                  MVP, you will be able to work out any kinks, and ultimately
                  get a feel for what type of experience your customers want
                  from your product.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-iot-services">
                <div className="icon">
                  <svg.Code />
                </div>
                <h3>DevOps services</h3>
                <p>
                  Development is the backbone of every successful startup
                  project. Distinct Cloud can provide your development service
                  from only the most distinguished engineers. Only those who
                  have longstanding experience with deploying high-loaded and
                  robust products come to work for us!
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-iot-services">
                <div className="icon">
                  <svg.Budget />
                </div>
                <h3>Financial & IR consulting</h3>
                <p>
                  Our experienced analysts will make sure your product is
                  profitable before it hits the launch phase. We'll work with
                  you to expand on your value message, create an investor deck
                  and deliver marketing and PR services when needed.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-iot-services">
                <div className="icon">
                  <svg.Support />
                </div>
                <h3>Code refactoring & support</h3>
                <p>
                  It might be necessary to reinvent the first version of your
                  product - we can help. We provide our clients with maintenance
                  and support which includes multilingual 24/7 helpline groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="why-choose-us ptb-80 pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <img
                  src="assets/img/services-image/remote.png"
                  className="wow fadeInUp"
                  alt="image"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInUp",
                  }}
                />
                
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Your Own Offshore R & D Center Vendor</h2>
                <div className="bar" />
                <p>
                  Offshore Development Center by Distinct Cloud is the right
                  alternative for your future projects. We are the global IT
                  solutions partner, which guarantees you: - Profitable
                  solutions for your business - Global network of the most
                  talented developers - A convenient location - Flexible pricing
                  policy - Low-cost, quality work - Highly professional and
                  friendly managers having an extensive experience in IT
                  outsourcing.
                </p>
              </div>
              <button
                data-toggle="modal"
                data-target="#enquiryModal"
                className="btn btn-primary"
              >
                Talk to us
              </button>
              
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="hosting-features-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Dedicated team options</h2>
            <div className="bar" />
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-hosting-features">
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
                <h3>Build-Operate-Transfer</h3>
                <p>
                  We can work with you to create start-up costs or lead your
                  internal team as they manage the transition over a flexible
                  amount of time so that your organization is prepared to handle
                  growth. A seasoned team of professionals who are experts in
                  their particular domain will manage the transitions with the
                  help of our experienced staff to ensure that your vision for
                  the new business line is fully realized.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-hosting-features">
                <div className="icon bg-c679e3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-grid"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </div>
                <h3>Full-time employees</h3>
                <p>
                  All team members working on your project are fully and
                  exclusively occupied with your project - this is best for
                  software developers, analysts and QA engineers. No recruitment
                  troubles or administrative hassle. We will set up dedicated
                  teams for your projects. You will save the overhead costs as
                  we take care of the management, yet the teams are in constant
                  communication with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <FactArea />
      <Footer />
    </div>
  );
}

export default startup;
