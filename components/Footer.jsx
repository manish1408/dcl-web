import React from 'react';
import Link from 'next/link';

export default function footer() {
    return (
        <footer className="footer-area bg-f7fafd">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <div className="logo">
            <a href="#"><img src="assets/img/logo-black.png" alt="logo" /></a>
          </div>
          <p>
          We are an experienced and talented team of passionate developers who get the best of the web without the overhead.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget pl-5">
          <h3>Company</h3>
          <ul className="list">
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/services"><a>Services</a></Link></li>
            <li><Link href="/projects"><a>Projects</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <h3>Support</h3>
          <ul className="list">
            <li><Link href="/faq"><a>FAQ's</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
            <li><Link href="/pricing"><a>Hire Us</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <h3>Address</h3>
          <ul className="footer-contact-info">
            <li>
              <i data-feather="map-pin" /> 9th Floor, Pride Gateway, S.no.112, Baner Rd, Pune MH (India)
            </li>
            <li>
              <i data-feather="mail" />
              <a href="#"><span className="__cf_email__">example@mail.com</span></a>
            </li>
            <li>
              <i data-feather="phone-call" />
              <a href="#">+91 1234567890</a>
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
          <p>Copyright @2021 Distinct Cloud All rights reserved</p>
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