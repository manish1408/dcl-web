import React from "react";
import PostItem from "./PostItem";
// import { postListStyles } from "styles";

/**
 * Post list component
 */
const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
      {/* <style jsx global>
        {postListStyles}
      </style> */}
    </>
  );
};

export default PostList;
