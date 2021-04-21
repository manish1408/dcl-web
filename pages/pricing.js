import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function pricing() {
    return (
        <div>
            <Header />
            <>
  <div className="page-title-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <h2>Hire Us</h2>
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
  <section className="pricing-area ptb-80 bg-f9f6f6">
    <div className="container">
      <div className="section-title">
        <h2>Pricing Plans</h2>
        <div className="bar" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="pricing-table">
            <div className="pricing-header">
              <h3>Basic Plan</h3>
            </div>
            <div className="price">
              <span><sup>$</sup>15.00 <span>/Mon</span></span>
            </div>
            <div className="pricing-features">
              <ul>
                <li className="active">5 GB Bandwidth</li>
                <li className="active">Highest Speed</li>
                <li className="active">1 GB Storage</li>
                <li className="active">Unlimited Website</li>
                <li className="active">Unlimited Users</li>
                <li className="active">24x7 Great Support</li>
                <li>Data Security and Backups</li>
                <li>Monthly Reports and Analytics</li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a href="#" className="btn btn-primary">Select Plan</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="pricing-table active-plan">
            <div className="pricing-header">
              <h3>Advanced Plan</h3>
            </div>
            <div className="price">
              <span><sup>$</sup>35.00 <span>/Mon</span></span>
            </div>
            <div className="pricing-features">
              <ul>
                <li className="active">10 GB Bandwidth</li>
                <li className="active">Highest Speed</li>
                <li className="active">3 GB Storage</li>
                <li className="active">Unlimited Website</li>
                <li className="active">Unlimited Users</li>
                <li className="active">24x7 Great Support</li>
                <li className="active">Data Security and Backups</li>
                <li>Monthly Reports and Analytics</li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a href="#" className="btn btn-primary">Select Plan</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
          <div className="pricing-table">
            <div className="pricing-header">
              <h3>Expert Plan</h3>
            </div>
            <div className="price">
              <span><sup>$</sup>65.00 <span>/Mon</span></span>
            </div>
            <div className="pricing-features">
              <ul>
                <li className="active">15 GB Bandwidth</li>
                <li className="active">Highest Speed</li>
                <li className="active">5 GB Storage</li>
                <li className="active">Unlimited Website</li>
                <li className="active">Unlimited Users</li>
                <li className="active">24x7 Great Support</li>
                <li className="active">Data Security and Backups</li>
                <li className="active">Monthly Reports and Analytics</li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a href="#" className="btn btn-primary">Select Plan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape8 rotateme"><img src="assets/img/shape2.svg" alt="shape" /></div>
    <div className="shape2 rotateme"><img src="assets/img/shape2.svg" alt="shape" /></div>
    <div className="shape7"><img src="assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape4"><img src="assets/img/shape4.svg" alt="shape" /></div>
  </section>
</>
<Footer />
        </div>
    )
}