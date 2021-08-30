import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    <section className="bigdata-services-area ptb-80 bg-eef6fd">
      <div className="container">
        <div className="section-title">
          <h2>Services we can help you with</h2>
          <div className="bar" />
          <p>
            We are proficient in highly complex workflows, data structures, and
            hundreds of API integrations. Check out our common capabilities
            below!
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-services-box-item">
              <div className="icon">
                <img src="assets/img/bigdata-analytics/icon1.png" alt="image" />
              </div>
              <h3>
                <Link href="service-detail/startup">
                  <a>For startups</a>
                </Link>
              </h3>
              <p>
                We are an adept digital startup app and web development company with a knack for futuristic software technology that adds wings to new venture to fly it high.

                Distinct Cloud is the right digital junction helping Startups, New Ventures and Small Businesses with comprehensive startup solutions at the most cost-effective prices.
              </p>
              <Link href="service-detail/startup">
                <a className="learn-more-btn">
                  <i data-feather="arrow-right" />
                  Learn More
                </a>
              </Link>
              <div className="shape">
                <img
                  src="assets/img/bigdata-analytics/rectangle.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-services-box-item">
              <div className="icon">
                <img src="assets/img/bigdata-analytics/icon2.png" alt="image" />
              </div>
              <h3>
                <Link href="service-detail/enterprise">
                  <a>For enterprises</a>
                </Link>
              </h3>
              <p>
                Distinct Cloud helps tech companies to build a remote dedicated
                team of developers or to expand an existing one.
              </p>
              <Link href="service-detail/enterprise">
                <a className="learn-more-btn">
                  <i data-feather="arrow-right" />
                  Learn More
                </a>
              </Link>

              <div className="shape">
                <img
                  src="assets/img/bigdata-analytics/rectangle.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-services-box-item">
              <div className="icon">
                <img src="assets/img/bigdata-analytics/icon3.png" alt="image" />
              </div>
              <h3>
                <Link href="service-detail/design">
                  <a>Design Services</a>
                </Link>
              </h3>
              <p>
                We provide web app design services that focus both on solving
                business problems and meeting user needs. We create custom web
                app designs that guarantee a great user experience.
              </p>
              <Link href="service-detail/design">
                <a className="learn-more-btn">
                  <i data-feather="arrow-right" />
                  Learn More
                </a>
              </Link>
              <div className="shape">
                <img
                  src="assets/img/bigdata-analytics/rectangle.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-services-box-item">
              <div className="icon">
                <img src="assets/img/bigdata-analytics/icon4.png" alt="image" />
              </div>
              <h3>
                <Link href="service-detail/testing">
                  <a>Software Testing</a>
                </Link>
              </h3>
              <p>
                The Distinct Cloud team assists companies in reducing costs,
                eliminating risks, and providing great user experiences.
              </p>
              <Link href="service-detail/testing">
                <a className="learn-more-btn">
                  <i data-feather="arrow-right" />
                  Learn More
                </a>
              </Link>
              <div className="shape">
                <img
                  src="assets/img/bigdata-analytics/rectangle.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-services-box-item">
              <div className="icon">
                <img src="assets/img/bigdata-analytics/icon5.png" alt="image" />
              </div>
              <h3>
                <Link href="service-detail/webdev">
                  <a>Web Development</a>
                </Link>
              </h3>
              <p>
                We provide web development services for fast-growing companies
                looking to integrate business processes, reduce workload, and
                build new products.
              </p>
              <Link href="service-detail/webdev">
                <a className="learn-more-btn">
                  <i data-feather="arrow-right" />
                  Learn More
                </a>
              </Link>
              <div className="shape">
                <img
                  src="assets/img/bigdata-analytics/rectangle.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-services-box-item">
              <div className="icon">
                <img src="assets/img/bigdata-analytics/icon6.png" alt="image" />
              </div>
              <h3>
                <Link href="service-detail/mobdev">
                  <a>Mobile Development</a>
                </Link>
              </h3>
              <p>
                We provide iOS and Android mobile application development
                services so you can reach your customers on their favorite
                devices.
              </p>
              <Link href="service-detail/mobdev">
                <a className="learn-more-btn">
                  <i data-feather="arrow-right" />
                  Learn More
                </a>
              </Link>
              <div className="shape">
                <img
                  src="assets/img/bigdata-analytics/rectangle.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
