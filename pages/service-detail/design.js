import Head from "next/head";
import React from "react";
import PageTitle from "../../components/PageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Enquiry from "../../components/Enquiry";
import Tick from "../../components/svg-comp/Tick";
import FactArea from "../../components/FactArea";

function design() {
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
      <PageTitle title="Design Services" />;
      <section className="why-choose-us ptb-80 pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Design Services for Smart Businesses</h2>
                <div className="bar" />
                <p>
                  We create custom web app designs that guarantee a great user
                  experience.. Our main goal is to design outstanding online
                  experiences for our clients and their users.
                </p>
                <p>
                  We are a team of professional UI/UX designers, web developers
                  and project managers that create engaging digital experiences
                  for our clients. Our goal is to deliver top-notch designs
                  while providing the highest level of customer service in the
                  industry.
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
                  src="assets/img/services-image/designing.png"
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
      <section className="pricing-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Your one-stop-shop for design and development</h2>
            <div className="bar" />
            <p>
              Distinct Cloud is a full-stack mobile app design company. Our
              full-stack team does it all – from iOS and Android app design
              services to development and testing.
            </p>
          </div>
          <div className="tab pricing-tab bg-color">
            <div className="tab_content">
              <div className="tabs_item">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <h3 style={{ marginBottom: "40px" }}>UX Designers</h3>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <Tick />
                          We’ll create a user experience that’s so intuitive,
                          your users won’t know they’re using an app.
                        </li>
                        <li>
                          <Tick /> Our goal is to create an app that’s so easy
                          to use, your users won’t know they’re using it.
                        </li>
                        <li>
                          <Tick /> We’ll create a user experience that’s so
                          intuitive, your users won’t know they’re using it.
                        </li>
                        <li>
                          <Tick /> Our goal is to create an app that’s so easy
                          to use, your users won’t know they’re using it.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <h3 style={{ marginBottom: "40px" }}>UI Designers</h3>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <Tick />
                          We utilize the most innovative tools and technology to
                          create high-quality UI designs.
                        </li>
                        <li>
                          <Tick /> We guarantee a dedicated team following an
                          iterative design process.
                        </li>
                        <li>
                          <Tick /> We collaborate with our clients in order to
                          create a customized product.
                        </li>
                        <li>
                          <Tick /> We create user interfaces according to the
                          design guidelines of Apple and Google.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <h3 style={{ marginBottom: "40px" }}>
                          IOS / Android App Design
                        </h3>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <Tick />
                          We have an expert team of iOS and Android developers.
                        </li>
                        <li>
                          <Tick /> We have successfully executed a lot of
                          projects for iOS and Android.
                        </li>
                        <li>
                          <Tick /> We use our experience to build apps that best
                          meet your business needs and deliver the best user
                          experience.
                        </li>
                        <li>
                          <Tick /> We fit your budget and we will never
                          compromise on the quality of the mobile apps we
                          develop.
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
      <div className="separate" />
      <section className="why-choose-us ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <img
                  src="assets/img/services-image/ux-audit.png"
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
                <h2>UX Audit Services</h2>
                <div className="bar" />
                <p>
                  The purpose of a user experience audit is to ensure that your
                  products are proven useful, usable, reliable while being
                  delightful to their users.
                </p>
                <br />
                <p>
                  During a UX audit, a designer uses his or her expertise along
                  with some specific skills, tools, and methods to analyze how
                  users interact with your product. By identifying UX flaws in
                  an audit, you can optimize your website or app, improve
                  business performance, and increase ROI.
                </p>
              </div>
              <button
                data-toggle="modal"
                data-target="#enquiryModal"
                className="btn btn-primary"
              >
                Talk to us
              </button>
              {/* */}
            </div>
          </div>
        </div>
      </section>
      <section className="faq-area ptb-80">
        <div className="container">
          <div className="faq-accordion">
            <div className="section-title">
              <h2>Delivering a satisfying performance with user experience</h2>
              <div className="bar" />
              <p>
                Our research-based approach allows us to provide you with the
                most efficient, innovative solutions for your specific business
                needs.
              </p>
            </div>
            <ul className="accordion">
              <li className="accordion-item">
                <a className="accordion-title active" href="javascript:void(0)">
                  <i className="flaticon-plus" />
                  Project definition
                </a>
                <p className="accordion-content show">
                  At the beginning of every project, we conduct a kick-off
                  meeting so as to discuss business goals/expectations and what
                  stakeholder will play in the process.
                </p>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="flaticon-plus" />
                  Research
                </a>
                <p className="accordion-content">
                  We market the right things for your brand with just a little
                  bit of help from some trusted partners
                </p>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="flaticon-plus" />
                  Ideation
                </a>
                <p className="accordion-content">
                  We develop a product work structure and must evaluate the idea
                  designs in terms of their meeting business goals and in their
                  ability to alleviate customer issues.
                </p>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="flaticon-plus" /> Prototyping
                </a>
                <p className="accordion-content">
                  At this stage, we turn prototypes into reality by creating a
                  product roadmap and marketing plan.
                </p>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="flaticon-plus" />
                  Testing and evaluation
                </a>
                <p className="accordion-content">
                  This end-service design process is what helps us create our
                  designs to your specifications, then conduct usability testing
                  prior to launch, and finally introduce improvements based on
                  users’ feedback.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <FactArea />
      <Footer />
    </div>
  );
}

export default design;
