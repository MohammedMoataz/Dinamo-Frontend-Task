import React from "react";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import PostList from "./components/Table/Table";
// import ErrorBoundary from "antd/es/alert/ErrorBoundary";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <PostList />
    </ErrorBoundary>
  );
};

export default App;
