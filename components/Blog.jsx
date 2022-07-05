import React from "react";
import AddIcon from "@material-ui/icons/Add";

export default function Blog() {
  return (
    <section className="blog-area ptb-80 bg-eef6fd">
      <div className="container">
        <div className="section-title">
          <h2>Our Recent Blogs</h2>
          <div className="bar" />
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
                      <a href="https://www.distinctcloud.io/posts/what-does-a-ux-designer-do-during-the-product-development">Mayank</a>
                    </li>
                    <li>August 26, 2021</li>
                  </ul>
                </div>
                <h3>
                  <a href="https://www.distinctcloud.io/posts/what-does-a-ux-designer-do-during-the-product-development">
                    What does a UX designer do during the product development lifecycle?
                  </a>
                </h3>
                <p>
                  Startups are like babies. They rely on constant care and nurturing to grow into respectable adults. However, if you ...
                </p>
                <a href="https://www.distinctcloud.io/posts/what-does-a-ux-designer-do-during-the-product-development" className="learn-more-btn">
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
                      <a href="https://www.distinctcloud.io/posts/software-release-planning-tips-and-tricks-by-the-distinct">Mayank</a>
                    </li>
                    <li>August 18, 2019</li>
                  </ul>
                </div>
                <h3>
                  <a href="https://www.distinctcloud.io/posts/software-release-planning-tips-and-tricks-by-the-distinct">
                  Software Release Planning: Tips and Tricks by the DCL Team
                  </a>
                </h3>
                <p>
                In Agile development, release planning is crucial. Without it, the delivery of your features can be unpredictable. This is why as a software product manager ...
                </p>
                <a href="https://www.distinctcloud.io/posts/software-release-planning-tips-and-tricks-by-the-distinct" className="learn-more-btn">
                  Read Story <AddIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div className="single-blog-post-box bg-f4faff">
              <div className="entry-thumbnail">
                <a href="https://www.distinctcloud.io/posts/how-to-reduce-time-to-market-for-digital-products">
                  <img src="assets/img/blog-image/3.jpg" alt="image" />
                </a>
              </div>
              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <a href="https://www.distinctcloud.io/posts/how-to-reduce-time-to-market-for-digital-products">Mayank</a>
                    </li>
                    <li>August 15, 2021</li>
                  </ul>
                </div>
                <h3>
                  <a href="https://www.distinctcloud.io/posts/how-to-reduce-time-to-market-for-digital-products">
                  How to Reduce Time to Market for Digital Products
                  </a>
                </h3>
                <p>
                In this article, you'll journey through time to market (TTM) from the perspective of what it means in practice. We'll start with defining TTM...
                </p>
                <a href="https://www.distinctcloud.io/posts/how-to-reduce-time-to-market-for-digital-products" className="learn-more-btn">
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
