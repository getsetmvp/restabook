import React from "react";
import "./AboutContainer.css";

// components
import Layout from "../../components/Layout/Layout";
import ImageBackground from "../../components/ImageBackground/ImageBackground";
import AboutSectionContainer from "../AboutSection/AboutSectionContainer";
import RestaurantNumbersContainer from "../RestaurantNumbers/RestaurantNumbersContainer";
import ChefSectionContainer from "../ChefSection/ChefSectionContainer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ReviewSectionContainer from "../ReviewSection/ReviewSectionContainer";

// constants
import { AboutPage } from "../../constants/page.constants";
import { OurPromoSection } from "../../constants/section.constants";

// icons
import { BsFillPlayFill } from "react-icons/bs";

const AboutContainer = () => {
  return (
    <Layout pageTitle={AboutPage.Title}>
      <ImageBackground
        img={AboutPage.Img}
        mainTitle={AboutPage.ImgTitle}
        extraText={AboutPage.ImgText}
      />
      <AboutSectionContainer />
      <RestaurantNumbersContainer />
      <ChefSectionContainer />
      <div id="our-promo">
        <div className="brush-top"></div>
        <div className="wrapper">
          <SectionHeader
            text={OurPromoSection.Text}
            title={OurPromoSection.Title}
            position={OurPromoSection.Position}
            variant={OurPromoSection.Variant}
          />
          <div className="text-center mt-4">
            <div className="play-icon">
              <BsFillPlayFill />
            </div>
          </div>
        </div>
        <div className="brush-bottom"></div>
      </div>
      <ReviewSectionContainer />
    </Layout>
  );
};

export default AboutContainer;
