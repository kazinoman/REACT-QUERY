import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Post from "./component/Post";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <h1>React query..</h1>
        <Post />
      </QueryClientProvider>
    </div>
  );
}

export default App;
