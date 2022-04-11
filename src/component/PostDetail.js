import React, { useState } from "react";
import { useQuery } from "react-query";
// import axios from "axios";
import axios from "../util/axiosInstance";

const fetchComment = async (postID) => {
  const data = await axios.get(`/comments?postId=${postID}`);
  // console.log(postID);
  return data;
};

const PostDetail = ({ post }) => {
  // console.log(post.id);
  const { data, error, isError, isLoading } = useQuery(
    ["comment", post.id],
    () => fetchComment(post.id),
    {}
  );
  // console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) <div>error is {error}</div>;

  return (
    <div>
      <h3>Title</h3>
      <button>Delete</button>
      <button>Update title</button>
      <h1 style={{ color: "blue" }}>{post.title}</h1>
      <br />
      <h3>Detail's</h3>
      <p>{post.body}</p>
      <h1 style={{ textTransform: "uppercase", textDecoration: "underline" }}>
        Comments
      </h1>
      <ul>
        {data.data.map((comment) => (
          <div
            key={comment.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingBottom: "20px",
            }}
          >
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
