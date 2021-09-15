import React from 'react'

export default function Banner() {
  return (
    <section className="bigdata-analytics-banner">
      <div className="container">
        <div className="bigdata-analytics-content">
          <h1>A better way to build</h1>
          <p>
            Emerging software development and consulting company in India.
            We make mobile apps, web solutions, and enterprise applications for startups, mid-sized businesses, and enterprises.
          </p>

          <button data-toggle="modal" data-target="#enquiryModal" className="btn btn-primary">Free Consultation</button>
        </div>
      </div>


      <div className="banner-boxes-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                <i className="flaticon-support" />
                </div>
                <h3>4+ Years in Business</h3>
                
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                <i className="flaticon-software" />
                </div>
                <h3>60+ Successful Projects</h3>
                
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-banner-boxes">
                <div className="icon">
                <i className="flaticon-star" />
                </div>
                <h3>60+ In-House Talents</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
