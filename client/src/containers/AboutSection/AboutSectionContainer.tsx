import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutSectionContainer.css";

// components
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Button from "../../components/Button/Button";

// constants
import { AboutSection } from "../../constants/section.constants";

const AboutSectionContainer = () => {
  const navigate = useNavigate();
  return (
    <div id="about">
      <div className="wrapper">
        <div className="row-md">
          <div className="col-md-6">
            <SectionHeader
              text={AboutSection.Text}
              title={AboutSection.Title}
              variant={AboutSection.Variant}
              position={AboutSection.Position}
            />
            <p className="about-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam aperiam. Eaque ipsa quae
              ab illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur.
            </p>
            <p className="about-text">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur.
            </p>
            <div className="mt-8">
              <Button
                label={"Explore our Menu \t\t→"}
                variant={"contained"}
                onClick={() => navigate("/menu")}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image-wrapper">
              <div className="about-main-image">
                <img
                  src={require("../../assets/images/all/4.jpg")}
                  alt="About Main"
                />
              </div>
              <div className="about-secondary-image">
                <img
                  src={require("../../assets/images/all/5.jpg")}
                  alt="About Secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionContainer;
