import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function serviceSingle() {
    return (
        <div>
            <Header />
            <>
  <div className="page-title-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <h2>Services Details</h2>
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
  <section className="services-details-area ptb-80">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 services-details">
          <div className="services-details-desc">
            <h3>Incredible Infrastructure</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.</p>
            <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
          </div>
        </div>
        <div className="col-lg-6 services-details-image">
          <img src="assets/img/services-details-image/1.png" className="wow fadeInUp" alt="image" />
        </div>
      </div>
      <div className="separate" />
      <div className="row align-items-center">
        <div className="col-lg-6 services-details-image">
          <img src="assets/img/services-details-image/2.png" className="wow fadeInUp" alt="image" />
        </div>
        <div className="col-lg-6 services-details">
          <div className="services-details-desc">
            <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
            <div className="services-details-accordion">
              <ul className="accordion">
                <li className="accordion-item">
                  <a className="accordion-title active" href="javascript:void(0)">
                    <i className="flaticon-plus" />
                    Which material types can you work with?
                  </a>
                  <p className="accordion-content show">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </li>
                <li className="accordion-item">
                  <a className="accordion-title" href="javascript:void(0)">
                    <i className="flaticon-plus" />
                    Is Smart Lock required for instant apps?
                  </a>
                  <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </li>
                <li className="accordion-item">
                  <a className="accordion-title" href="javascript:void(0)">
                    <i className="flaticon-plus" />
                    Can I have multiple activities in a single feature?
                  </a>
                  <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </li>
              </ul>
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
