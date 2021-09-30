import React, { useState } from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import ReactPaginate from "react-paginate";

import PageTitle from "components/PageTitle";
// We create this in just a tick
import Header from "components/Header";
import Footer from "components/Footer";
import Loader from "components/Loader";

// Project components & functions
import DefaultLayout from "layouts";
import { SetupRepo, PostList } from "components/home";
import { Client } from "utils/prismicHelpers";

/**
 * Blog component
 */
const Blog = ({ doc, posts, pages }) => {
  const [otherPage, setOtherPage] = useState(posts);
  const [loader, setloader] = useState(false);

  const pagginationHandler = (page) => {
    window.scrollTo(0, 0);
    setloader(true);
    const pageNumber = page.selected + 1;
    Client()
      .query(Prismic.Predicates.at("document.type", "blog_post"), {
        pageSize: 20,
        page: pageNumber,
      })
      .then((response) => {
        setOtherPage(response.results);
        setloader(false);
      });
  };
  if (doc && doc.data) {
    return (
      <>
        <DefaultLayout>
          <PageTitle title="Our Blog" />
          <section className="blog-area ptb-80">
            <div className="container">
              <Head>
                <title>Distinct Cloud Labs - Blog</title>
              </Head>
              <Header />
              <div className="row">
                {loader ? (
                  <div className="loader">
                    <Loader />
                  </div>
                ) : (
                  <PostList posts={otherPage} />
                )}
                <div className="col-lg-12 col-md-12">
                  <div className="pagination-area">
                    <nav aria-label="Page navigation">
                      <ReactPaginate
                        nextLabel={"Next"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        previousLabel={"Prev"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        breakLabel={"..."}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        containerClassName={"pagination justify-content-center"}
                        activeClassName={"active"}
                        pageCount={pages} //page couni
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={pagginationHandler}
                      />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </DefaultLayout>

        <Footer />
      </>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc = (await client.getSingle("blog_post", ref ? { ref } : null)) || {};

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    {
      orderings: "[my.post.date desc]",
      pageSize: 20,
      ...(ref ? { ref } : null),
    }
  );

  const pages = posts.total_pages;

  return {
    props: {
      doc,
      posts: posts ? posts.results : [],
      preview,
      pages,
    },
  };
}

export default Blog;
