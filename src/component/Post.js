import React, { useState, useEffect } from "react";

import { useQuery, useQueryClient } from "react-query";
import axios from "../util/axiosInstance";
// import axios from "axios";

import PostDetail from "./PostDetail";

// fetch post function.
const fetchPost = async (pageNo) => {
  const data = await axios.get(`/posts?_limit=10&_page=${pageNo}`);
  return data;
};

const Post = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);
  const MAX_PAGE = 10;

  // for previous page transition
  const previousPage = () => {
    if (currentPage <= 1) {
      return setCurrentPage((p) => (p = 1));
    }
    return setCurrentPage((p) => p - 1);
  };

  // console.log(selectedPost);

  // fetch post query
  const { isLoading, isError, isFetched, error, data } = useQuery(
    ["posts", currentPage],
    () => fetchPost(currentPage),
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );

  // pre-fetching for smooth user experience
  const QueryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < MAX_PAGE) {
      const nextPage = currentPage + 1;
      QueryClient.prefetchQuery(["posts", nextPage], () => fetchPost(nextPage));
    }
  }, [currentPage, QueryClient]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>some error {error}</h1>;
  }

  return (
    <div>
      <h3 style={{ textAlign: "left", margin: "0", fontSize: "3rem" }}>
        Blog 'em Ipsum
      </h3>
      <ol>
        {data.data?.map((post) => (
          <div
            key={post.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <li
              onClick={() => setSelectedPost(post)}
              style={{
                padding: "10px",
                margin: "0",
                textAlign: "center",
                fontSize: "1.4rem",
              }}
            >
              {post.title}
            </li>
          </div>
        ))}
      </ol>
      <div
        className="pages"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button
          disabled={currentPage === 1}
          onClick={() => {
            console.log("pre");
            previousPage();
          }}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= MAX_PAGE}
          onClick={() => {
            console.log("next");
            setCurrentPage((p) => p + 1);
          }}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </div>
  );
};

export default Post;
