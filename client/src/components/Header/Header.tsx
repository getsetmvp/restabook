import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

// assets
import logo_black from "../../assets/images/logo/logo_black.png";

// hooks
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useWindowPosition from "../../hooks/useWindowPosition";

// reducers
import { logoutUser } from "../../store/auth/authSlice";
import { successMessage } from "../../store/alert/alertSlice";

// icons
import { CgMenuLeft } from "react-icons/cg";
import { FiX } from "react-icons/fi";
import { IoBookmarkOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";

// components
import Drawer from "../Drawer/Drawer";
import Menu from "../Menu/Menu";
import Popup from "../Popup/Popup";
import TableReservationSectionContainer from "../../containers/TableReservatioSection/TableReservationSectionContainer";

// constants
import { ReservationPopupSection } from "../../constants/section.constants";

// interface
interface HeaderProps {
  isPopupOpen: boolean;
  handleTogglePopup: (isOpen: boolean) => void;
}

const Header = () => {
  const { width } = useWindowDimensions();
  const ref: React.Ref<any> = React.useRef(null);
  // state
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  // function
  const handleTogglePopup = (isOpen: boolean) => {
    setIsPopupOpen(isOpen);
  };

  return (
    <>
      <Popup
        open={isPopupOpen}
        onHide={() => handleTogglePopup(false)}
        titleConstant={ReservationPopupSection}
        cta={[
          {
            label: "Reserve Table \t\t→",
            variant: "contained",
            bgColor: "golden",
            onClick: () =>
              ref.current.dispatchEvent(
                new Event("submit", { cancelable: true, bubbles: true })
              ),
          },
        ]}
      >
        <TableReservationSectionContainer
          formRef={ref}
          onSuccess={() => handleTogglePopup(false)}
        />
      </Popup>
      <div className={`header-contact-details py-2 justify-end items-center`}>
        <p className="header-details header-call-details">
          Call now: <span>+91 91554 78525</span>
        </p>
        <p className="header-details header-email-details">
          Write: <span>info@restabook.com</span>
        </p>
      </div>
      {width <= 600 ? (
        <MobileHeader
          isPopupOpen={isPopupOpen}
          handleTogglePopup={handleTogglePopup}
        />
      ) : width <= 1024 ? (
        <TabletHeader
          isPopupOpen={isPopupOpen}
          handleTogglePopup={handleTogglePopup}
        />
      ) : (
        <DesktopHeader
          isPopupOpen={isPopupOpen}
          handleTogglePopup={handleTogglePopup}
        />
      )}
    </>
  );
};

export default Header;

const MobileHeader: React.FC<HeaderProps> = ({
  isPopupOpen,
  handleTogglePopup,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loggedIn } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);
  // state
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // function
  const handleToggleDrawer = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
  };

  const handleLogout = async () => {
    await dispatch(logoutUser());
    await dispatch(successMessage("Logout Successfully"));
  };
  return (
    <div className={`header mobile-header`}>
      <div className="h-full flex justify-between items-center">
        <div className="header-brand-container flex justify-center items-center mr-4">
          <div className="header-icon header-menu-icon cursor-pointer mr-2">
            <CgMenuLeft onClick={() => handleToggleDrawer(true)} />
          </div>
          <div
            className="header-brand-icon cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo_black}
              alt={"Logo Black"}
              className="h-full max-h-8"
            />
          </div>
        </div>
        <div className="header-items flex justify-center items-center">
          <div
            className="header-item header-icon header-item-icon"
            onClick={() => handleTogglePopup(true)}
          >
            <IoBookmarkOutline />
          </div>
          <div
            className="header-item header-icon header-item-icon"
            onClick={() => navigate("/cart")}
          >
            <BsHandbag />
            <div className="cart-item-count">{items.length}</div>
          </div>
        </div>
      </div>
      <Drawer
        open={isDrawerOpen}
        anchor={"left"}
        onHide={() => handleToggleDrawer(false)}
      >
        <div className="header-drawer">
          <div className="header-drawer-top flex items-center">
            <div className="header-icon header-menu-icon cursor-pointer mr-2">
              <FiX onClick={() => handleToggleDrawer(false)} />
            </div>
            <div
              className="header-brand-icon cursor-pointer"
              onClick={() => {
                navigate("/");
                handleToggleDrawer(false);
              }}
            >
              <img
                src={logo_black}
                alt={"Logo Black"}
                className="h-full max-h-8"
              />
            </div>
          </div>
          <div className="mx-6 mt-4">
            <div className="header-drawer-items header-items flex justify-center flex-col">
              <div
                className="header-drawer-item header-item"
                onClick={() => navigate("/")}
              >
                Home
              </div>
              <div
                className="header-drawer-item header-item"
                onClick={() => navigate("/menu")}
              >
                Menu
              </div>
              <div
                className="header-drawer-item header-item"
                onClick={() => navigate("/about")}
              >
                About
              </div>
              <div
                className="header-drawer-item header-item"
                onClick={() => navigate("/contact")}
              >
                Contact
              </div>
              <div
                className="header-drawer-item header-item"
                onClick={() => navigate("/store")}
              >
                Store
              </div>
              {loggedIn ? (
                <>
                  <div
                    className="header-drawer-item header-item"
                    onClick={() => navigate("/dashboard/settings")}
                  >
                    Dashboard
                  </div>
                  <div
                    className="header-drawer-item header-item"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="header-drawer-item header-item"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

const TabletHeader: React.FC<HeaderProps> = ({
  isPopupOpen,
  handleTogglePopup,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const scrollPosition = useWindowPosition();
  const { loggedIn } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);
  // state
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // function
  const handleToggleMenu = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  const handleLogout = async () => {
    await dispatch(logoutUser());
    await dispatch(successMessage("Logout Successfully"));
  };
  return (
    <div
      className={`header tablet-header ${scrollPosition <= 200 ? `down` : ``}`}
    >
      <div className="h-full flex justify-between items-center">
        <div className="header-brand-container flex justify-center items-center mr-4">
          <div className="header-icon header-menu-icon cursor-pointer mr-2">
            {isMenuOpen ? (
              <FiX onClick={() => handleToggleMenu(false)} />
            ) : (
              <CgMenuLeft onClick={() => handleToggleMenu(true)} />
            )}
          </div>
          <div
            className="header-brand-icon cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo_black}
              alt={"Logo Black"}
              className="h-full max-h-8"
            />
          </div>
        </div>
        <div className="header-items flex justify-center items-center">
          <div
            className="header-item header-icon header-tablet-icon header-item-icon"
            onClick={() => handleTogglePopup(true)}
          >
            <IoBookmarkOutline />
          </div>
          <div
            className="header-item header-icon header-tablet-icon header-item-icon"
            onClick={() => navigate("/cart")}
          >
            <BsHandbag />
            <div className="cart-item-count">{items.length}</div>
          </div>
        </div>
      </div>
      <Menu
        open={isMenuOpen}
        anchor={"left"}
        onHide={() => handleToggleMenu(false)}
      >
        <div className="header-menu">
          <div className="mx-7">
            <div className="header-menu-items header-items flex justify-center flex-col py-4">
              <div
                className="header-menu-item header-item"
                onClick={() => navigate("/")}
              >
                Home
              </div>
              <div
                className="header-menu-item header-item"
                onClick={() => navigate("/menu")}
              >
                Menu
              </div>
              <div
                className="header-menu-item header-item"
                onClick={() => navigate("/about")}
              >
                About
              </div>
              <div
                className="header-menu-item header-item"
                onClick={() => navigate("/contact")}
              >
                Contact
              </div>
              <div
                className="header-menu-item header-item"
                onClick={() => navigate("/store")}
              >
                Store
              </div>
              {loggedIn ? (
                <>
                  <div
                    className="header-menu-item header-item"
                    onClick={() => navigate("/dashboard/settings")}
                  >
                    Dashboard
                  </div>
                  <div
                    className="header-menu-item header-item"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="header-menu-item header-item"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
};

const DesktopHeader: React.FC<HeaderProps> = ({
  isPopupOpen,
  handleTogglePopup,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const scrollPosition = useWindowPosition();
  const { loggedIn } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);
  // state
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // function
  const handleToggleMenu = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  const handleLogout = async () => {
    await dispatch(logoutUser());
    dispatch(successMessage("Logout Successfully"));
  };
  return (
    <div
      className={`header desktop-header ${scrollPosition <= 200 ? `down` : ``}`}
    >
      <div className="h-full flex justify-between items-center">
        <div className="header-brand-container flex justify-between items-center">
          <div
            className="header-brand-icon cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo_black}
              alt={"Logo Black"}
              className="h-full max-h-8"
            />
          </div>
        </div>
        <div className="header-items flex justify-center items-center">
          <div className="header-item" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="header-item" onClick={() => navigate("/menu")}>
            Menu
          </div>
          <div className="header-item" onClick={() => navigate("/about")}>
            About
          </div>
          <div className="header-item" onClick={() => navigate("/contact")}>
            Contact
          </div>
          <div className="header-item" onClick={() => navigate("/store")}>
            Store
          </div>
          <div
            className="header-item header-icon header-desktop-icon header-item-icon"
            onClick={() => handleTogglePopup(true)}
          >
            <IoBookmarkOutline />
          </div>
          <div
            className="header-item header-icon header-desktop-icon header-item-icon"
            onClick={() => navigate("/cart")}
          >
            <BsHandbag />
            <div className="cart-item-count">{items.length}</div>
          </div>
          <div className="header-item header-icon header-desktop-icon header-item-icon">
            {isMenuOpen ? (
              <FiX onClick={() => handleToggleMenu(false)} />
            ) : (
              <RiUserLine onClick={() => handleToggleMenu(true)} />
            )}
          </div>
        </div>
      </div>
      <Menu
        open={isMenuOpen}
        anchor={"right"}
        onHide={() => handleToggleMenu(false)}
      >
        <div className="header-menu">
          <div className="mx-7">
            <div className="header-menu-items header-items flex justify-center flex-col py-4">
              {loggedIn ? (
                <>
                  <div
                    className="header-menu-item header-item"
                    onClick={() => navigate("/dashboard/settings")}
                  >
                    Dashboard
                  </div>
                  <div
                    className="header-menu-item header-item"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="header-menu-item header-item"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
};
