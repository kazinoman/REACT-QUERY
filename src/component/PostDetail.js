import React from "react";

const PostDetail = ({ post }) => {
  return (
    <div>
      <h3>Title</h3>
      <h1 style={{ color: "blue" }}>{post.title}</h1>
      <br />
      <h3>Detail's</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
