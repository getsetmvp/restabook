import React from "react";
import "./OpeningHours.css";

// components
import SectionHeader from "../SectionHeader/SectionHeader";

// constants
import { ReservationSection } from "../../constants/section.constants";

const OpeningHours = () => {
  return (
    <div className="reservation-container">
      <SectionHeader
        text={ReservationSection.Text}
        title={ReservationSection.Title}
        variant={ReservationSection.Variant}
        position={ReservationSection.Position}
      />
      <div className="row-sm work-time text-center">
        <div className="col-sm-6">
          <div className="work-days">Sunday to Tuesday</div>
          <div className="work-hours">
            09:00 <br /> 22:00
          </div>
        </div>
        <div className="col-sm-6">
          <div className="work-days">Friday to Saturday</div>
          <div className="work-hours">
            11:00 <br /> 19:00
          </div>
        </div>
      </div>
      <div className="dot-seperator">
        <span></span>
      </div>
      <div className="reservation-contact-no">+91 9155478525</div>
    </div>
  );
};

export default OpeningHours;
