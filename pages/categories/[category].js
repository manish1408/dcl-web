import React, { useEffect, useState } from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Header from "components/Header";

import { queryRepeatableDocuments } from "utils/queries";
import Link from "next/link";
import { hrefResolver, linkResolver } from "prismic-configuration";

// Project components
import { PostList } from "components/home";
import DefaultLayout from "layouts";
import { BackButton, SliceZone } from "components/post";

// Project functions & styles
import { Client } from "utils/prismicHelpers";
// import { postStyles } from "styles";
import Footer from "components/Footer";
import PageTitle from "components/PageTitle";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { Check, Person, Search } from "@material-ui/icons";
import CheckIcon from "@material-ui/icons/Check";
import LabelIcon from "@material-ui/icons/Label";
// import SearchComponent from "../components/SearchComponent";
import Prismic from "@prismicio/client";
import PostDate from "../../components/home/PostList/PostDate";
// import { hrefResolver, linkResolver } from "prismic-configuration";
import SearchComponent from "components/SearchComponent";

/**
 * Post page component
 */
const Category = ({ posts, category }) => {
  if (posts) {
    return (
      <>
        <DefaultLayout>
          <section className="blog-area ptb-80">
            <div className="container">
              <Head>
                <title>{"Archive - " + category.data.categories}</title>
              </Head>
              <Header />
              <PageTitle title={"Archive - " + category.data.categories} />
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
  return null;
};

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {
  const data = params.category;
  const { ref } = previewData;

  const category = (await Client().getByID(data)) || {};

  const posts =
    (await Client().query([
      Prismic.Predicates.at("document.type", "blog_post"),
      Prismic.Predicates.at("my.blog_post.categories.categories", data),
    ])) || {};

  return {
    props: {
      posts: posts ? posts.results : [],
      category,
      preview,
    },
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === "tag");
  return {
    paths: documents.map((doc) => `/categories/${doc.data.categories}`),
    fallback: true,
  };
}

export default Category;
