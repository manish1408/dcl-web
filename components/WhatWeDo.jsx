import React from 'react'

export default function WhatWeDo() {
  return (
    <section className="what-we-do-area ptb-80 bg-eef6fd">
      <div className="container">
        <div className="section-title">
          <h2>Hire developers that want to help build your vision</h2>
          <div className="bar" />
          <p>
            We help companies to build software products in a
            fraction of the time and cost of traditional development.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-what-we-do-box">
              <div className="icon">
                <i className="flaticon-monitor" />
              </div>
              <h3><a href="single-services.html">Scale and rapidly grow your software team</a></h3>
              <p>
                Skip the endless interviews, the complex onboarding, and the new-hire paperwork. We already found and vetted talented team members.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-what-we-do-box">
              <div className="icon">
                <i className="flaticon-idea" />
              </div>
              <h3><a href="single-services.html">The best developers, managed for you</a></h3>
              <p>
                Exceed your customers' expectations with blazing-fast apps that adapt to their browsing habits and engage them when and where they're most receptive.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div className="single-what-we-do-box">
              <div className="icon">
                <i className="flaticon-software" />
              </div>
              <h3><a href="single-services.html">Launch faster, with peace of mind</a></h3>
              <p>
                Quality fixed price plans backed by our 100% money-back guarantee will allow you to launch early and iterate often.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
