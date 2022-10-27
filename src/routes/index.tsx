/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { paths } from "./../services/utils/paths";

import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import LandingPage from "../pages/landing-page/LandingPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.landingPage} element={<LandingPage />} />
        {/* <Route path={paths.login} element={<Login />} /> */}
        <Route path={paths.register} element={<Register />} />
        <Route path={paths.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
