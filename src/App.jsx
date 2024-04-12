import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "./layouts/rtl";
import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth";
const App = () => {
  return (
    <Routes>
      <Route path="u/auth/*" element={<AuthLayout />} />
      <Route path="u/admin/*" element={<AdminLayout />} />
      <Route path="u/rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/u/admin" replace />} />
    </Routes>
  );
};

export default App;
