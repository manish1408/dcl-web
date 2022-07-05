import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    <section className="bigdata-services-area ptb-80 bg-eef6fd">
      <div className="container">
        <div className="section-title">
          <h2>Technologies we can help you with</h2>
          <div className="bar" />
          <p>
            We are proficient in highly complex workflows, data structures, and
            hundreds of API integrations. Check out our common capabilities
            below!
          </p>
        </div>
        <div className="row">
          {/* <div className="col-lg-4 col-md-6 col-sm-12">
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
                We are an adept digital company helping new ventures and
                startups to fly high through cutting edge software technology
                that adds wings to their project's success.
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
                We specialize in designing customized user-friendly apps with a
                back-end interface that make life easier for both you and your
                customers.
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
          </div> */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-services-box-item">
              <div className="icon">
                <img src="assets/img/bigdata-analytics/icon4.png" alt="image" />
              </div>
              <h3>
                <Link href="service-detail/testing">
                  <a>Web3, Blockchain</a>
                </Link>
              </h3>
              <p>
                The internet is demanding an upgrade to web3.
                Distinct Cloud team assists companies in simplifying complexity of Web3 development.
              </p>
              <div className="row mt-4 tech-we-work">
                <div className="col text-center">
                  <img
                    src="assets/img/tech/Blockchain.svg"
                    alt="Technology"
                  />
                </div>
                <div className="col text-center">
                  <img
                    src="assets/img/tech/rust_a971271085.svg"
                    alt="Technology"
                  />
                </div>
                <div className="col text-center">
                  <img
                    src="assets/img/tech/Solidity_logo.svg"
                    alt="Technology"
                  />
                </div>
              </div>
              {/* <Link href="service-detail/testing">
                <a className="learn-more-btn">
                  <i data-feather="arrow-right" />
                  Learn More
                </a>
              </Link> */}
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
              {/* <Link href="service-detail/webdev">
                <a className="learn-more-btn">
                  <i data-feather="arrow-right" />
                  Learn More
                </a>
              </Link> */}
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
                  <a>iOS, Android</a>
                </Link>
              </h3>
              <p>
                We provide iOS and Android App development which allows you to
                reach your customers on their favorite mobile device.
              </p>
              {/* <Link href="service-detail/mobdev">
                <a className="learn-more-btn">
                  <i data-feather="arrow-right" />
                  Learn More
                </a>
              </Link> */}
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
