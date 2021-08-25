import React from 'react'

export default function Banner() {
  return (
    <section className="bigdata-analytics-banner">
      <div className="container">
        <div className="bigdata-analytics-content">
          <h1>A better way to build</h1>
          <p>
            Emerging software development and consulting company in India.
            We make custom Mobile Apps, Web & Enterprise Solutions for Startups, Enterprises & Mid-Scale Businesses.
          </p>

          <a href="https://form.typeform.com/to/gZjdpopp"
            data-mode="popup"
            data-size="100" target="_blank" className="btn btn-primary">Tell us about your project</a>
        </div>
      </div>


      <div className="banner-boxes-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <i data-feather="server" />
                </div>
                <h3>Ecommerce Platform</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <i data-feather="code" />
                </div>
                <h3>Customized Plan</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-banner-boxes">
                <div className="icon">
                  <i data-feather="users" />
                </div>
                <h3>Implement Solution</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
