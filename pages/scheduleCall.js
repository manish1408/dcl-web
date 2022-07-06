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
        <div className="page-title-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <h2>Schehudle a Call</h2>
              </div>
            </div>
          </div>
          <div className="shape1">
            <img src="assets/img/shape1.png" alt="shape" />
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
          <div className="shape5">
            <img src="assets/img/shape5.png" alt="shape" />
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
        </div>

        <Parteners />

        <section className="contact-area ptb-80">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              {/* <div className="col-lg-4 col-md-12">
                <img src="assets/img/1.png" alt="image" />
              </div> */}
              <div className="col-lg-12 col-md-12">
                <iframe
                  frameBorder={0}
                  src="https://calendly.com/manish-gautam/project-discovery"
                  className="eazy-nft-calendly"
                />
              </div>
            </div>
          </div>
        </section>
      </>
      <Feedback></Feedback>
      <Blog></Blog>
      {/* <Newsletter></Newsletter> */}

      <Footer />
    </div>
  );
}
