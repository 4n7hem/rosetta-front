/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { paths } from "./../services/utils/paths";

import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import LandingPage from "../pages/landing-page/LandingPage";
import DisplayRequests from "../pages/requests/display";
import NewRequest from "../pages/requests/new";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.landingPage} element={<LandingPage />} />
        {/* <Route path={paths.login} element={<Login />} /> */}
        <Route path={paths.register} element={<Register />} />
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.display_requests} element={<DisplayRequests />} />
        <Route path={paths.new_request} element={<NewRequest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
