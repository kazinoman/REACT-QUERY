import React from "react";

function Comment() {
  const [comment, setComment] = React.useState(0);
  console.log("comment com");
  return (
    <div>
      <h1>Now comment count is: {comment} </h1>
      <button onClick={() => setComment((p) => p + 1)}>Add comment :)</button>
    </div>
  );
}

export default Comment;
