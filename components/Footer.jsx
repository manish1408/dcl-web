import React from "react";
import Link from "next/link";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
                  <Link href="/mvp">
                    <a>Create an MVP</a>
                  </Link>
                </li>
                <li>
                  <Link href="/develop">
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
                {/* <li>
                  <Link href="/faq">
                    <a>Privacy policy</a>
                  </Link>
                </li> */}
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
                      contact@distinctcloud.io
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/distinctcloudlabs"
                    className="facebook"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/distinct_cloud"
                    className="twitter"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/distinctcloudlabs/"
                    className="instagram"
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/distinct-cloud-labs/"
                    className="linkedin"
                  >
                    <LinkedInIcon />
                  </a>
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
