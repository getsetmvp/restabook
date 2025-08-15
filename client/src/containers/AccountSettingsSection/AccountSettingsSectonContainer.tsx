import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import "./AccountSettingsSectionContainer.css";

// loader
import { ClipLoader } from "react-spinners";

// hooks
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

// reducers
import { updateUserDetails } from "../../store/auth/authSlice";
import { errorMessage, successMessage } from "../../store/alert/alertSlice";

// components
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

// interface
interface User {
  id: string;
  email: string;
  mobile?: number | string;
  name: string;
  isEmailVerified: boolean;
  mobileVerified?: boolean;
  username?: string;
}

const AccountSettingsSectonContainer = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  // state
  const [isLoading, setIsLoading] = React.useState(false);
  // form
  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required().label("Full Name"),
      email: Yup.string().email().required().label("Email Address"),
    }),
    onSubmit: async (values, { resetForm, setFieldValue }) => {
      setIsLoading(true);
      const res = await dispatch(
        updateUserDetails({ ...values, id: user?.id })
      );
      if (res.type === "auth/updateDetails/fulfilled") {
        resetForm();
        setFieldValue("name", (res.payload as User).name);
        setFieldValue("email", (res.payload as User).email);
        dispatch(successMessage("Details Updated successfully"));
      } else {
        dispatch(errorMessage(res.payload as string));
      }
      setIsLoading(false);
    },
  });
  // function
  return (
    <div id="account-settings">
      <form className="register-form" onSubmit={formik.handleSubmit}>
        <div className="row-md">
          <div className="col-md-6">
            <Input
              name={"name"}
              type={"text"}
              placeholder={"Full Name"}
              onChange={(value) => formik.setFieldValue("name", value || "")}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name ? formik.errors.name : ""}
              fullWidth
            />
          </div>
          <div className="col-md-6">
            <Input
              name={"email"}
              type={"email"}
              placeholder={"Email Address"}
              onChange={(value) => formik.setFieldValue("email", value || "")}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email ? formik.errors.email : ""}
              fullWidth
            />
          </div>
        </div>
        <div className="p-2">
          <Button
            type={"submit"}
            variant="contained"
            label={
              <div className="spinner">
                Update Details{" "}
                {isLoading && <ClipLoader loading={isLoading} size={20} />}
              </div>
            }
            fullWidth
          />
        </div>
      </form>
    </div>
  );
};

export default AccountSettingsSectonContainer;
