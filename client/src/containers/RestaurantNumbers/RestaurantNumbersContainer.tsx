import React from "react";
import CountUp from "react-countup";
import "./RestaurantNumbersContainer.css";

// hooks
import useIsInViewport from "../../hooks/useIsInViewport";

// constants
import { RestaurantNumbersSection } from "../../constants/section.constants";

const RestaurantNumbersContainer = () => {
  const ref = React.useRef(null);
  const isInViewport = useIsInViewport(ref);
  // state
  const [inViewport, setInViewport] = React.useState(false);

  // function
  React.useEffect(() => {
    if (isInViewport) setInViewport(true);
  }, [isInViewport]);
  return (
    <div id="restaurant-numbers" ref={ref}>
      <div className="brush-top"></div>
      <div className="wrapper">
        <div className="counter-items">
          {RestaurantNumbersSection.map((data) => (
            <div key={data.title} className="counter-item">
              <div className="counter-item-no">
                {inViewport ? <CountUp end={data.number} /> : 0}
              </div>
              <div className="counter-item-title">{data.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="brush-bottom"></div>
    </div>
  );
};

export default RestaurantNumbersContainer;
