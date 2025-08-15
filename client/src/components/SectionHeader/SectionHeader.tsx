import React from "react";
import "./SectionHeader.css";

// interface
interface SectionHeaderProps {
  text?: string;
  title: string;
  position?: "left" | "middle" | "right";
  variant?: "black" | "white";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  text,
  title,
  position = "left",
  variant = "black",
}) => {
  return (
    <div
      className={`section-header text ${
        position === "left"
          ? "text-left"
          : position === "middle"
          ? "text-center"
          : "text-right"
      }`}
    >
      {text && <div className={`section-header-text `}>{text}</div>}
      <div className={`section-header-title section-header-title-${variant}`}>
        {title}
      </div>
      <div className={`dots dots-${variant}`}></div>
    </div>
  );
};

export default SectionHeader;
