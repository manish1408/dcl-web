import React from 'react'

export default function Feedback() {
  return (
    <section className="bigdata-feedback-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>What Users Saying</h2>
          <div className="bar" />
          <p>
            Our track record proves our spotless reputation. We successfully work with large enterprises and early-stage companies

          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-feedback-box">
              <div className="feedback-desc">
                <p>
                All I can say is that I totally recommend working with Distinct Cloud Labs on any online business idea that you might have. It's obvious that they know their stuff and can help you to live your startup dream no matter what.
                </p>
              </div>
              <div className="client-info">
                <img src="assets/img/author1.jpg" alt="image" />
                <h3>David Luis</h3>
                <span>Founder &amp; CEO</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-feedback-box">
              <div className="feedback-desc">
                <p>
                I wanted to let you know how impressed I am with your team here at Distinct Cloud. All of the work that has been done by you and your colleagues is astounding. It was a pleasure to work with all of you and I look forward to seeing what else you can do as we move along.
                </p>
              </div>
              <div className="client-info">
                <img src="assets/img/author2.jpg" alt="image" />
                <h3>Steven Smith</h3>
                <span>Investor, Founder Trade Cloud</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div className="single-feedback-box">
              <div className="feedback-desc">
                <p>
                Distinct Cloud is a group of very talented engineers. They excel in their technical approach and understand how data is the driving factor for any business. As such, they designed a state of the art stack for our application that accommodates both current and anticipated capacity requirements and allows our team to easily add new features and functionality without compromising on stability or scalability. 

                </p>
              </div>
              <div className="client-info">
                <img src="assets/img/author3.jpg" alt="image" />
                <h3>Sarah </h3>
                <span>One Box, CEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
