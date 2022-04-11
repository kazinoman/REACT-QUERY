import React, { useState } from "react";
import HOC from "./HOC";

const LikeCom = ({ name, address }) => {
  const [like, setLike] = useState(0);
  console.log("like com");
  return (
    <div>
      <p>My name is = {name}</p>
      <p>Address is = {address}</p>
      <h1>now like coune is : {like}</h1>
      <button onClick={() => setLike((p) => p + 1)}>Like it :)</button>
    </div>
  );
};

// class LikeCom extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>Like component</h1>
//       </>
//     );
//   }
// }
export default HOC(LikeCom);
// export default LikeCom;
