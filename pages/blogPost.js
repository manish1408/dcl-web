import React, { Component } from "react";
// RichText is give to us
import { RichText } from "prismic-reactjs";
// A new API request that will create in just a tick
import { getBlogPostAPI } from "../api";
import linkResolver from "../helpers";
// Here we are reusing our layout again
import DefaultLayout from "../layouts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

export default class BlogPost extends Component {
  static async getInitialProps(context) {
    // we get the slug of the post so that we can
    // query the API with it
    const { slug } = context.query;
    const response = await getBlogPostAPI(slug);
    return {
      post: response,
    };
  }

  render() {
    const post = this.props.post.data;
    return (
      <>
        <Header />
        <PageTitle title={post.title.length ? post.title[0].text : ""} />
        <section className="blog-details-area ptb-80">
          <div className="container">
            <div className="row">
              <article>
                {/* <DefaultLayout></DefaultLayout> */}
                {/* {posts.map((post, index) => ( */}
                <div className="col-lg-12 col-md-12">
                  <div className="blog-details-desc">
                    <div className="article-image">
                      <img src={post.banner_image.url} alt="image" />
                    </div>
                    <div className="article-content">
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <i data-feather="clock" />{" "}
                            <a>{new Date(post.time).toLocaleDateString()}</a>
                          </li>
                        </ul>
                      </div>
                      <h3>{post.heading.length ? post.heading[0].text : ""}</h3>
                      {/* Here we pass our rich text field to Prismics RichText renderer, along with our linkResolver */}
                      {RichText.render(post.body, linkResolver)}
                    </div>
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
                  </div>
                </div>
                {/* ))} */}
              </article>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}
