import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FactArea from "../components/FactArea";
import PageTitle from "../components/PageTitle";
import Head from "next/head";

export default function mvp() {
  return (
    <div>
      <Head>
        <title>Distinct Cloud Labs - MVP</title>
      </Head>
      <Header />
      <>
        <PageTitle title="MVP" />
        {/* <div className="page-title-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <h2>Create a MVP</h2>
                            </div>
                        </div>
                    </div>
                    <div className="shape1"><img src="assets/img/shape1.png" alt="shape" /></div>
                    <div className="shape2 rotateme"><img src="assets/img/shape2.svg" alt="shape" /></div>
                    <div className="shape3"><img src="assets/img/shape3.svg" alt="shape" /></div>
                    <div className="shape4"><img src="assets/img/shape4.svg" alt="shape" /></div>
                    <div className="shape5"><img src="assets/img/shape5.png" alt="shape" /></div>
                    <div className="shape6 rotateme"><img src="assets/img/shape4.svg" alt="shape" /></div>
                    <div className="shape7"><img src="assets/img/shape4.svg" alt="shape" /></div>
                    <div className="shape8 rotateme"><img src="assets/img/shape2.svg" alt="shape" /></div>
                </div> */}
        <section className="agency-about-area ptb-80">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="agency-about-img">
                  <img
                    src="assets/img/agency-image/about-img.jpg"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="agency-about-content">
                  <span className="sub-title">
                    MVP = Minimum Viable Product
                  </span>
                  <h2>
                    {" "}
                    collect the maximum amount of validated learning about
                    customers with the least effort
                  </h2>
                  <div className="bar" />
                  <p>
                    Distinct cloud helps your project to achieve an MVP in the
                    shortest time possible taking care of product market fit,
                    launch and fundraise.
                  </p>
                  <p>
                    Our team will understand your vision and turn it into a
                    polished web app using best development practices. Submit
                    your project or idea and we will get back to you.
                  </p>
                  <a href="#" className="btn btn-secondary">
                    Start
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container">
                        <div className="about-inner-area">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our History</h3>
                                        <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our Mission</h3>
                                        <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                    <div className="about-text">
                                        <h3>Who we are</h3>
                                        <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
          <div className="shape2 rotateme">
            <img src="assets/img/shape2.svg" alt="shape" />
          </div>
          <div className="shape3">
            <img src="assets/img/shape3.svg" alt="shape" />
          </div>
          <div className="shape6 rotateme">
            <img src="assets/img/shape4.svg" alt="shape" />
          </div>
          <div className="shape7">
            <img src="assets/img/shape4.svg" alt="shape" />
          </div>
          <div className="shape8 rotateme">
            <img src="assets/img/shape2.svg" alt="shape" />
          </div>
        </section>
        {/* <section className="team-area ptb-80 bg-f9f6f6">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Awesome Team</h2>
                            <div className="bar" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="team-slides owl-carousel owl-theme">
                        <div className="single-team">
                            <div className="team-image">
                                <img src="assets/img/team-image/1.jpg" alt="image" />
                            </div>
                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Josh Buttler</h3>
                                    <span>CEO &amp; Founder</span>
                                </div>
                                <ul>
                                    <li><a href="#"><i data-feather="facebook" /></a></li>
                                    <li><a href="#"><i data-feather="twitter" /></a></li>
                                    <li><a href="#"><i data-feather="linkedin" /></a></li>
                                    <li><a href="#"><i data-feather="gitlab" /></a></li>
                                </ul>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="assets/img/team-image/2.jpg" alt="image" />
                            </div>
                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Alex Maxwel</h3>
                                    <span>Marketing Manager</span>
                                </div>
                                <ul>
                                    <li><a href="#"><i data-feather="facebook" /></a></li>
                                    <li><a href="#"><i data-feather="twitter" /></a></li>
                                    <li><a href="#"><i data-feather="linkedin" /></a></li>
                                    <li><a href="#"><i data-feather="gitlab" /></a></li>
                                </ul>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="assets/img/team-image/3.jpg" alt="image" />
                            </div>
                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Janny Cotller</h3>
                                    <span>Web Developer</span>
                                </div>
                                <ul>
                                    <li><a href="#"><i data-feather="facebook" /></a></li>
                                    <li><a href="#"><i data-feather="twitter" /></a></li>
                                    <li><a href="#"><i data-feather="linkedin" /></a></li>
                                    <li><a href="#"><i data-feather="gitlab" /></a></li>
                                </ul>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="assets/img/team-image/4.jpg" alt="image" />
                            </div>
                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Jason Statham</h3>
                                    <span>UX/UI Designer</span>
                                </div>
                                <ul>
                                    <li><a href="#"><i data-feather="facebook" /></a></li>
                                    <li><a href="#"><i data-feather="twitter" /></a></li>
                                    <li><a href="#"><i data-feather="linkedin" /></a></li>
                                    <li><a href="#"><i data-feather="gitlab" /></a></li>
                                </ul>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="assets/img/team-image/5.jpg" alt="image" />
                            </div>
                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Corey Anderson</h3>
                                    <span>Project Manager</span>
                                </div>
                                <ul>
                                    <li><a href="#"><i data-feather="facebook" /></a></li>
                                    <li><a href="#"><i data-feather="twitter" /></a></li>
                                    <li><a href="#"><i data-feather="linkedin" /></a></li>
                                    <li><a href="#"><i data-feather="gitlab" /></a></li>
                                </ul>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="assets/img/team-image/1.jpg" alt="image" />
                            </div>
                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Josh Buttler</h3>
                                    <span>CEO &amp; Founder</span>
                                </div>
                                <ul>
                                    <li><a href="#"><i data-feather="facebook" /></a></li>
                                    <li><a href="#"><i data-feather="twitter" /></a></li>
                                    <li><a href="#"><i data-feather="linkedin" /></a></li>
                                    <li><a href="#"><i data-feather="gitlab" /></a></li>
                                </ul>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="assets/img/team-image/2.jpg" alt="image" />
                            </div>
                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Alex Maxwel</h3>
                                    <span>Marketing Manager</span>
                                </div>
                                <ul>
                                    <li><a href="#"><i data-feather="facebook" /></a></li>
                                    <li><a href="#"><i data-feather="twitter" /></a></li>
                                    <li><a href="#"><i data-feather="linkedin" /></a></li>
                                    <li><a href="#"><i data-feather="gitlab" /></a></li>
                                </ul>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="assets/img/team-image/3.jpg" alt="image" />
                            </div>
                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Janny Cotller</h3>
                                    <span>Web Developer</span>
                                </div>
                                <ul>
                                    <li><a href="#"><i data-feather="facebook" /></a></li>
                                    <li><a href="#"><i data-feather="twitter" /></a></li>
                                    <li><a href="#"><i data-feather="linkedin" /></a></li>
                                    <li><a href="#"><i data-feather="gitlab" /></a></li>
                                </ul>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="assets/img/team-image/4.jpg" alt="image" />
                            </div>
                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Jason Statham</h3>
                                    <span>UX/UI Designer</span>
                                </div>
                                <ul>
                                    <li><a href="#"><i data-feather="facebook" /></a></li>
                                    <li><a href="#"><i data-feather="twitter" /></a></li>
                                    <li><a href="#"><i data-feather="linkedin" /></a></li>
                                    <li><a href="#"><i data-feather="gitlab" /></a></li>
                                </ul>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <div className="team-image">
                                <img src="assets/img/team-image/5.jpg" alt="image" />
                            </div>
                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Corey Anderson</h3>
                                    <span>Project Manager</span>
                                </div>
                                <ul>
                                    <li><a href="#"><i data-feather="facebook" /></a></li>
                                    <li><a href="#"><i data-feather="twitter" /></a></li>
                                    <li><a href="#"><i data-feather="linkedin" /></a></li>
                                    <li><a href="#"><i data-feather="gitlab" /></a></li>
                                </ul>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                    </div>
                </section> */}
        <section className="ml-feedback-area ptb-80">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">How we work</span>
              <h2>
                Distinct cloud has developed through numerous startups a solid
                process to have a successful MVP and beyond.
              </h2>
              <div className="bar" />
              <p>
                An experienced Product Owner will understand your idea, think
                through the best version to build, and turn it into detailed
                requirements and wireframes.
              </p>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <div className="features-details">
                  <div className="features-details-desc">
                    <h3>The process consists in the following steps:</h3>
                    <ul className="features-details-list">
                      <li>Global Market Research</li>
                      <li>Wireframing</li>
                      <li>Architecture (Scalable and Secure)</li>
                      <li>Patent Filing (where necessary)</li>
                      <li>Design & Coding (iOS, Android, Web)</li>
                      <li>Launch Preparation</li>
                      <li>Scale</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </section>
        <FactArea></FactArea>
      </>

      <Footer />
    </div>
  );
}
