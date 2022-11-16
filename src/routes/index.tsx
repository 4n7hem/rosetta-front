/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { paths } from "./../services/utils/paths";

import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import LandingPage from "../pages/landing-page/LandingPage";
import Profile from "../pages/profile/Profile";
import EditProfile from "../pages/edit-profile/EditProfile";
import CreateOrder from "../pages/create-order/CreateOrder";
import Orders from "../pages/orders/Orders";
import Order from "../pages/order/Order";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.landingPage} element={<LandingPage />} />
        {/* <Route path={paths.login} element={<Login />} /> */}
        <Route path={paths.register} element={<Register />} />
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.profile} element={<Profile />} />
        <Route path={paths.editProfile} element={ <EditProfile /> } />
        <Route path={paths.order} element={ <Order /> } />
        <Route path={paths.orders} element={ <Orders />} />
        <Route path={paths.createOrder} element={ <CreateOrder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
