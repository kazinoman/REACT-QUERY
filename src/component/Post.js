import React, { useState } from "react";

import { useQuery } from "react-query";
import axios from "../util/axiosInstance";
// import axios from "axios";

import PostDetail from "./PostDetail";

const fetchPost = async () => {
  const data = await axios.get("/posts?_limit=10&_page=1");
  return data;
};

const Post = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  console.log(selectedPost);

  const { isLoading, isError, isFetched, error, data } = useQuery(
    "posts",
    fetchPost
  );
  //   console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>some error</h1>;
  }

  return (
    <div>
      <h3 style={{ textAlign: "left", margin: "0" }}>List of post !</h3>
      {data.data?.map((post) => (
        <div
          key={post.id}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            onClick={() => setSelectedPost(post)}
            style={{ padding: "10px", margin: "0", textAlign: "center" }}
          >
            {post.title}
          </h2>
        </div>
      ))}
      <div
        className="pages"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </div>
  );
};

export default Post;
