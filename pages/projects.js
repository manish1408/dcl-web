import React from 'react';
import Link from 'next/link';
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
          <h2>Project</h2>
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
  <section className="ml-projects-area ptb-80">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-ml-projects-box">
            <img src="assets/img/projects-img1.jpg" alt="image" />
            <div className="plus-icon">
              <Link href="/projectSingle"><a>
                <span />
              </a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-ml-projects-box">
            <img src="assets/img/projects-img2.jpg" alt="image" />
            <div className="plus-icon">
              <Link href="/projectSingle"><a>
                <span />
              </a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-ml-projects-box">
            <img src="assets/img/projects-img3.jpg" alt="image" />
            <div className="plus-icon">
              <Link href="/projectSingle"><a>
                <span />
              </a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-ml-projects-box">
            <img src="assets/img/projects-img4.jpg" alt="image" />
            <div className="plus-icon">
              <Link href="/projectSingle"><a>
                <span />
              </a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-ml-projects-box">
            <img src="assets/img/projects-img5.jpg" alt="image" />
            <div className="plus-icon">
              <Link href="/projectSingle"><a>
                <span />
              </a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-ml-projects-box">
            <img src="assets/img/projects-img6.jpg" alt="image" />
            <div className="plus-icon">
              <Link href="/projectSingle"><a>
                <span />
              </a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-ml-projects-box">
            <img src="assets/img/projects-img7.jpg" alt="image" />
            <div className="plus-icon">
              <Link href="/projectSingle"><a>
                <span />
              </a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-ml-projects-box">
            <img src="assets/img/projects-img8.jpg" alt="image" />
            <div className="plus-icon">
              <Link href="/projectSingle"><a>
                <span />
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

            <Footer />
        </div>
    )
}