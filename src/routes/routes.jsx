import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Containers/Home";
import Users from "../Containers/Users";

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usuarios" element={<Users />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Router;
