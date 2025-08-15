import React from "react";
import { useNavigate } from "react-router-dom";
import "./UpcomingEventsSectionContainer.css";

// components
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Button from "../../components/Button/Button";

// constants
import { EventsSection } from "../../constants/section.constants";

const UpcomingEventsSectionContainer = () => {
  const navigate = useNavigate();
  return (
    <div id="upcoming-events">
      <div className="row-md row-md-reverse">
        <div className="col-md-6">
          <div className="store-container">
            <div className="store-title">Our Store</div>
            <div className="store-text">
              Want to order food home? Visit our online store.
            </div>
            <div className="mt-10 text-center">
              <Button
                label={"But Online \t\t→"}
                variant={"contained"}
                bgColor={"black"}
                onClick={() => navigate("/store")}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="events-container">
            <SectionHeader
              text={EventsSection.Text}
              title={EventsSection.Title}
              position={EventsSection.Position}
              variant={EventsSection.Variant}
            />
            {/* @TODO - Add Events Slider */}
            <div className="dot-seperator">
              <span></span>
            </div>
            <div className="text-center">
              <Button
                label={"Book Table Now \t\t→"}
                variant={"outlined"}
                textColor={"white"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsSectionContainer;
