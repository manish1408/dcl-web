import React from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

import Link from "next/link";
import PageTitle from "components/PageTitle";
// We create this in just a tick
import Header from "components/Header";
import Footer from "components/Footer";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

// Project components & functions
import DefaultLayout from "layouts";
import { SetupRepo, PostList } from "components/home";
import { Client } from "utils/prismicHelpers";

/**
 * Blog component
 */
const Blog = ({ doc, posts }) => {
  if (doc && doc.data) {
    return (
      <>
        <DefaultLayout>
          <section className="blog-area ptb-80">
            <div className="container">
              <Head>
                <title>Distinct Cloud Labs - Blog</title>
              </Head>
              <Header />
              <PageTitle title="Our Blog" />
              <div className="row">
                <PostList posts={posts} />
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
      ...(ref ? { ref } : null),
    }
  );

  return {
    props: {
      doc,
      posts: posts ? posts.results : [],
      preview,
    },
  };
}

export default Blog;
