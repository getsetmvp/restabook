import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

// assets
import logo_white from "../../assets/images/logo/logo_white.png";

// icons
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  const navigate = useNavigate();
  // function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="footer">
      <div className="brush-top"></div>
      <div className="wrapper footer-container">
        <div className="footer-top">
          <div className="footer-brand-icon cursor-pointer">
            <img src={logo_white} alt="Logo White" className="h-full max-h-8" />
          </div>
          <div className="footer-social-container">
            <div className="footer-social-title">Follow us:</div>
            <div className="footer-social-icons">
              <div className="footer-social-icon">
                <FaFacebookF />
              </div>
              <div className="footer-social-icon">
                <BsTwitter />
              </div>
              <div className="footer-social-icon">
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <div className="row-md">
            <div className="col-md-6 lg:mr-10">
              <div className="footer-content-title">About us</div>
              <div className="footer-content-content">
                <div className="footer-about-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  praesentium dignissimos esse aperiam eveniet consectetur
                  autem, harum itaque tenetur commodi earum eum non architecto
                  quasi quae nesciunt? Labore neque aliquid illum maxime,
                  maiores perspiciatis tenetur odio, mollitia et quidem, sunt ad
                </div>
                <div
                  className="footer-content-cta"
                  onClick={() => navigate("/about")}
                >
                  Read more
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-content-title">Contact info</div>
              <div className="footer-content-content">
                <div className="footer-contacts">
                  <div className="footer-contact">
                    <div className="footer-contact-title">Call:</div>
                    <div className="footer-contact-detail">+91 9155478525</div>
                  </div>
                  <div className="footer-contact">
                    <div className="footer-contact-title">Write:</div>
                    <div className="footer-contact-detail">
                      info@restabook.com
                    </div>
                  </div>
                  <div className="footer-contact">
                    <div className="footer-contact-title">Find us:</div>
                    <div className="footer-contact-detail">
                      USA 27th Brooklyn NY
                    </div>
                  </div>
                </div>
                <div
                  className="footer-content-cta"
                  onClick={() => navigate("/contact")}
                >
                  Get in Touch
                </div>
              </div>
            </div>
            {/* @TODO - Add subscribe  */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrapper fb">
          <div className="copyright">
            &copy; Restabook 2025; All Rights reserved.
          </div>
          <div className="back-to-top" onClick={scrollToTop}>
            Back to Top
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
