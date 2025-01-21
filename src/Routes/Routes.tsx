import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";

const AppRoutes: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRoutes;