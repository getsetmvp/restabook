import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import "./ContactSectionContainer.css";

// loader
import { ClipLoader } from "react-spinners";

// components
import OpeningHours from "../../components/OpeningHours/OpeningHours";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

// hooks
import { useAppDispatch } from "../../hooks/hooks";

// reducers
import { successMessage } from "../../store/alert/alertSlice";
import { contactUs } from "../../store/contact/contactSlice";

const ContactSectionContainer = () => {
  const dispatch = useAppDispatch();
  // state
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPhoneValid, setIsPhoneValid] = React.useState(true);
  // form
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required().label("Name"),
      email: Yup.string().email().required().label("Email Address"),
      phone: Yup.string().phone().required().label("Phone Number"),
      subject: Yup.string().required().label("Subject"),
      message: Yup.string().required().label("Message"),
    }),
    onSubmit: async (values, { resetForm, setFieldError }) => {
      setIsLoading(true);
      const res = await dispatch(contactUs(values));
      if (res.type === "contact/contact/fulfilled") {
        resetForm();
        dispatch(successMessage("Message Sent successfully"));
      } else setFieldError("email", res.payload as string);
      setIsLoading(false);
    },
  });
  // function
  const isNumberValid = (isValid: boolean) => {
    setIsPhoneValid(isValid);
  };
  return (
    <div id="contact">
      <div className="wrapper">
        <div className="section-bg-image">
          <img
            src={require("../../assets/images/section-bg.png")}
            alt="Section Background"
          />
        </div>
        <div className="row-md">
          <div className="col-md-7 mb-6 lg:mb-0">
            <div className="get-in-touch">
              <div className="relative text-left">
                <div className="get-in-touch-title">Get in touch</div>
                <div className="get-in-touch-dots-seperator">
                  <span className="relative inline-block"></span>
                </div>
              </div>
              <div className="get-in-touch-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam aperiam. Eaque ipsa quae
                ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt.
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={formik.handleSubmit}>
                <div className="row-sm w-full">
                  <div className="col-sm-6">
                    <Input
                      name={"name"}
                      type={"text"}
                      placeholder={"Full Name"}
                      onChange={(value) =>
                        formik.setFieldValue("name", value || "")
                      }
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      error={formik.touched.name ? formik.errors.name : ""}
                      fullWidth
                    />
                  </div>
                  <div className="col-sm-6">
                    <Input
                      name={"email"}
                      type={"email"}
                      placeholder={"Email Address"}
                      onChange={(value) =>
                        formik.setFieldValue("email", value || "")
                      }
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={formik.touched.email ? formik.errors.email : ""}
                      fullWidth
                    />
                  </div>
                </div>
                <div className="row-sm w-full">
                  <div className="col-sm-6">
                    <Input
                      name={"phone"}
                      type={"mobile"}
                      placeholder={"Phone"}
                      onChange={(value) =>
                        formik.setFieldValue("phone", value || "")
                      }
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      error={
                        formik.touched.phone && !isPhoneValid
                          ? "Please enter a valid phone number"
                          : ""
                      }
                      fullWidth
                      isNumberValid={isNumberValid}
                    />
                  </div>
                  <div className="col-sm-6">
                    <Input
                      name={"subject"}
                      type={"text"}
                      placeholder={"Subject"}
                      onChange={(value) =>
                        formik.setFieldValue("subject", value || "")
                      }
                      onBlur={formik.handleBlur}
                      value={formik.values.subject}
                      error={
                        formik.touched.subject ? formik.errors.subject : ""
                      }
                      fullWidth
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Input
                    name={"message"}
                    type={"textarea"}
                    placeholder={"Message"}
                    onChange={(value) =>
                      formik.setFieldValue("message", value || "")
                    }
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    error={formik.touched.message ? formik.errors.message : ""}
                    fullWidth
                  />
                </div>
                <div className="mt-10">
                  <Button
                    type={"submit"}
                    variant="contained"
                    bgColor={"golden"}
                    label={
                      <div className="spinner">
                        Send Message {"\t\t"}→{" "}
                        {isLoading && (
                          <ClipLoader loading={isLoading} size={20} />
                        )}
                      </div>
                    }
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5">
            <OpeningHours />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionContainer;
