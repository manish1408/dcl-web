import React from "react";
import Head from "next/head";

export default function custom404() {
  return (
    <>
      <Head>
        <title>Distinct Cloud Labs - 404</title>
      </Head>
      <div className="preloader">
        <div className="spinner" />
      </div>
      <section className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <div className="notfound-404">
                  <h1>Oops!</h1>
                </div>
                <h3>404 - Page not found</h3>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>
                <a href="/" className="btn btn-primary">
                  Go to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
