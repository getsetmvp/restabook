import React from "react";
import "./Menu.css";

// hoc
import OutsideAlerter from "../../hoc/OutsideAlerter";

// interfaces
interface MenuProps {
  open: boolean;
  anchor: "left" | "right";
  onHide?: () => void;
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({
  open = false,
  onHide,
  anchor = "left",
  children,
}) => {
  // state
  const [isOpen, setIsOpen] = React.useState(open);

  // function
  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleOutsideClick = () => {
    setIsOpen(false);
    onHide && onHide();
  };

  return (
    <OutsideAlerter onOutsideClick={handleOutsideClick}>
      <div className={`menu menu-${anchor} menu-${isOpen ? "open" : "close"}`}>
        {children}
      </div>
    </OutsideAlerter>
  );
};

export default Menu;
