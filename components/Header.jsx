import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function header() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <header
      id="header"
      className={
        router.pathname != "/"
          ? "headroom navbar-style-two"
          : "headroom navbar-color-white"
      }
    >
      <div className="startp-responsive-nav">
        <div className="container">
          <div className="startp-responsive-menu">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src={
                      router.pathname != "/"
                        ? "/assets/img/logo-black.png"
                        : "/assets/img/white-logo.png"
                    }
                    alt="logo"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="/">
              <img
                src={
                  router.pathname != "/"
                    ? "/assets/img/logo-black.png"
                    : "/assets/img/white-logo.png"
                }
                alt="logo"
              />
            </a>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav ml-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a
                      className={
                        router.pathname == "/" ? "nav-link active" : "nav-link"
                      }
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/mvp">
                    <a
                      className={
                        router.pathname == "/mvp"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      MVP
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/develop">
                    <a
                      className={
                        router.pathname == "/develop"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Develop
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a
                      className={
                        router.pathname == "/about"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      router.pathname.startsWith("/service-detail")
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Services
                  </a>
                  <ul className="dropdown_menu">
                    <li className="nav-item">
                      <Link href="/service-detail/startup">
                        <a
                          className={
                            router.pathname == "/service-detail/startup"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          For Startups
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service-detail/enterprise">
                        <a
                          className={
                            router.pathname == "/service-detail/enterprise"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          For enterprises
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service-detail/design">
                        <a
                          className={
                            router.pathname == "/service-detail/design"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Design Services
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service-detail/testing">
                        <a
                          className={
                            router.pathname == "/service-detail/testing"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Software Testing
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service-detail/webdev">
                        <a
                          className={
                            router.pathname == "/service-detail/webdev"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Web Development
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service-detail/mobdev">
                        <a
                          className={
                            router.pathname == "/service-detail/mobdev"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Mobile Development
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/blog">
                    <a
                      className={
                        router.pathname == "/blog"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Blog
                    </a>
                  </Link>
                </li>
                {/* <li className="nav-item">
              <Link href="/services">
                <a className={router.pathname == "/services" ? "nav-link active" : "nav-link"} >Services</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects">
                <a className={router.pathname == "/projects" ? "nav-link active" : "nav-link"} >Projects</a>
              </Link>
            </li> */}
                {/* <li className="nav-item">
                  <Link href="/blog">
                    <a
                      className={
                        router.pathname == "/blog"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Blog
                    </a>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link href="/contact">
                    <a
                      className={
                        router.pathname == "/contact"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="others-option">
          <a href="cart.html" className="cart-wrapper-btn"><i data-feather="shopping-cart" /><span>0</span></a>
          <a href="#" className="btn btn-primary">Get Started</a>
        </div> */}
          </nav>
        </div>
      </div>
      <div className="others-option-for-responsive">
        <div className="container">
          {/* <div className="dot-menu">
        <div className="inner">
          <div className="circle circle-one" />
          <div className="circle circle-two" />
          <div className="circle circle-three" />
        </div>
      </div> */}
          {/* <div className="container">
        <div className="option-inner">
          <div className="others-option">
            <a href="cart.html" className="cart-wrapper-btn"><i data-feather="shopping-cart" /><span>0</span></a>
            <a href="#" className="btn btn-primary">Schedule a Demo</a>
          </div>
        </div>
      </div> */}
        </div>
      </div>
      <div className="go-top">
        <ArrowUpwardIcon />
        {/* <i data-feather="arrow-up" /> */}
      </div>
    </header>
  );
}
