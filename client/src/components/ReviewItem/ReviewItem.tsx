import React from "react";
import "./ReviewItem.css";

// icons
import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";

// interface
interface ReviewItemI {
  img: string;
  name: string;
  rating: number;
  review: string;
  number: string;
}

interface ReviewItemProps {
  reviewItem: ReviewItemI;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ reviewItem }) => {
  return (
    <div className="review-item">
      <div className="review-item-image">
        <img
          src={require(`../../assets/images/customers/${reviewItem.img}`)}
          alt="Avatar"
        />
      </div>
      <div className="review-item-details">
        <div className="quote-icon quote-top">
          <FaQuoteRight />
        </div>
        <div className="review-name">{reviewItem.name}</div>
        <div className="review-ratings">
          {new Array(reviewItem.rating).map(() => (
            <AiFillStar />
          ))}
        </div>
        <div className="review-review">{`"${reviewItem.review}"`}</div>
        <div className="review-item-no">{reviewItem.number}</div>
        <div className="quote-icon quote-bottom">
          <FaQuoteRight />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
