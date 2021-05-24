import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function serviceSingle() {
  return (
    <div>
      <Head>
        <title>Distinct Cloud Labs - Blog</title>
      </Head>
      <Header />
      <>
        {/* <div className="page-title-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <h2>Blog Details</h2>
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
        <section className="blog-details-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="blog-details-desc">
                  <div className="article-image">
                    <img src="assets/img/blog-image/1.jpg" alt="image" />
                  </div>
                  <div className="article-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <i data-feather="clock" />{" "}
                          <a href="#">September 31, 2020</a>
                        </li>
                        <li>
                          <i data-feather="user" /> <a href="#">Steven Smith</a>
                        </li>
                      </ul>
                    </div>
                    <h3>The security risks of changing package owners</h3>
                    <p>
                      Quuntur magni dolores eos qui ratione voluptatem sequi
                      nesciunt. Neque porro quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam dolor sit amet,
                      consectetur adipisicing.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in sed quia non
                      numquam eius modi tempora incidunt ut labore et dolore
                      magnam aliquam quaerat voluptatem.
                    </p>
                    <blockquote className="wp-block-quote">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <cite>Tom Cruise</cite>
                    </blockquote>
                    <p>
                      Quuntur magni dolores eos qui ratione voluptatem sequi
                      nesciunt. Neque porro quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam dolor sit amet,
                      consectetur adipisicing.
                    </p>
                    {/* <ul className="wp-block-gallery columns-3">
                      <li className="blocks-gallery-item">
                        <figure>
                          <img src="assets/img/blog-image/8.jpg" alt="image" />
                        </figure>
                      </li>
                      <li className="blocks-gallery-item">
                        <figure>
                          <img src="assets/img/blog-image/7.jpg" alt="image" />
                        </figure>
                      </li>
                      <li className="blocks-gallery-item">
                        <figure>
                          <img src="assets/img/blog-image/9.jpg" alt="image" />
                        </figure>
                      </li>
                    </ul> */}
                    <h3>Four major elements that we offer:</h3>
                    <ul className="features-list">
                      <li>
                        <i data-feather="check" /> Scientific Skills For getting
                        a better result
                      </li>
                      <li>
                        <i data-feather="check" /> Communication Skills to
                        getting in touch
                      </li>
                      <li>
                        <i data-feather="check" /> A Career Overview opportunity
                        Available
                      </li>
                      <li>
                        <i data-feather="check" /> A good Work Environment For
                        work
                      </li>
                    </ul>
                    <h3>Setting the mood with incense</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in sed quia non
                      numquam eius modi tempora incidunt ut labore et dolore
                      magnam aliquam quaerat voluptatem.
                    </p>
                    <h3>The Rise Of Smarketing And Why You Need It</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>
                  </div>
                  {/* <div className="article-footer">
                    <div className="article-tags">
                      <a href="#">Fashion</a>
                      <a href="#">Smart</a>
                      <a href="#">Marketing</a>
                      <a href="#">Games</a>
                      <a href="#">Travel</a>
                    </div>
                  </div> */}
                  <div className="startp-post-navigation">
                    <div className="prev-link-wrapper">
                      <div className="info-prev-link-wrapper">
                        <a href="#">
                          <span className="image-prev">
                            <img
                              src="assets/img/blog-image/2.jpg"
                              alt="image"
                            />
                            <span className="post-nav-title">Prev</span>
                          </span>
                          <span className="prev-link-info-wrapper">
                            <span className="prev-title">
                              Don't buy a tech gift until you read these rules
                            </span>
                            <span className="meta-wrapper">
                              <span className="date-post">
                                January 21, 2020
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="next-link-wrapper">
                      <div className="info-next-link-wrapper">
                        <a href="#">
                          <span className="next-link-info-wrapper">
                            <span className="next-title">
                              The golden rule of buying a phone as a gift
                            </span>
                            <span className="meta-wrapper">
                              <span className="date-post">
                                January 21, 2020
                              </span>
                            </span>
                          </span>
                          <span className="image-next">
                            <img
                              src="assets/img/blog-image/3.jpg"
                              alt="image"
                            />
                            <span className="post-nav-title">Next</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="comments-area">
                    <h3 className="comments-title">2 Comments:</h3>
                    <ol className="comment-list">
                      <li className="comment">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <img
                                src="assets/img/client-image/1.jpg"
                                className="avatar"
                                alt="image"
                              />
                              <b className="fn">John Jones</b>
                              <span className="says">says:</span>
                            </div>
                            <div className="comment-metadata">
                              <a href="#">
                                <time>April 24, 2019 at 10:59 am</time>
                              </a>
                            </div>
                          </footer>
                          <div className="comment-content">
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen.
                            </p>
                          </div>
                          <div className="reply">
                            <a href="#" className="comment-reply-link">
                              Reply
                            </a>
                          </div>
                        </article>
                        <ol className="children">
                          <li className="comment">
                            <article className="comment-body">
                              <footer className="comment-meta">
                                <div className="comment-author vcard">
                                  <img
                                    src="assets/img/client-image/2.jpg"
                                    className="avatar"
                                    alt="image"
                                  />
                                  <b className="fn">Steven Smith</b>
                                  <span className="says">says:</span>
                                </div>
                                <div className="comment-metadata">
                                  <a href="#">
                                    <time>April 24, 2019 at 10:59 am</time>
                                  </a>
                                </div>
                              </footer>
                              <div className="comment-content">
                                <p>
                                  Lorem Ipsum has been the industry’s standard
                                  dummy text ever since the 1500s, when an
                                  unknown printer took a galley of type and
                                  scrambled it to make a type specimen.
                                </p>
                              </div>
                              <div className="reply">
                                <a href="#" className="comment-reply-link">
                                  Reply
                                </a>
                              </div>
                            </article>
                          </li>
                          <ol className="children">
                            <li className="comment">
                              <article className="comment-body">
                                <footer className="comment-meta">
                                  <div className="comment-author vcard">
                                    <img
                                      src="assets/img/client-image/3.jpg"
                                      className="avatar"
                                      alt="image"
                                    />
                                    <b className="fn">Sarah Taylor</b>
                                    <span className="says">says:</span>
                                  </div>
                                  <div className="comment-metadata">
                                    <a href="#">
                                      <time>April 24, 2019 at 10:59 am</time>
                                    </a>
                                  </div>
                                </footer>
                                <div className="comment-content">
                                  <p>
                                    Lorem Ipsum has been the industry’s standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen.
                                  </p>
                                </div>
                                <div className="reply">
                                  <a href="#" className="comment-reply-link">
                                    Reply
                                  </a>
                                </div>
                              </article>
                            </li>
                          </ol>
                        </ol>
                      </li>
                      <li className="comment">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <img
                                src="assets/img/client-image/4.jpg"
                                className="avatar"
                                alt="image"
                              />
                              <b className="fn">John Doe</b>
                              <span className="says">says:</span>
                            </div>
                            <div className="comment-metadata">
                              <a href="#">
                                <time>April 24, 2019 at 10:59 am</time>
                              </a>
                            </div>
                          </footer>
                          <div className="comment-content">
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen.
                            </p>
                          </div>
                          <div className="reply">
                            <a href="#" className="comment-reply-link">
                              Reply
                            </a>
                          </div>
                        </article>
                        <ol className="children">
                          <li className="comment">
                            <article className="comment-body">
                              <footer className="comment-meta">
                                <div className="comment-author vcard">
                                  <img
                                    src="assets/img/client-image/5.jpg"
                                    className="avatar"
                                    alt="image"
                                  />
                                  <b className="fn">James Anderson</b>
                                  <span className="says">says:</span>
                                </div>
                                <div className="comment-metadata">
                                  <a href="#">
                                    <time>April 24, 2019 at 10:59 am</time>
                                  </a>
                                </div>
                              </footer>
                              <div className="comment-content">
                                <p>
                                  Lorem Ipsum has been the industry’s standard
                                  dummy text ever since the 1500s, when an
                                  unknown printer took a galley of type and
                                  scrambled it to make a type specimen.
                                </p>
                              </div>
                              <div className="reply">
                                <a href="#" className="comment-reply-link">
                                  Reply
                                </a>
                              </div>
                            </article>
                          </li>
                        </ol>
                      </li>
                    </ol>
                    <div className="comment-respond">
                      <h3 className="comment-reply-title">Leave a Reply</h3>
                      <form className="comment-form">
                        <p className="comment-notes">
                          <span id="email-notes">
                            Your email address will not be published.
                          </span>
                          Required fields are marked
                          <span className="required">*</span>
                        </p>
                        <p className="comment-form-comment">
                          <label>Comment</label>
                          <textarea
                            name="comment"
                            id="comment"
                            cols={45}
                            rows={5}
                            maxLength={65525}
                            required="required"
                            defaultValue={""}
                          />
                        </p>
                        <p className="comment-form-author">
                          <label>
                            Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="author"
                            name="author"
                            required="required"
                          />
                        </p>
                        <p className="comment-form-email">
                          <label>
                            Email <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required="required"
                          />
                        </p>
                        <p className="comment-form-url">
                          <label>Website</label>
                          <input type="url" id="url" name="url" />
                        </p>
                        <p className="comment-form-cookies-consent">
                          <input
                            type="checkbox"
                            defaultValue="yes"
                            name="wp-comment-cookies-consent"
                            id="wp-comment-cookies-consent"
                          />
                          <label htmlFor="wp-comment-cookies-consent">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </p>
                        <p className="form-submit">
                          <input
                            type="submit"
                            name="submit"
                            id="submit"
                            className="submit"
                            defaultValue="Post Comment"
                          />
                        </p>
                      </form>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <aside className="widget-area" id="secondary">
                  <section className="widget widget_search">
                    <form className="search-form">
                      <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search..."
                        />
                      </label>
                      <button type="submit">
                        <i data-feather="search" />
                      </button>
                    </form>
                  </section>
                  <section className="widget widget_startp_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>
                    <article className="item">
                      <a href="#" className="thumb">
                        <span className="fullimage cover bg1" role="img" />
                      </a>
                      <div className="info">
                        <time dateTime="2019-06-30">June 10, 2019</time>
                        <h4 className="title usmall">
                          <a href="#">
                            Making Peace With The Feast Or Famine Of Freelancing
                          </a>
                        </h4>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="item">
                      <a href="#" className="thumb">
                        <span className="fullimage cover bg2" role="img" />
                      </a>
                      <div className="info">
                        <time dateTime="2019-06-30">June 21, 2019</time>
                        <h4 className="title usmall">
                          <a href="#">
                            I Used The Web For A Day On A 50 MB Budget
                          </a>
                        </h4>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="item">
                      <a href="#" className="thumb">
                        <span className="fullimage cover bg3" role="img" />
                      </a>
                      <div className="info">
                        <time dateTime="2019-06-30">June 30, 2019</time>
                        <h4 className="title usmall">
                          <a href="#">
                            How To Create A Responsive Popup Gallery?
                          </a>
                        </h4>
                      </div>
                      <div className="clear" />
                    </article>
                  </section>
                  <section className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>
                    <ul>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Technology</a>
                      </li>
                      <li>
                        <a href="#">Tips</a>
                      </li>
                      <li>
                        <a href="#">Uncategorized</a>
                      </li>
                    </ul>
                  </section>
                  <section className="widget widget_archive">
                    <h3 className="widget-title">Archives</h3>
                    <ul>
                      <li>
                        <a href="#">May 2019</a>
                      </li>
                      <li>
                        <a href="#">April 2019</a>
                      </li>
                      <li>
                        <a href="#">June 2019</a>
                      </li>
                    </ul>
                  </section>
                  <section className="widget widget_meta">
                    <h3 className="widget-title">Meta</h3>
                    <ul>
                      <li>
                        <a href="#">Log in</a>
                      </li>
                      <li>
                        <a href="#">
                          Entries{" "}
                          <abbr title="Really Simple Syndication">RSS</abbr>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Comments{" "}
                          <abbr title="Really Simple Syndication">RSS</abbr>
                        </a>
                      </li>
                      <li>
                        <a href="#">WordPress.org</a>
                      </li>
                    </ul>
                  </section>
                  <section className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>
                    <div className="tagcloud">
                      <a href="#">
                        IT <span className="tag-link-count"> (3)</span>
                      </a>
                      <a href="#">
                        Spacle <span className="tag-link-count"> (3)</span>
                      </a>
                      <a href="#">
                        Games <span className="tag-link-count"> (2)</span>
                      </a>
                      <a href="#">
                        Fashion <span className="tag-link-count"> (2)</span>
                      </a>
                      <a href="#">
                        Travel <span className="tag-link-count"> (1)</span>
                      </a>
                      <a href="#">
                        Smart <span className="tag-link-count"> (1)</span>
                      </a>
                      <a href="#">
                        Marketing <span className="tag-link-count"> (1)</span>
                      </a>
                      <a href="#">
                        Tips <span className="tag-link-count"> (2)</span>
                      </a>
                    </div>
                  </section>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </div>
  );
}
