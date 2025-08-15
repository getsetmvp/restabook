import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DashboardContainer.css";

// components
import Layout from "../../components/Layout/Layout";
import ImageBackground from "../../components/ImageBackground/ImageBackground";
import AccountSettingsSectonContainer from "../AccountSettingsSection/AccountSettingsSectonContainer";
import ChangePasswordSectonContainer from "../ChangePasswordSection/ChangePasswordSectionContainer";
import OrdersSectionContainer from "../OrdersSection/OrdersSectionContainer";
import ReservationsSectionContainer from "../ReservationsSection/ReservationsSectionContainer";

// constants
import { DashboardPage } from "../../constants/page.constants";

const DashboardContainer = () => {
  const navigate = useNavigate();
  const { tab } = useParams();

  // function
  React.useEffect(() => {
    if (tab) {
      const validValues = [
        "settings",
        "order",
        "reservation",
        "change-password",
      ];
      if (!validValues.includes(tab)) navigate("*");
    }
  }, [tab, navigate]);
  return (
    <Layout pageTitle={DashboardPage.Title}>
      <ImageBackground
        img={DashboardPage.Img}
        mainTitle={DashboardPage.ImgTitle}
        extraText={DashboardPage.ImgText}
      />
      <div className="dashboard">
        <div className="wrapper">
          <div className="row-md">
            <div className="col-md-3">
              <div className="dashboard-tabs">
                <div
                  className={`dashboard-tab ${
                    tab === "settings" ? `selected` : ``
                  }`}
                  onClick={() => navigate(`/dashboard/settings`)}
                >
                  Account Settings
                </div>
                <div
                  className={`dashboard-tab ${
                    tab === "order" ? `selected` : ``
                  }`}
                  onClick={() => navigate(`/dashboard/order`)}
                >
                  Orders
                </div>
                <div
                  className={`dashboard-tab ${
                    tab === "reservation" ? `selected` : ``
                  }`}
                  onClick={() => navigate(`/dashboard/reservation`)}
                >
                  Reservations
                </div>
                <div
                  className={`dashboard-tab ${
                    tab === "change-password" ? `selected` : ``
                  }`}
                  onClick={() => navigate(`/dashboard/change-password`)}
                >
                  Change Password
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="dashboard-section">
                <div className="dashboard-section-title">
                  {tab === "settings"
                    ? "Account Settings"
                    : tab === "change-password"
                    ? "Change Password"
                    : tab === "order"
                    ? "Your Orders"
                    : tab === "reservation"
                    ? "Your Reservations"
                    : ""}
                </div>
                {tab === "settings" ? (
                  <AccountSettingsSectonContainer />
                ) : tab === "change-password" ? (
                  <ChangePasswordSectonContainer />
                ) : tab === "order" ? (
                  <OrdersSectionContainer />
                ) : tab === "reservation" ? (
                  <ReservationsSectionContainer />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardContainer;
