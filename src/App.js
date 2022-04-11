import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Post from "./component/Post";
import LikeCom from "./HOC/like";
import Comment from "./HOC/Comment";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {/* <h1 style={{ margin: 0 }}>React query..</h1> */}
        <Post />
        {/* <LikeCom name={"noman"} /> */}
        {/* <Comment /> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
