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
                  Quite simply, I can't give the Distinct Cloud team high enough praise. Whatever I may manage to scribble down will totally fail to represent my admiration of their abilities, and so all I will say is that any opportunity to work with RubyGarage should be grasped with both hands.
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
                  Distinct Cloud exceeded my expectations in many ways. As a first time, non-technical startup founder, I am happy to say that we had a drama-free collaboration. Their leadership and project managers are experienced and pragmatic; they understand startups and offered many helpful business suggestions. Their UX designer was superb and took my product vision to a completely new level. Their dedicated team of developers delivered a quality product on time and went out of their way to delight me as a customer.
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
                  The Distinct Cloud team definitely excels in their technical approach. Working on the engineering side, RubyGarage offered the most efficient architecture solution for our application. Another strong side this team demonstrated is business-orienting. Along with elegant technical solutions for big data storage and management, displaying detailed analytics, and ensuring security, RubyGarage handled all of the design concept for our application. They came up with an idea for how to wrap a market research tool into an appealing and interactive social voting application.
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
