import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Feedback from "../components/Feedback";
import Parteners from "../components/Parteners";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";

export default function ScheduleCall() {
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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
      </Head>
      <Header />
      <>
        <section className="contact-area ptb-80">
          <div className="container mt-5">
            <div className="row h-100 logos">
              <div className="col-lg-6 col-md-12">
                <div style={{ textAlign: "left" }} className="section-title">
                  <h2>Trusted for building successful startups</h2>
                  <div style={{ marginLeft: "0" }} className="bar" />
                  <p className="m-0">
                    Join companies that trust us to hire remote software
                    developers
                  </p>
                </div>
                <div className="row mb-5">
                  <div className="col-lg-4 col-sm-3 col-md-3 text-center">
                    <img
                      src="https://www.polyone.io/splash/polylogo.130c477e.png"
                      class="l-dark poly-logo"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>
                  <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                    <img
                      src="https://www.tradecloud.in/assets/images/logo-dark.svg"
                      class="l-dark"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>
                  <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                    <img
                      src="https://pwa.signalled.co/assets/logo/logo.png"
                      class="l-dark"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>
                  <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                    <img
                      src="https://images.prismic.io/diywork/cf392d3a-7a08-44ae-a21b-81d5d94b684c_logo-dark.png?auto=compress,format"
                      class="l-dark"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>
                  <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                    <img
                      src="https://www.ezaccessmot.com/wp-content/uploads/2018/02/ezaccess-logo-large-300x132.png"
                      class="l-dark"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>

                  <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                    <img
                      src="assets/img/logo-eazynft.svg"
                      class="l-dark"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>
                </div>

                <div style={{ textAlign: "left" }} className="section-title">
                  <h2>An initiative of people from top companies </h2>
                  <div style={{ marginLeft: "0" }} className="bar" />
                  <p className="m-0">You are in good hands</p>
                </div>

                <div className="row mb-5">
                  <div className="col-lg-4 col-sm-3 col-md-3 text-center">
                    <img
                      src="/assets/img/company-logo/Color-Deutsche-Bank-Logo.jpg"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>
                  <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                    <img
                      src="/assets/img/company-logo/cognizant.jpg"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>
                  <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                    <img
                      src="/assets/img/company-logo/Veritas_Logo_RGB_RED.jpg"
                      class="l-dark"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>
                  <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                    <img
                      src="/assets/img/company-logo/gdg.png"
                      class="l-dark"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>
                  <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                    <img
                      src="/assets/img/company-logo/amazon.jpg"
                      class="l-dark"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>

                  <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                    <img
                      src="/assets/img/company-logo/microsoft.png"
                      class="l-dark"
                      height="60"
                      alt="Company_logo"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <iframe
                  frameBorder={0}
                  scrolling="no"
                  src="https://calendly.com/manish-gautam/project-discovery"
                  className="eazy-nft-calendly"
                />
              </div>
            </div>
          </div>
          <div className="analytics-shape2">
            <img src="assets/img/bigdata-analytics/vector.png" alt="image" />
          </div>
        </section>
      </>

      {/* <Newsletter></Newsletter> */}

      <Footer />
    </div>
  );
}
