import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function about() {
  return (
    <div>
      <Head>
        <title>Distinct Cloud Labs - Services</title>
      </Head>
      <Header />
      <>
        <div className="page-title-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <h2>Services</h2>
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
        <div className="agency-services-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="agency-services-box">
                  <img
                    src="assets/img/agency-image/services-img1.jpg"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <Link href="/serviceSingle">
                        <a>IT Professionals</a>
                      </Link>
                    </h3>
                    <Link href="/serviceSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="agency-services-box">
                  <img
                    src="assets/img/agency-image/services-img2.jpg"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <Link href="/serviceSingle">
                        <a>IT Professionals</a>
                      </Link>
                    </h3>
                    <Link href="/serviceSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="agency-services-box">
                  <img
                    src="assets/img/agency-image/services-img3.jpg"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <Link href="/serviceSingle">
                        <a>IT Professionals</a>
                      </Link>
                    </h3>
                    <Link href="/serviceSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="agency-services-box">
                  <img
                    src="assets/img/agency-image/services-img4.jpg"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <Link href="/serviceSingle">
                        <a>IT Professionals</a>
                      </Link>
                    </h3>
                    <Link href="/serviceSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="agency-services-box">
                  <img
                    src="assets/img/agency-image/services-img5.jpg"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <Link href="/serviceSingle">
                        <a>IT Professionals</a>
                      </Link>
                    </h3>
                    <Link href="/serviceSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="agency-services-box">
                  <img
                    src="assets/img/agency-image/services-img6.jpg"
                    alt="image"
                  />
                  <div className="content">
                    <h3>
                      <Link href="/serviceSingle">
                        <a>IT Professionals</a>
                      </Link>
                    </h3>
                    <Link href="/serviceSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
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
        </div>
      </>

      <Footer />
    </div>
  );
}
