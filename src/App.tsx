import React from "react";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

import Home from "./pages/home/Home";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
};

export default App;
