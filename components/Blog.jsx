import React from "react";
import AddIcon from "@material-ui/icons/Add";

export default function Blog() {
  return (
    <section className="blog-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Our Recent Story</h2>
          <div className="bar" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post-box bg-f4faff">
              <div className="entry-thumbnail">
                <a href="#">
                  <img src="assets/img/blog-image/1.jpg" alt="image" />
                </a>
              </div>
              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <a href="#">Admin</a>
                    </li>
                    <li>August 15, 2019</li>
                  </ul>
                </div>
                <h3>
                  <a href="#">
                    Making Peace With The Feast Or Famine Of Freelancing
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod...
                </p>
                <a href="#" className="learn-more-btn">
                  Read Story <AddIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post-box bg-f4faff">
              <div className="entry-thumbnail">
                <a href="#">
                  <img src="assets/img/blog-image/2.jpg" alt="image" />
                </a>
              </div>
              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <a href="#">Admin</a>
                    </li>
                    <li>August 18, 2019</li>
                  </ul>
                </div>
                <h3>
                  <a href="#">I Used The Web For A Day On A 50 MB Budget</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod...
                </p>
                <a href="#" className="learn-more-btn">
                  Read Story <AddIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div className="single-blog-post-box bg-f4faff">
              <div className="entry-thumbnail">
                <a href="#">
                  <img src="assets/img/blog-image/3.jpg" alt="image" />
                </a>
              </div>
              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <a href="#">Admin</a>
                    </li>
                    <li>August 15, 2019</li>
                  </ul>
                </div>
                <h3>
                  <a href="#">
                    Here are the 5 most telling signs of micromanagement
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod...
                </p>
                <a href="#" className="learn-more-btn">
                  Read Story <AddIcon />
                </a>
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
    </section>
  );
}
