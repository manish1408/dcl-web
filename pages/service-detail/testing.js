import Head from "next/head";
import React from "react";
import PageTitle from "../../components/PageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Enquiry from "../../components/Enquiry";

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
                Free consultation
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
            <h2>Our Services</h2>
            <div className="bar" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
                <h3>Incredible Infrastructure</h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
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
                    className="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3>Email Notifications</h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
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
                <h3>Best Analytics Audits</h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
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
                <h3>Simple Dashboard</h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
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
                <h3>Information Retrieval</h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
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
                <h3>Deep Technical SEO</h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
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
                <h3>Drag and Drop Functionality</h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
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
                <h3>Deadline Reminders</h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
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
                <h3>Modern Keyword Analysis</h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
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
      </section>
      <div className="separate" />
      <section className="why-choose-us ptb-80 pt-0">
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
                {/* */}
                {/*  */}
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
                Free consultation
              </button>

              {/* */}
            </div>
          </div>
        </div>
      </section>
      <section className="hosting-features-area ptb-80 bg-f9f6f6">
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
      </section>
      <Footer />
    </div>
  );
}

export default testing;
