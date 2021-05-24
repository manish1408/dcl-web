import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function about() {
  return (
    <div>
      <Head>
        <title>Distinct Cloud Labs - Blog</title>
      </Head>
      <Header />
      <>
        <div className="page-title-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <h2>Our Blogs</h2>
              </div>
            </div>
          </div>
          <div className="shape1">
            <img src="assets/img/shape1.png" alt="shape" />
          </div>
          <div className="shape2 rotateme">
            <img src="assets/img/shape2.svg" alt="shape" />
          </div>
          <div className="shape3">
            <img src="assets/img/shape3.svg" alt="shape" />
          </div>
          <div className="shape4">
            <img src="assets/img/shape4.svg" alt="shape" />
          </div>
          <div className="shape5">
            <img src="assets/img/shape5.png" alt="shape" />
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
        </div>
        <section className="blog-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link href="/blogSingle">
                      <a>
                        <img src="assets/img/blog-image/1.jpg" alt="image" />
                      </a>
                    </Link>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>Admin</li>
                      <li>August 15, 2019</li>
                    </ul>
                    <h3>
                      <Link href="/blogSingle">
                        <a>The security risks of changing package owners</a>
                      </Link>
                    </h3>
                    <Link href="/blogSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link href="/blogSingle">
                      <a>
                        <img src="assets/img/blog-image/2.jpg" alt="image" />
                      </a>
                    </Link>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>Admin</li>
                      <li>August 15, 2019</li>
                    </ul>
                    <h3>
                      <Link href="/blogSingle">
                        <a>Tips to Protecting Your Business and Family</a>
                      </Link>
                    </h3>
                    <Link href="/blogSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link href="/blogSingle">
                      <a>
                        <img src="assets/img/blog-image/3.jpg" alt="image" />
                      </a>
                    </Link>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>Admin</li>
                      <li>August 15, 2019</li>
                    </ul>
                    <h3>
                      <Link href="/blogSingle">
                        <a>Protect Your Workplace from Cyber Attacks</a>
                      </Link>
                    </h3>
                    <Link href="/blogSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link href="/blogSingle">
                      <a>
                        <img src="assets/img/blog-image/4.jpg" alt="image" />
                      </a>
                    </Link>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>Admin</li>
                      <li>August 15, 2019</li>
                    </ul>
                    <h3>
                      <Link href="/blogSingle">
                        <a>The security risks of changing package owners</a>
                      </Link>
                    </h3>
                    <Link href="/blogSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link href="/blogSingle">
                      <a>
                        <img src="assets/img/blog-image/5.jpg" alt="image" />
                      </a>
                    </Link>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>Admin</li>
                      <li>August 15, 2019</li>
                    </ul>
                    <h3>
                      <Link href="/blogSingle">
                        <a>Tips to Protecting Your Business and Family</a>
                      </Link>
                    </h3>
                    <Link href="/blogSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link href="/blogSingle">
                      <a>
                        <img src="assets/img/blog-image/6.jpg" alt="image" />
                      </a>
                    </Link>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>Admin</li>
                      <li>August 15, 2019</li>
                    </ul>
                    <h3>
                      <Link href="/blogSingle">
                        <a>Protect Your Workplace from Cyber Attacks</a>
                      </Link>
                    </h3>
                    <Link href="/blogSingle">
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <Link href="/blog">
                          <a className="page-link">Prev</a>
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link href="/blog">
                          <a className="page-link">1</a>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link href="/blog">
                          <a className="page-link">2</a>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link href="/blog">
                          <a className="page-link">3</a>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link href="/blog">
                          <a className="page-link">Next</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="shape2 rotateme">
            <img src="assets/img/shape2.svg" alt="shape" />
          </div>
          <div className="shape3">
            <img src="assets/img/shape3.svg" alt="shape" />
          </div>
          <div className="shape4">
            <img src="assets/img/shape4.svg" alt="shape" />
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
      </>

      <Footer />
    </div>
  );
}
