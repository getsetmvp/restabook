import React, { useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LazyLoadComponent from "./hoc/LazyLoadComponent";
import WebProtectedRoute from "./hoc/WebProtectedRoute";

// pages
const Login = React.lazy(() => import("./pages/Login.page"));
const Register = React.lazy(() => import("./pages/Register.page"));
const Home = React.lazy(() => import("./pages/Home.page"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword.page"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword.page"));
const Menu = React.lazy(() => import("./pages/Menu.page"));
const About = React.lazy(() => import("./pages/About.page"));
const Contact = React.lazy(() => import("./pages/Contact.page"));
const Store = React.lazy(() => import("./pages/Store.page"));
const Cart = React.lazy(() => import("./pages/Cart.page"));
const OrderSuccess = React.lazy(() => import("./pages/OrderSuccess.page"));
const Dashboard = React.lazy(() => import("./pages/Dashboard.page"));

const WebRoutes = () => {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<LazyLoadComponent Component={Home} />} />
      <Route path="/login" element={<LazyLoadComponent Component={Login} />} />
      <Route
        path="/register"
        element={<LazyLoadComponent Component={Register} />}
      />
      <Route
        path="/forgot-password"
        element={<LazyLoadComponent Component={ForgotPassword} />}
      />
      <Route
        path="/reset-password"
        element={<LazyLoadComponent Component={ResetPassword} />}
      />
      <Route path="/menu" element={<LazyLoadComponent Component={Menu} />} />
      <Route path="/about" element={<LazyLoadComponent Component={About} />} />
      <Route
        path="/contact"
        element={<LazyLoadComponent Component={Contact} />}
      />
      <Route path="/store" element={<LazyLoadComponent Component={Store} />} />
      <Route path="/cart" element={<LazyLoadComponent Component={Cart} />} />
      {/* all auth protected routes will nest inside this route */}
      <Route element={<WebProtectedRoute />}>
        <Route
          path="/checkout/success/:orderId"
          element={<LazyLoadComponent Component={OrderSuccess} />}
        />
        <Route
          path="/dashboard/:tab"
          element={<LazyLoadComponent Component={Dashboard} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default WebRoutes;
