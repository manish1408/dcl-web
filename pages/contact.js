import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function about() {
    return (
        <div>
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
    <div className="shape1"><img src="assets/img/shape1.png" alt="shape" /></div>
    <div className="shape2 rotateme"><img src="assets/img/shape2.svg" alt="shape" /></div>
    <div className="shape3"><img src="assets/img/shape3.svg" alt="shape" /></div>
    <div className="shape4"><img src="assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape5"><img src="assets/img/shape5.png" alt="shape" /></div>
    <div className="shape6 rotateme"><img src="assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape7"><img src="assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape8 rotateme"><img src="assets/img/shape2.svg" alt="shape" /></div>
  </div>
  <section className="contact-info-area ptb-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="contact-info-box">
            <div className="icon">
              <i data-feather="mail" />
            </div>
            <h3>Mail Here</h3>
            <p><a href="#"><span className="__cf_email__">manish.gautam.india@gmail.com</span></a></p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="contact-info-box">
            <div className="icon">
              <i data-feather="map-pin" />
            </div>
            <h3>Visit Here</h3>
            <p>9th Floor, Pride Gateway, S.no.112, Baner Rd, Pune MH (India)</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
          <div className="contact-info-box">
            <div className="icon">
              <i data-feather="phone" />
            </div>
            <h3>Call Here</h3>
            <p><a href="#">+91 9922533180</a></p>
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
          <form id="contactForm">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Name" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Email" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="form-group">
                  <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Phone" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="form-group">
                  <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Subject" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea name="message" className="form-control" id="message" cols={30} rows={5} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <button type="submit" className="btn btn-primary">Send Message</button>
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
    )
}