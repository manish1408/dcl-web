import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import Banner from "../components/Banner";
import Head from "next/head";
import PageTitle from "../components/PageTitle";
import Link from "next/link";
import FactArea from "../components/FactArea";

export default function about() {
  return (
    <>
      <Head>
        <title>Distinct Cloud Labs - About</title>
      </Head>
      <Header />
      <PageTitle title="About Us" />
      <section className="about-area ptb-80">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-about-img">
                <img src="assets/img/about4.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="ml-about-content">
                <span className="sub-title">About Us</span>
                <h2>
                  Software development company that will save you time, money,
                  and stress.
                </h2>
                <div className="bar" />
                <p>
                  Distinct Cloud is an agile software development company that
                  serves clients all over the world. We are a team of highly
                  skilled and experienced software developers with expertise in
                  multiple platforms.
                </p>
                <p>
                  We help clients build their applications on the cloud, mobile,
                  and desktop using the most effective approaches to develop
                  high-quality software. We believe in tailoring and delivering
                  the right solution based on our client's needs, budget and
                  timeline. Our team of dedicated professionals work
                  relentlessly to ensure each project is completed within
                  deadline with unmatched quality.
                </p>
                <Link href="/contact">
                  <a className="btn btn-secondary">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-hosting-features">
                  <div className="icon ">
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
                      class="feather feather-git-branch"
                    >
                      <line x1="6" y1="3" x2="6" y2="15"></line>
                      <circle cx="18" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M18 9a9 9 0 0 1-9 9"></path>
                    </svg>
                  </div>
                  <h3>Streamlined processes</h3>
                  <p>
                    Our streamlined process allows for maintaining the quality
                    of work, automating software delivery pipeline and
                    increasing team morale.
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-hosting-features">
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
              </div> */}
              {/* <div className="col-lg-4 col-md-6 col-sm-6">
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
              </div> */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-hosting-features">
                  <div className="icon bg-eb6b3d">
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
                      class="feather feather-users"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3>Talented people</h3>
                  <p>
                    We value our employees and offer them an opportunity to grow
                    within our company. We help train them by providing them
                    with mentoring services to compliment their innate skills,
                    talents, and abilities.
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 col-sm-6">
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
              </div> */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-hosting-features">
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
                  <h3>Proven technologies</h3>
                  <p>
                    The product we created is elegant and beautiful. It will be
                    designed to last, and provide a platform for maximum
                    efficiency, which means we can help your business grow!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ paddingTop: "0px" }}
        className="features-area-two ptb-80"
      >
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>What We Can Do For You</h2>
                <div className="bar" />
                <p>
                  We provide software solutions that are efficient, fast,
                  reliable, and scalable.
                </p>
              </div>
              <div className="row">
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
                      className="feather feather-layout"
                    >
                      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                      <line x1={3} y1={9} x2={21} y2={9} />
                      <line x1={9} y1={21} x2={9} y2={9} />
                    </svg>{" "}
                    Responsive design
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
                      className="feather feather-code"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>{" "}
                    React web development
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
                      className="feather feather-smartphone"
                    >
                      <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
                      <line x1={12} y1={18} x2={12} y2={18} />
                    </svg>{" "}
                    Android apps development
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
                      className="feather feather-code"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>{" "}
                    Laravel web development
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
                      className="feather feather-smartphone"
                    >
                      <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
                      <line x1={12} y1={18} x2={12} y2={18} />
                    </svg>{" "}
                    iOS apps development
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
                      className="feather feather-pen-tool"
                    >
                      <path d="M12 19l7-7 3 3-7 7-3-3z" />
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                      <path d="M2 2l7.586 7.586" />
                      <circle cx={11} cy={11} r={2} />
                    </svg>{" "}
                    UX/UI design
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
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 services-left-image">
              <img
                src="assets/img/services-left-image/big-monitor.png"
                className="wow fadeInDown"
                data-wow-delay="0.6s"
                alt="big-monitor"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInDown",
                }}
              />
              <img
                src="assets/img/services-left-image/creative.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="creative"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              />
              <img
                src="assets/img/services-left-image/developer.png"
                className="wow fadeInLeft"
                data-wow-delay="0.6s"
                alt="developer"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInLeft",
                }}
              />
              <img
                src="assets/img/services-left-image/flower-top.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="flower-top"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "zoomIn",
                }}
              />
              <img
                src="assets/img/services-left-image/small-monitor.png"
                className="wow bounceIn"
                data-wow-delay="0.6s"
                alt="small-monitor"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "bounceIn",
                }}
              />
              <img
                src="assets/img/services-left-image/small-top.png"
                className="wow fadeInDown"
                data-wow-delay="0.6s"
                alt="small-top"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInDown",
                }}
              />
              <img
                src="assets/img/services-left-image/table.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="table"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "zoomIn",
                }}
              />
              <img
                src="assets/img/services-left-image/target.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="target"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              />
              <img
                src="assets/img/services-left-image/cercle-shape.png"
                className="bg-image rotateme"
                alt="shape"
              />
              <img
                src="assets/img/services-left-image/main-pic.png"
                className="wow fadeInUp animated"
                data-wow-delay="0.6s"
                alt="main-pic"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <FactArea />

      {/* <section className="repair-cta-area bg-0f054b">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cta-repair-content">
                <h3>
                  We follow CISQ standards to build reliable, maintainable, secure, and efficient software.
                </h3>
                <p>If you want to discuss a technology partnership, contact us.</p>
                <a href="#" className="btn btn-primary">
                  Drop us a message
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-repair-img">
                <img src="assets/img/man-and-women.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
        <div className="circle-box">
          <img src="assets/img/circle.png" alt="image" />
        </div>
        <div className="cta-shape">
          <img src="assets/img/cta-shape.png" alt="image" />
        </div>
      </section> */}

      <Footer />
    </>
  );
}
