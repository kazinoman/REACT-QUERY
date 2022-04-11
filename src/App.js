import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Post from "./component/Post";
import LikeCom from "./HOC/like";
import Comment from "./HOC/Comment";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <h1>React query..</h1>
        <Post />
        {/* <LikeCom name={"noman"} /> */}
        {/* <Comment /> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
