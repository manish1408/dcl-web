import React from 'react'

export default function Newsletter() {
  return (
    <section className="newsletter-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="newsletter-image">
              <img src="assets/img/bigdata-analytics/newsletter.jpg" alt="image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 p-0">
            <div className="newsletter-content">
              <h2>Interested in our services?</h2>
              <form className="newsletter-form">
                <input type="email" className="input-newsletter" placeholder="Enter your business email here" />
                <button type="submit">Sign Up Free</button>
              </form>
              <p>
                We’ll contact you within 24 hours with more information on our next steps. In the meantime, you can check out our
                <a href="https://www.distinctcloud.io/blog">
                  blog
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
