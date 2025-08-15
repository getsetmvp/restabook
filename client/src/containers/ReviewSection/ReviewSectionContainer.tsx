import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./ReviewSectionContainer.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// components
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ReviewItem from "../../components/ReviewItem/ReviewItem";

// constants
import { ReviewSection } from "../../constants/section.constants";
import { Reviews } from "../../constants/review.constants";

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ReviewSectionContainer = () => {
  const { width } = useWindowDimensions();
  return (
    <div id="review">
      <div className="wrapper">
        <SectionHeader
          text={ReviewSection.Text}
          title={ReviewSection.Title}
          position={ReviewSection.Position}
          variant={ReviewSection.Variant}
        />
      </div>
      <div className="swiper-container">
        {/* @TODO - Implement Naviagtion Arrows */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination
          spaceBetween={50}
          slidesPerView={width < 640 ? 1 : width < 1064 ? 2 : 3}
          loop={true}
          speed={500}
          autoplay={{ delay: 5000 }}
          centeredSlides
        >
          {Reviews.map((Review) => (
            <SwiperSlide key={Review.name}>
              <ReviewItem reviewItem={Review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSectionContainer;
