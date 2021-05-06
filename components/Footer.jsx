import React from "react";
import Link from "next/link";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default function footer() {
  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <div className="logo">
                <a href="#">
                  <img src="/assets/img/logo-black.png" alt="logo" />
                </a>
              </div>
              <p>
                Distinct cloud offers a suite of software products and services
                in web, mobile, analytics, complex algos and AI
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Company</h3>
              <ul className="list">
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a>Create an MVP</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a>Start a Project</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Links</h3>
              <ul className="list">
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a>Privacy policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Email</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contact</h3>
              <ul className="footer-contact-info">
                <li>
                  <LocationOnIcon /> 9th Floor, Pride Gateway, S.no.112, Baner
                  Rd, Pune MH (India)
                </li>
                <li>
                  <EmailIcon />
                  <a href="#">
                    <span className="__cf_email__">
                      hello@DistinctCloud.com
                    </span>
                  </a>
                </li>
              </ul>
              {/* <ul className="social-links">
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
          </ul> */}
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>Copyright @2021 Distinct Cloud All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/map.png" className="map" alt="map" />
      <div className="shape1">
        <img src="/assets/img/shape1.png" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/assets/img/shape2.svg" alt="shape" />
      </div>
    </footer>
  );
}
