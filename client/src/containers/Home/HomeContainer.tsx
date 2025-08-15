import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeContainer.css";

// components
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import AboutSectionContainer from "../AboutSection/AboutSectionContainer";
import ReservationSectionContainer from "../ReservationSection/ReservationSectionContainer";
import ServiceSectionContainer from "../ServiceSection/ServiceSectionContainer";
import MenuSectionContainer from "../MenuSection/MenuSectionContainer";
import ChefSectionContainer from "../ChefSection/ChefSectionContainer";
import UpcomingEventsSectionContainer from "../UpcomingEventsSection/UpcomingEventsSectionContainer";
import ReviewSectionContainer from "../ReviewSection/ReviewSectionContainer";

// constants
import { HomePage } from "../../constants/page.constants";

const HomeContainer = () => {
  const navigate = useNavigate();
  return (
    <Layout pageTitle={HomePage.Title}>
      <div
        id="home"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)) ,  url(${require(`../../assets/images/${HomePage.Img}`)})`,
        }}
      >
        <div className="wrapper">
          <div className="home-dots"></div>
          <div className="home-background-text">{HomePage.ImgText}</div>
          <div className="home-background-title">{HomePage.ImgTitle}</div>
          <div className="mt-10">
            <Button
              label={"Check out our Menu \t\t→"}
              variant={"outlined"}
              textColor={"white"}
              onClick={() => navigate("/menu")}
            />
          </div>
          <div className="scroll-container flex justify-between items-center mt-20">
            <div className="flex justify-center items-center">
              <div className="home-scroll-animation">
                <div className="mouse">
                  <div className="scroller"></div>
                </div>
              </div>
              <div className="scroll-text ml-4">Scroll down to Discover</div>
            </div>
          </div>
        </div>
        <div className="brush-bottom"></div>
      </div>
      <AboutSectionContainer />
      <ReservationSectionContainer />
      <ServiceSectionContainer />
      <MenuSectionContainer />
      <ChefSectionContainer />
      <UpcomingEventsSectionContainer />
      <ReviewSectionContainer />
    </Layout>
  );
};

export default HomeContainer;
