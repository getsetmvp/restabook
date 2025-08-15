import React from "react";
import "./TableReservationSectionContainer.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";

// hooks
import { useAppDispatch } from "../../hooks/hooks";

// reducers
import { createReservation } from "../../store/reservation/reservationSlice";
import { errorMessage, successMessage } from "../../store/alert/alertSlice";

// components
import Input from "../../components/Input/Input";

// interface
interface TableReservationSectionContainerProps {
  formRef: React.Ref<any>;
  onSuccess: () => void;
}

const TableReservationSectionContainer = ({
  formRef,
  onSuccess,
}: TableReservationSectionContainerProps) => {
  const dispatch = useAppDispatch();
  // state
  const [_isLoading, setIsLoading] = React.useState(false);
  // form
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      persons: "",
      date: new Date().toString(),
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required().label("Full Name"),
      email: Yup.string().email().required().label("Email Address"),
      persons: Yup.number()
        .required()
        .max(10, "Maximum 10 Persons are allowed")
        .min(1)
        .label("Persons"),
      date: Yup.string().required().label("Date"),
      message: Yup.string().required().label("Message"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      const res = await dispatch(createReservation(values));
      if (res.type === "reservation/createReservation/fulfilled") {
        resetForm();
        onSuccess();
        dispatch(successMessage("Reservation received successfully"));
      } else {
        dispatch(errorMessage(res.payload as string));
      }
      setIsLoading(false);
    },
  });
  // function
  return (
    <form id="table-reservation" onSubmit={formik.handleSubmit} ref={formRef}>
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
      <div className="row-md">
        <div className="col-md-6">
          <Input
            name={"date"}
            type={"date"}
            placeholder={"Date"}
            onChange={(value) => formik.setFieldValue("date", value || "")}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            error={formik.touched.date ? formik.errors.date : ""}
            fullWidth
          />
        </div>
        <div className="col-md-6">
          <Input
            name={"persons"}
            type={"number"}
            placeholder={"Persons"}
            onChange={(value) => formik.setFieldValue("persons", value || "")}
            onBlur={formik.handleBlur}
            value={formik.values.persons}
            error={formik.touched.persons ? formik.errors.persons : ""}
            fullWidth
          />
        </div>
      </div>
      <div className="w-full">
        <Input
          name={"message"}
          type={"textarea"}
          rows={3}
          placeholder={"Message"}
          onChange={(value) => formik.setFieldValue("message", value || "")}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          error={formik.touched.message ? formik.errors.message : ""}
          fullWidth
        />
      </div>
    </form>
  );
};

export default TableReservationSectionContainer;
