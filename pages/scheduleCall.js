import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";


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
        <section className="">
          <div className="container-fluid">
            <div className="row talk-to-logos">


              <div className="col-12 pt-3 col-sm-7 col-md-7">
                {/* <h4 className="text-center">Schedule a project discovery call</h4> */}
                <iframe
                  frameBorder={0}
                  scrolling="no"
                  style={{ overflow: 'hidden' }}
                  src="https://calendly.com/manish-gautam/project-discovery?hide_gdpr_banner=1"
                  className="eazy-nft-calendly"
                />
              </div>


              <div className="ptb-80 col-12 col-sm-7 col-md-5">


                <div className="p-4 bg-eef6fd mt-3" style={{ borderRadius: "8px" }}>
                  <div className="section-title">
                    <h6>Trusted for building successful startups</h6>
                    <p>
                      Join companies that trust us to hire remote software
                      developers
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-sm-3 col-md-3 text-center">
                      <img
                        src="https://www.polyone.io/splash/polylogo.130c477e.png"
                        className="l-dark poly-logo"
                        height="30"
                        alt="Company_logo"
                      />
                    </div>
                    <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                      <img
                        src="https://www.tradecloud.in/assets/images/logo-dark.svg"
                        height="30"
                        alt="Company_logo"
                      />
                    </div>
                    <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                      <img
                        src="https://pwa.signalled.co/assets/logo/logo.png"
                        height="30"
                        alt="Company_logo"
                      />
                    </div>
                    <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                      <img
                        src="https://images.prismic.io/diywork/cf392d3a-7a08-44ae-a21b-81d5d94b684c_logo-dark.png?auto=compress,format"
                        height="30"
                        alt="Company_logo"
                      />
                    </div>
                    <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                      <img
                        src="https://www.ezaccessmot.com/wp-content/uploads/2018/02/ezaccess-logo-large-300x132.png"
                        height="30"
                        alt="Company_logo"
                      />
                    </div>

                    <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                      <img
                        src="assets/img/logo-eazynft.svg"
                        height="60"
                        alt="Company_logo"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-eef6fd mt-5" style={{ borderRadius: "8px" }}>
                  <div className="section-title">
                    <h6> You are in good hands  </h6>
                    <p> Disctinct Cloud Labs have people from top companies</p>
                  </div>

                  <div className="row mb-2">
                    <div className="col-lg-4 col-sm-3 col-md-3 text-center">
                      <img
                        src="/assets/img/company-logo/Color-Deutsche-Bank-Logo.jpg"
                        height="60"
                        alt="Company_logo"
                      />
                    </div>
                    {/* <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                      <img
                        src="/assets/img/company-logo/cognizant.jpg"
                        height="60"
                        alt="Company_logo"
                      />
                    </div> */}
                    <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                      <img
                        src="/assets/img/company-logo/Veritas_Logo_RGB_RED.jpg"
                        height="60"
                        alt="Company_logo"
                      />
                    </div>
                    {/* <div className="col-lg-4  col-sm-3 col-md-3 text-center">
      <img
        src="/assets/img/company-logo/gdg.png"
        height="60"
        alt="Company_logo"
      />
    </div> */}
                    <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                      <img
                        src="/assets/img/company-logo/amazon.jpg"
                        height="60"
                        alt="Company_logo"
                      />
                    </div>

                    <div className="col-lg-4  col-sm-3 col-md-3 text-center">
                      <img
                        src="/assets/img/company-logo/microsoft.png"
                        height="60"
                        alt="Company_logo"
                      />
                    </div>
                  </div>
                </div>


              </div>


            </div>
          </div>
          {/* <div className="analytics-shape2">
            <img src="assets/img/bigdata-analytics/vector.png" alt="image" />
          </div> */}
        </section>
      </>

      {/* <Newsletter></Newsletter> */}

      <Footer />
    </div>
  );
}
