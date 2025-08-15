import React from "react";
import "./ImageBackground.css";

// interface
interface ImageBackgroundProps {
  img: string;
  mainTitle: string;
  extraText?: string;
}

const ImageBackground: React.FC<ImageBackgroundProps> = ({
  img,
  mainTitle,
  extraText,
}) => {
  return (
    <div
      className="image-background"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)) ,  url(${require(`../../assets/images/${img}`)})`,
      }}
    >
      {extraText && <div className="image-background-text">{extraText}</div>}
      <div className="image-background-title">{mainTitle}</div>
      <div className="dots"></div>
      <div className="scroll-animation">
        <div className="mouse">
          <div className="scroller"></div>
        </div>
      </div>
      <div className="brush-bottom"></div>
    </div>
  );
};

export default ImageBackground;
