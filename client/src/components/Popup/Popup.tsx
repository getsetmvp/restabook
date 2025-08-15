import React from "react";
import OutsideAlerter from "../../hoc/OutsideAlerter";
import "./Popup.css";

// icons
import { IoMdClose } from "react-icons/io";

// components
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";

// interface
interface SectionI {
  Text?: string;
  Title: string;
  Variant?: "black" | "white";
  Position?: "left" | "middle" | "right";
}

interface ButtonProps {
  label: string | JSX.Element;
  type?: "button" | "submit" | "reset";
  variant?: "outlined" | "contained";
  bgColor?: "black" | "golden";
  textColor?: "black" | "white";
  fullWidth?: boolean;
  cssClasses?: Array<string>;
  onClick?: () => void;
  onSubmit?: () => void;
}

interface PopupProps {
  open: boolean;
  onHide?: () => void;
  titleConstant: SectionI;
  children: React.ReactNode;
  cta: ButtonProps[];
}

const Popup: React.FC<PopupProps> = ({
  open,
  onHide,
  titleConstant,
  children,
  cta,
}) => {
  // state
  const [isOpen, setIsOpen] = React.useState<boolean>(open);

  // function
  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleOutsideClick = () => {
    setIsOpen(false);
    onHide && onHide();
  };

  return (
    <div
      className={`popup-wrapper popup-wrapper-${
        isOpen === true ? "open" : "close"
      }`}
    >
      <OutsideAlerter onOutsideClick={handleOutsideClick}>
        <div className={`popup popup-${isOpen === true ? "open" : "close"}`}>
          <div className="section-bg-image">
            <img
              src={require("../../assets/images/section-bg.png")}
              alt="Section Background"
            />
          </div>
          <div className="popup-close-icon" onClick={handleOutsideClick}>
            <IoMdClose />
          </div>
          <div className="popup-title">
            <SectionHeader
              title={titleConstant.Title}
              text={titleConstant.Text}
              position={titleConstant.Position}
              variant={titleConstant.Variant}
            />
          </div>
          <div className="popup-children">{children}</div>
          <div className="popup-cta-container">
            {cta.length > 0
              ? cta.map((c) => (
                  <div className="popup-cta" key={Math.random() * 464848}>
                    <Button {...c} key={Math.random() * 566868486} />
                  </div>
                ))
              : ``}
          </div>
        </div>
      </OutsideAlerter>
    </div>
  );
};

export default Popup;
