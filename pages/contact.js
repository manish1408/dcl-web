import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import Head from "next/head";

export default function about() {
  return (
    <div>
      <Head>
        <title>Distinct Cloud Labs - Contact</title>
      </Head>
      <Header />
      <>
        <div className="page-title-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <h2>Contact Us</h2>
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
        <section className="contact-info-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contact-info-box">
                  <div className="icon">
                    <EmailIcon />
                    {/* <i data-feather="mail" /> */}
                  </div>
                  <h3>Mail Here</h3>
                  <p>
                    <a href="#">
                      <span className="__cf_email__">contact@distinctcloud.io</span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contact-info-box">
                  <div className="icon">
                    <LocationOnIcon />
                    {/* <i data-feather="map-pin" /> */}
                  </div>
                  <h3>Visit Here</h3>
                  <p>
                    9th Floor, Pride Gateway, S.no.112, Baner Rd, Pune MH
                    (India)
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="contact-info-box">
                  <div className="icon">
                    <CallIcon />
                    {/* <i data-feather="phone" /> */}
                  </div>
                  <h3>Call Here</h3>
                  <p>
                    <a href="#">+91 90318 96342</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-area ptb-80">
          <div className="container">
            <div className="section-title">
              <h2>Get In Touch With Us</h2>
              <div className="bar" />
              <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
            </div>
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <img src="assets/img/1.png" alt="image" />
              </div>
              <div className="col-lg-6 col-md-12">
                <form
                  action="https://getform.io/f/5ab6bdb6-7de3-43b0-96c0-7b8f170922cd"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                          data-error="Please enter your name"
                          placeholder="Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please enter your email"
                          placeholder="Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    {/* <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          required
                          data-error="Please enter your number"
                          className="form-control"
                          placeholder="Phone"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div> */}
                    {/* <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="msg_subject"
                          id="msg_subject"
                          className="form-control"
                          required
                          data-error="Please enter your subject"
                          placeholder="Subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div> */}
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          name="message"
                          className="form-control message-filed"
                          id="message"
                          required
                          data-error="Write your message"
                          placeholder="Your Message"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                      <div id="msgSubmit" className="h3 text-center hidden" />
                      <div className="clearfix" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </div>
  );
}
