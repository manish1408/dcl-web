import React, { useEffect, useState } from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Header from "components/Header";

import { queryRepeatableDocuments } from "utils/queries";
import Link from "next/link";
import { hrefResolver, linkResolver } from "prismic-configuration";

// Project components
import DefaultLayout from "layouts";
import { BackButton, SliceZone } from "components/post";

import { Client } from "utils/prismicHelpers";
import Footer from "components/Footer";
import PageTitle from "components/PageTitle";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelIcon from "@material-ui/icons/Label";
import Prismic from "@prismicio/client";
import PostDate from "../../components/home/PostList/PostDate";


/**
 * Post page component
 */
const Post = ({ post, postList, featuredPosts, categories, data }) => {
  // console.log(data);
  if (post && post.data) {
  

    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";
    const pageurl = "https://www.distinctcloud.io/posts/" + post.uid;
    const pageDescription = RichText.asText(post.data.description) || title;
    let pageKeywords = RichText.asText(post.data.keywords) || title;;


    return (
      // <DefaultLayout>
      <>
        <Head>
          <title>{title}</title>

          <meta name="title" content={title} />
          <meta name="description" content={pageDescription} />
          <meta name="keywords" content={pageKeywords} />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />


          <meta property="og:type" content="website" />
          <meta property="og:url" content={pageurl} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:image" content={post.data.banner_image.url} />

          <meta property="twitter:card" content={post.data.banner_image.url} />
          <meta property="twitter:url" content={pageurl} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={pageDescription} />
          <meta property="twitter:image" content={post.data.banner_image.url} />


        </Head>
        <Header></Header>
        <PageTitle title={title.length ? title : ""} />
        {/* <button onClick={fetchSearchResult}>Submit</button> */}

        {/* <p>HELLOw {JSON.stringify(value)}</p> */}

        <section className="blog-details-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="blog-details-desc">
                  <div className="article-image">
                    <img src={post.data.banner_image.url} alt="image" />
                  </div>
                  <div className="article-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <AccessTimeIcon />{" "}
                          <a>
                            <PostDate date={post.data.date} />
                          </a>
                        </li>
                        {post.data.categories ? (
                          <li key={post.id}>
                            <LabelIcon />{" "}
                            <a>{post.data.categories[0].categories.slug}</a>
                          </li>
                        ) : (
                          <a>Uncategorised</a>
                        )}
                      </ul>
                    </div>
                    <div className="blog-content">
                      {RichText.render(post.data.body, linkResolver)}
                      {/* <SliceZone sliceZone={post.data.body} /> */}
                    </div>
                  </div>
                  <div className="startp-post-navigation">
                    {postList.results.length !== 0 ? (
                      <div className="prev-link-wrapper">
                        <div className="info-prev-link-wrapper">
                          <Link
                            as={linkResolver(postList.results[0])}
                            href={hrefResolver(postList.results[0])}
                          >
                            <a>
                              <span className="image-prev">
                                <img
                                  src={
                                    postList.results[0].data.featured_image.url
                                  }
                                  alt="image"
                                />
                                <span className="post-nav-title">Prev</span>
                              </span>
                              <span className="prev-link-info-wrapper">
                                <span className="prev-title">
                                  {postList.results[0].data.title[0].text}
                                </span>
                                <span className="meta-wrapper">
                                  <span className="date-post">
                                    <PostDate
                                      date={postList.results[0].data.date}
                                    />
                                  </span>
                                </span>
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

                    {postList.results.length !== 0 && postList.results[1] ? (
                      <div className="next-link-wrapper">
                        <div className="info-next-link-wrapper">
                          <Link
                            as={linkResolver(postList.results[1])}
                            href={hrefResolver(postList.results[1])}
                          >
                            <a>
                              <span className="next-link-info-wrapper">
                                <span className="next-title">
                                  {postList.results[1].data.title[0].text}
                                </span>
                                <span className="meta-wrapper">
                                  <span className="date-post">
                                    <PostDate
                                      date={postList.results[1].data.date}
                                    />
                                  </span>
                                </span>
                              </span>
                              <span className="image-next">
                                <img
                                  src={
                                    postList.results[1].data.featured_image.url
                                  }
                                  alt="image"
                                />
                                <span className="post-nav-title">Next</span>
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
              {/* <div className="col-lg-4 col-md-12">
                <aside className="widget-area" id="secondary">
                  <section className="widget widget_search">
                   
                    <SearchComponent />
                  </section>
                  <section className="widget widget_startp_posts_thumb">
                    <h3 className="widget-title">Featured Posts</h3>
                    {featuredPosts.results.length !== 0 ? (
                      featuredPosts.results.map((featuredPost) => (
                        <article key={featuredPost.id} className="item">
                          <Link
                            as={linkResolver(featuredPost)}
                            href={hrefResolver(featuredPost)}
                          >
                            <a className="thumb">
                              <span
                                className="fullimage cover bg1"
                                style={{
                                  backgroundImage: `url(${featuredPost.data.featured_image.url})`,
                                }}
                                role="img"
                              />
                            </a>
                          </Link>

                          <div className="info">
                            <time dateTime="2019-06-30">
                              {<PostDate date={featuredPost.data.date} />}
                            </time>
                            <h4 className="title usmall">
                              <Link
                                as={linkResolver(featuredPost)}
                                href={hrefResolver(featuredPost)}
                              >
                                <a>{featuredPost.data.title[0].text}</a>
                              </Link>
                            </h4>
                          </div>
                          <div className="clear" />
                        </article>
                      ))
                    ) : (
                      <p>No Featured Post</p>
                    )}

                   
                  </section>
                  <section className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    {categories.results.length !== 0 ? (
                      categories.results.map((categorie) => (
                        <ul key={categorie.id}>
                          <li>
                            <Link
                              as={linkResolverCat(categorie)}
                              href={hrefResolverCat(categorie)}
                            >
                              <a>{categorie.data.categories}</a>
                            </Link>
                          </li>
                        </ul>
                      ))
                    ) : (
                      <p>No Featured Post</p>
                    )}
                  </section>

                  <section className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>
                    <div className="tagcloud">
                      {post.tags.length !== 0 ? (
                        post.tags.map((tag, key) => (
                          <a key={key} className="item">
                            {tag}
                          </a>
                        ))
                      ) : (
                        <p>No Matching Tags</p>
                      )}
                     
                    </div>
                  </section>
                </aside>
              </div> */}
            </div>
          </div>
        </section>

        {/* <div className="main h-100 p-0">
            <section id="hero" className="bg-img-cover bg-overlay-7 h-100">
              <div className="container h-100">
                <div className="row align-items-center h-100">
                  <div className="col-lg-12 mt-4 pt-5 text-center">
                    <h1 className="font-alt font-weight-bold mt-2 text-extra-large-2 text-md-extra-large-3 text-white">
                      {title}
                    </h1>
                  </div>
                </div>
              </div>
            </section>
            <section id="intro">
              <div className="container">
                <SliceZone sliceZone={post.data.body} />
              </div>
            </section>
          </div>
        </div> */}
        {/* <div className="main">
          <div className="outer-container">
            <BackButton />
            <h1>{title}</h1>
          </div>
          <SliceZone sliceZone={post.data.body} />
        </div> */}
        {/* <style jsx global>
          {postStyles}
        </style> */}
        {/* </DefaultLayout> */}
        <Footer />
      </>
    );
  }

  return null;
};

// export async function getStaticProps({
//   params,
//   preview = null,
//   previewData = {},
// }) {
//   const { ref } = previewData;
//   const post =
//     (await Client().query($prismic.predicates.at('document.type', 'post'), { pageSize : 1 , after : `${post.id}`, orderings: '[my.post.date desc]'}).results[0])) ||
//     {};
//   return {
//     props: {
//       preview,
//       post,
//     },
//   };
// }

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {
  const { ref } = previewData;
  const post =
    (await Client().getByUID("blog_post", params.uid, ref ? { ref } : null)) ||
    {};

  // const posts =
  //   (await Client().query(Prismic.Predicates.at("document.type", "blog_post"), {
  //     orderings: "[my.blog-post.date desc]",
  //   })) || {};

  const categories =
    (await Client().query(Prismic.Predicates.at("document.type", "tag"))) || {};

  const postList =
    (await Client().query(Prismic.Predicates.at("document.type", "blog_post"), {
      pageSize: 2,
      after: `${post.id}`,
      orderings: "[my.post.date]",
      ...(ref ? { ref } : null),
    })) || {};

  const featuredPosts =
    (await Client().query(
      Prismic.Predicates.at("my.blog_post.is_featured", true),
      {
        orderings: "[my.post.title]",
      }
    )) || {};

  return {
    props: {
      postList,
      preview,
      post,
      featuredPosts,
      categories,
    },
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "blog_post"
  );
  return {
    paths: documents.map((doc) => `/posts/${doc.uid}`),
    fallback: true,
  };
}

export default Post;
