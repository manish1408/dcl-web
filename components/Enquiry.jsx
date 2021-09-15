import React from 'react'

export default function Enquiry() {
  return (
    <>
      <div className="modal fade" id="enquiryModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body enquiry-modal">

              <div className="industries-serve-area ptb-80" style={{borderRadius:'4px',border: 'solid 1px transparent'}}>
                <button type="button" className="close enquiry-close-btn" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <div className="container">
                  <div className="agency-cta-content">
                    <h6> Leave us a message. We'll get back to you within 1 business day.</h6>
                  </div>

                </div>
              </div>


              <div className="form-holder">


              <div className="text-center"></div>
              <form
                action="https://getform.io/f/5ab6bdb6-7de3-43b0-96c0-7b8f170922cd"
                method="POST"
              >
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder="Name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="Email"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="form-control"
                        required
                        data-error="Please enter your company name"
                        placeholder="Company"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>


                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        name="message"
                        className="form-control message-filed"
                        id="message"
                        required
                        data-error="Please describe your request here"
                        placeholder="Describe your request here"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="nda" id="nda" />
                      <label className="custom-control-label" htmlFor="nda">Send me your NDA </label>
                    </div>

                  </div>


                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary btn-block mt-4">
                      Request project
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                  </div>
                </div>
              </form>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>

  )
}
