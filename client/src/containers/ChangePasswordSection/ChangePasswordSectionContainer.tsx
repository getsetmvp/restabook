import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";

// loader
import { ClipLoader } from "react-spinners";

// hooks
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

// reducers
import { updateUserDetails } from "../../store/auth/authSlice";
import { successMessage } from "../../store/alert/alertSlice";

// components
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const ChangePasswordSectonContainer = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  // state
  const [isLoading, setIsLoading] = React.useState(false);
  // form
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },

    validationSchema: Yup.object({
      oldPassword: Yup.string().required().label("Old Password"),
      newPassword: Yup.string()
        .required()
        .min(8, "Password should be of minimum 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
          "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .label("New Password"),
    }),
    onSubmit: async (values, { resetForm, setFieldError }) => {
      setIsLoading(true);
      const res = await dispatch(
        updateUserDetails({
          ...values,
          id: user?.id,
          password: values.newPassword,
        })
      );
      if (res.type === "auth/updateDetails/fulfilled") {
        resetForm();
        dispatch(successMessage("Password Updated successfully"));
      } else setFieldError("oldPassword", res.payload as string);
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
              name={"oldPassword"}
              type={"password"}
              placeholder={"Old Password"}
              onChange={(value) =>
                formik.setFieldValue("oldPassword", value || "")
              }
              onBlur={formik.handleBlur}
              value={formik.values.oldPassword}
              error={
                formik.touched.oldPassword ? formik.errors.oldPassword : ""
              }
              fullWidth
            />
          </div>
          <div className="col-md-6">
            <Input
              name={"newPassword"}
              type={"password"}
              placeholder={"New Password"}
              onChange={(value) =>
                formik.setFieldValue("newPassword", value || "")
              }
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
              error={
                formik.touched.newPassword ? formik.errors.newPassword : ""
              }
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
                Update Password{" "}
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

export default ChangePasswordSectonContainer;
