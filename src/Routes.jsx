import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/index.jsx";
import Home from "./pages/Home/index.jsx";
import { AuthProvider } from "./contexts/auth";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
