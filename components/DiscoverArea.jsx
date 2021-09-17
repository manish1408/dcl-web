import React from "react";
import Link from "next/link";

export default function DiscoverArea({ question, answer }) {
  return (
    <section className="discover-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="discover-image">
              <img
                src="assets/img/bigdata-analytics/discover-img1.png"
                alt="image"
              />
              <img
                src="assets/img/bigdata-analytics/discover-img2.jpg"
                alt="image"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="discover-content">
              <h2>{question}</h2>
              <p>{answer}</p>
              <Link href="/contact">
                <a className="btn btn-primary">Discover More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="analytics-shape1">
        <img
          src="assets/img/bigdata-analytics/analytics-shape1.png"
          alt="image"
        />
      </div>
    </section>
  );
}
