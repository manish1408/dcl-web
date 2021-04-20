import React from 'react'

export default function footer() {
    return (
        <footer className="footer-area bg-f7fafd">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <div className="logo">
            <a href="#"><img src="assets/img/logo.png" alt="logo" /></a>
          </div>
          <p>
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget pl-5">
          <h3>Company</h3>
          <ul className="list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Our Pricing</a></li>
            <li><a href="#">Latest News</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <h3>Support</h3>
          <ul className="list">
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Condition</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <h3>Address</h3>
          <ul className="footer-contact-info">
            <li>
              <i data-feather="map-pin" /> 27 Division St, New York, NY
              10002, USA
            </li>
            <li>
              <i data-feather="mail" /> Email:
              <a href="#"><span className="__cf_email__" data-cfemail="a1d2d5c0d3d5d1e1c6ccc0c8cd8fc2cecc">[email&nbsp;protected]</span></a>
            </li>
            <li>
              <i data-feather="phone-call" /> Phone:
              <a href="#">+ (321) 984 754</a>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <a href="#" className="facebook"><i data-feather="facebook" /></a>
            </li>
            <li>
              <a href="#" className="twitter"><i data-feather="twitter" /></a>
            </li>
            <li>
              <a href="#" className="instagram"><i data-feather="instagram" /></a>
            </li>
            <li>
              <a href="#" className="linkedin"><i data-feather="linkedin" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-12 col-md-12">
        <div className="copyright-area">
          <p>Copyright @2020 StartP. All rights reserved</p>
        </div>
      </div>
    </div>
  </div>
  <img src="assets/img/map.png" className="map" alt="map" />
  <div className="shape1"><img src="assets/img/shape1.png" alt="shape" /></div>
  <div className="shape8 rotateme">
    <img src="assets/img/shape2.svg" alt="shape" />
  </div>
</footer>

    )
}