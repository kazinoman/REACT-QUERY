import React, { useState } from "react";

import { useQuery } from "react-query";
import axios from "../util/axiosInstance";
// import axios from "axios";

import PostDetail from "./PostDetail";

const fetchPost = async () => {
  const data = await axios.get("/posts?_limit=10&_page=4");
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
      <h1>Post data</h1>
      {data.data?.map((post) => (
        <>
          <h1 onClick={() => setSelectedPost(post)}>{post.title}</h1>
        </>
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
