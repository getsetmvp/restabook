import React from "react";
import "./ReservationSectionContainer.css";

// components
import OpeningHours from "../../components/OpeningHours/OpeningHours";

// icons
import { FaQuoteRight } from "react-icons/fa";

const ReservationSectionContainer = () => {
  return (
    <div id="reservation">
      <div className="row-md">
        <div className="col-md-6">
          <div className="quote-box">
            <div className="quote-icon">
              <FaQuoteRight />
            </div>
            <div className="quote-text">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi accusantium."
            </div>
            <div className="quote-signature">
              Kevin Kowalsky - Restaurant’s cheaf
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <OpeningHours />
        </div>
      </div>
    </div>
  );
};

export default ReservationSectionContainer;
