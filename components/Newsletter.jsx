import Link from "next/link";
import React from "react";

export default function Newsletter() {
  return (
    <section className="newsletter-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="newsletter-image">
              <img
                src="assets/img/bigdata-analytics/newsletter.jpg"
                alt="image"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 p-0">
            <div className="newsletter-content">
              <h2>Hire and manage remote developers</h2>
              <div className="mt-2 mb-4 row">
                <Link href="/scheduleCall">
                  <a className="btn btn-primary">Talk to us</a>
                </Link>
              </div>
              <p>
                Tell us the skills you need and we'll find the best developer
                for you in days, not weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
