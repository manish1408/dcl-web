import React from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

import PostDate from "./PostDate";
import FirstParagraph from "./FirstParagraph";
import { hrefResolver, linkResolver } from "prismic-configuration";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

/**
 * Post list item component
 */
const PostItem = ({ post }) => {
  const title = RichText.asText(post.data.title)
    ? RichText.asText(post.data.title)
    : "Untitled";

  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-blog-post-item">
        <div className="post-image">
          <Link as={linkResolver(post)} href={hrefResolver(post)}>
            <a>
              <img src={post.data.featured_image.url} alt="Featured Image" />
            </a>
          </Link>
        </div>
        <div className="post-content">
          <ul className="post-meta">
            <li>
              <PostDate date={post.data.date} />
            </li>
          </ul>
          <h3>
            <Link as={linkResolver(post)} href={hrefResolver(post)}>
              <a>{post.data.title[0].text}</a>
            </Link>
          </h3>
          <Link as={linkResolver(post)} href={hrefResolver(post)}>
            <a className="read-more-btn">
              Read More <AddCircleOutlineIcon fontSize="large" />
            </a>
          </Link>
        </div>
      </div>
    </div>
    // <div className="blog-post">
    //   <NextLink as={linkResolver(post)} href={hrefResolver(post)}>
    //     <a>
    //       <h2>{title}</h2>
    //     </a>
    //   </NextLink>

    //

    //   <FirstParagraph sliceZone={post.data.body} textLimit={300} />
    // </div>
  );
};

export default PostItem;
