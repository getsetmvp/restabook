import React from "react";
import "./ContactContainer.css";

// components
import ImageBackground from "../../components/ImageBackground/ImageBackground";
import Layout from "../../components/Layout/Layout";

// containers
import ContactSectionContainer from "../ContactSection/ContactSectionContainer";

// constants
import { ContactPage } from "../../constants/page.constants";

const ContactContainer = () => {
  return (
    <Layout pageTitle={ContactPage.Title}>
      <ImageBackground
        img={ContactPage.Img}
        mainTitle={ContactPage.ImgTitle}
        extraText={ContactPage.ImgText}
      />
      {/* @TODO -  Add Maps if possible */}
      {/* <div className="maps-container">
        <div className="brush-bottom"></div>
      </div> */}
      <ContactSectionContainer />
    </Layout>
  );
};

export default ContactContainer;
