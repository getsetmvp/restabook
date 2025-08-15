import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceSectionContainer.css";

// components
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Button from "../../components/Button/Button";

// constants
import { ServiceCards } from "../../constants/card.constants";
import { ServiceSection } from "../../constants/section.constants";

const ServiceSectionContainer = () => {
  const navigate = useNavigate();
  return (
    <div id="service">
      <div className="wrapper">
        <div className="section-bg-image">
          <img
            src={require("../../assets/images/section-bg.png")}
            alt="Section Background"
          />
        </div>
        <SectionHeader
          text={ServiceSection.Text}
          title={ServiceSection.Title}
          position={ServiceSection.Position}
          variant={ServiceSection.Variant}
        />
        <div className="row-md mb-7">
          {ServiceCards.map((ServiceCard) => (
            <div className="col-md-4" key={ServiceCard.title}>
              <div className="flip-card">
                <div
                  className="flip-card-front"
                  style={{
                    backgroundImage: ` linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${require(`../../assets/images${ServiceCard.img}`)})`,
                  }}
                >
                  <div className="inner cf-inner">
                    <div className="flip-card-title">{ServiceCard.title}</div>
                    <div className="flip-card-subtitle">
                      {ServiceCard.subtitle}
                    </div>
                    <div className="flip-card-no">{ServiceCard.number}</div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="inner cb-inner">
                    <div className="flip-card-icon">{ServiceCard.icon}</div>
                    <div className="flip-card-text">{ServiceCard.text}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button
            label={"Read More About us  \t\t→"}
            variant={"outlined"}
            textColor={"black"}
            onClick={() => navigate("/about")}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSectionContainer;
