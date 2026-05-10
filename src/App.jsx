import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
