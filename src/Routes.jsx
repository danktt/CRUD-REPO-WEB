import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/index.jsx";
import Home from "./pages/Home/index.jsx";



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default AppRoutes;