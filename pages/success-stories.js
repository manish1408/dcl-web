import React, { useState } from "react";
import { FullPage, Slide } from "react-full-page";
import Header from "../components/Header";
import { Client } from "utils/prismicHelpers";
import Prismic from "prismic-javascript";
import { linkResolver } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import { useEffect } from "react";
// import PageLoader from "next/dist/client/page-loader";

export default function SuccessStories({ posts, pages }) {
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const [loader, setloader] = useState({ error: false, loader: false });

  // useEffect(() => {}, [auth, loader]);

  const verify = (e) => {
    e.preventDefault();
    setloader({ loader: true });
    const passwordString = "welcome_to_dcl";
    if (password === passwordString) {
      setTimeout(() => {
        setAuth(true);
        setloader({ loader: false });
      }, 600);
    } else {
      setloader({ error: true });
    }
  };

  const bg1 =
    "linear-gradient( to right top, #d5fefd, #e0fdff, #effbff, #fbfaff, #fffcff );";
  const bg2 =
    "linear-gradient( to left bottom, #d5fefd, #e0fdff, #effbff, #fbfaff, #fffcff );";

  if (!auth) {
    return (
      <>
        <div className="contact-area ptb-80">
          <div className="container">
            <div className="section-title">
              <h2>Verify Yourself</h2>
              <div className="bar" />
              <p>Login in with the credetials send on your mail to login</p>
            </div>
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12">
                <form id="#contactForm">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          style={{ width: "50%", margin: "auto" }}
                          type="text"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          placeholder="Password"
                        />
                        {loader.error && (
                          <div
                            style={{ width: "50%", margin: "auto" }}
                            className="help-block with-errors"
                          >
                            <ul className="list-unstyled">
                              <li style={{ color: "red" }}>Wrong Password</li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          pointerEvents: "all",
                          cursor: "pointer",
                          display: "block",
                          margin: "auto",
                        }}
                        onClick={verify}
                      >
                        {loader.loader ? "Verifying..." : "Verify"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header background={"transparent"} />
        <FullPage controls={CustomControls} duration={100}>
          {posts.map((post, i) =>
            post.data.startup_cloud ? (
              <Slide key={i}>
                <section
                  style={{ height: "100%", background: i % 2 == 0 ? bg1 : bg2 }}
                  className="ml-feedback-area ptb-80 "
                >
                  <div className="container">
                    <div className="section-title mt-5">
                      <h2>Our Success Stories</h2>
                      <div className="bar" />
                    </div>
                    <div className="ml-feedback-slides">
                      <div className="single-ml-feedback-item">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-4 col-md-6 pt-4">
                              <div className="single-blog-post">
                                <div className="blog-image">
                                  <a href="single-blog.html">
                                    <img
                                      src={post.data.featured_image.url}
                                      alt="image"
                                    />
                                  </a>
                                </div>
                                <div className="blog-post-content pt-4">
                                  <h3>
                                    <a>{post.data.name}</a>
                                  </h3>

                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida.
                                  </p>
                                  <a href="#" className="read-more-btn">
                                    Read More{" "}
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
                                      className="feather feather-arrow-right"
                                    >
                                      <line x1={5} y1={12} x2={19} y2={12} />
                                      <polyline points="12 5 19 12 12 19" />
                                    </svg>{" "}
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="col-8 pt-3">
                              <RichText
                                render={post.data.content}
                                linkResolver={linkResolver}
                              />
                            </div>
                          </div>
                        </div>
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
                  <div className="shape6 rotateme">
                    <img src="assets/img/shape4.svg" alt="shape" />
                  </div>
                  <div className="shape7">
                    <img src="assets/img/shape4.svg" alt="shape" />
                  </div>
                  <div className="shape8 rotateme">
                    <img src="assets/img/shape2.svg" alt="shape" />
                  </div>
                  {i != pages ? (
                    <div className="scroll-down">
                      <div className="scroll-down-text">SCROLL DOWN</div>
                      <div className="scroll-down-bar" />
                    </div>
                  ) : (
                    <></>
                  )}
                </section>
              </Slide>
            ) : (
              <></>
            )
          )}
        </FullPage>
      </>
    );
  }
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "success-stories")
    // {
    //   orderings: "[my.post.date desc]",
    //   pageSize: 20,
    //   ...(ref ? { ref } : null),
    // }
  );

  const pages = posts.total_pages;

  return {
    props: {
      pages,
      posts: posts ? posts.results : [],
      preview,
    },
  };
}

class CustomControls extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    getCurrentSlideIndex: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    scrollToSlide: PropTypes.func.isRequired,
    slidesCount: PropTypes.number.isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: "full-page-controls",
    style: {
      left: "50%",
      paddingTop: "10px",
      position: "fixed",
      transform: "translateX(-50%)",
    },
  };

  renderSlidesNumbers(currentSlideIndex) {
    const { slidesCount, scrollToSlide } = this.props;
    const slidesNumbers = [];
    for (let i = 0; i < slidesCount; i++) {
      const buttonProps = {
        disabled: currentSlideIndex === i,
        key: i,
        onClick: () => scrollToSlide(i),
      };
      slidesNumbers.push(
        <button type="button" {...buttonProps}>
          {i + 1}
        </button>
      );
    }
    return slidesNumbers;
  }

  render() {
    const { getCurrentSlideIndex, slidesCount, style, className } = this.props;
    const currentSlideIndex = getCurrentSlideIndex();

    return (
      <div className={className}>
        <button
          type="button"
          className="scroll-up-btn"
          disabled={currentSlideIndex === 0}
          onClick={this.props.onPrev}
        >
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 25 7.21875 L 23.59375 8.65625 L 13.6875 18.53125 C 12.902344 19.316406 12.902344 20.589844 13.6875 21.375 C 14.472656 22.160156 15.746094 22.160156 16.53125 21.375 L 23 14.875 L 23 40 C 22.988281 40.722656 23.367188 41.390625 23.992188 41.753906 C 24.613281 42.121094 25.386719 42.121094 26.007813 41.753906 C 26.632813 41.390625 27.011719 40.722656 27 40 L 27 14.875 L 33.46875 21.375 C 34.253906 22.160156 35.527344 22.160156 36.3125 21.375 C 37.097656 20.589844 37.097656 19.316406 36.3125 18.53125 L 26.40625 8.65625 Z" />
          </svg>
        </button>
        {/* {this.renderSlidesNumbers(currentSlideIndex)} */}
        <button
          type="button"
          className="scroll-down-btn"
          disabled={currentSlideIndex === slidesCount - 1}
          onClick={this.props.onNext}
        >
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 24.78125 7.96875 C 23.75 8.082031 22.976563 8.964844 23 10 L 23 35.09375 L 16.40625 28.5625 C 16.027344 28.179688 15.507813 27.964844 14.96875 27.96875 C 14.140625 27.960938 13.398438 28.464844 13.09375 29.230469 C 12.789063 30 12.988281 30.875 13.59375 31.4375 L 23.59375 41.3125 L 25 42.71875 L 26.40625 41.3125 L 36.40625 31.4375 C 37.199219 30.660156 37.214844 29.386719 36.4375 28.59375 C 35.660156 27.800781 34.386719 27.785156 33.59375 28.5625 L 27 35.09375 L 27 10 C 27.007813 9.457031 26.796875 8.9375 26.414063 8.554688 C 26.03125 8.171875 25.511719 7.960938 24.96875 7.96875 C 24.90625 7.964844 24.84375 7.964844 24.78125 7.96875 Z" />
          </svg>
        </button>
      </div>
    );
  }
}
